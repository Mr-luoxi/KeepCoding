## element-plus源码配置分析
- element-plus是饿了么基于vue3.0和typescript开发的前端组件库，主要用到打包工具vite、rollup、esbuild、gulp，依赖管理工具pnpm。
### 1.代码目录结构
- docs：项目的说明文档，项目使用静态网站生成器vitepress作为网站的文档服务器。
- internal：主要的打包配置文件，包含了gulp、rollup、esbuild等打包配置，使用gulp来控制打包的整个流程，rollup来打包前端组件的，其中plugins配置了esbuild来打包js和vue文件。
- packages：前端组件相关。
  - components：前端vue组件相关代码
  - constants：一些组件内使用的常量，比如按钮大小，日期类型等。
  - directives：主要是一些vue自定义指令，包含重复点击，点击其他区域检测，浏览器缩放等方法。
  - hooks：主要是一些composition APi，提炼全局通用的方法，减少代码量，可对比mixin全局混入，代码更加清晰。
  - locale：多语言文件夹。
  - test-utils：一些测试方法，用于自动化测试。
  - theme-chalk：组件sass样式文件，全局样式。
  - tokens：主要是vue组件中privide和project用到的属性值。
  - utils：自定义的一些方法，例如：dom操作等
  - element-plus：打包的入口文件，将以上文件中的方法均导入，并且导出。
- play：测试前端组件的vite工程，可以用来测试开发的前端组件。
- scripts：脚本文件。
- typings：ts类型声明文件：组件和全局声明。
### 2.依赖管理工具
#### 依赖管理工具比较分析：目前我们主要使用的依赖管理工具使用的是npm或者yarn,element-plus使用的是pnpm来作为以来管理工具，那么pnpm有什么优点呢？
#### 2.1 npm 和 yarn
- npm和yarn作为老牌的npm包依赖管理工具，在前端开发过程中被广泛使用，但是目前也存在一些问题：
  - 1.依赖安装速度较慢，yarn相较于npm速度要快一些。
  - 2.依赖严重占用系统存储空间，往往一个项目代码依赖就会有一个G的普通情况，每个项目都需要重复安装。
  - 3.doppelgangers，依赖会存在重复安装的问题，如下图：
  - 4.Phantom dependency幽灵依赖问题，即如果安装的某个npm安装包依赖了其他依赖，可以在代码中直接引入使用，存在安全隐患，主要是因为node_modules通过逐级查找依赖，如下图：
#### 2.2 pnpm
- pnpm的项目初衷：节约磁盘空间并提升安装速度。对于第一次使用pnpm可以感受到速度非常快。安装相同数量的依赖对比图如下：
- pnpm不会像npm和yarn一样，如果多个项目使用相同版本依赖会安装多个依赖，采用类似于Linux的硬链接的模式(如下图1)，使多个项目可以共用相同的依赖。将依赖统一存储在系统里面（通过pnpm store path查看目录如下图2），如果某个依赖更新了一个文件，也只是会更新这个文件。
  - 图1
  - 图2
- pnpm采用硬链接的模式，完全避免了node_modules模式带来的问题，通过require就不能获取到对应的依赖。同时也不会存在Phantom dependency的问题，因为相同版本的依赖智慧被安装一次。
- pnpm主要使用方法和配置：
  - pnpm init：创建一个 package.json 文件。
  - pnpm add pkg：安装软件包及其依赖的任何软件包。
  - pnpm install：安装所有依赖。
  - pnpm-workspace.yaml：指定工作空间目录和排除目录。
  ```yaml
    packages:
    # all packages in subdirs of packages/ and components/
    - 'packages/**'
    - 'components/**'
    - 'build/**'
    - 'play/**'
    # exclude packages that are inside test directories
    - '!**/test/**'
  ```
### 3.主要打包文件代码
#### element打包文件主要放在internal的build文件夹下，主要代码如下。
- 通过gulp来执行任务，首先会执行清理和创建dist文件目录，然后打包按需引入的组件包和全量组件包，拷贝相应的皮肤资源文件等。
```javascript
 export default series(
  withTaskName('clean', () => run('pnpm run clean')),
  withTaskName('createOutput', () => mkdir(epOutput, { recursive: true })),
  // 并行执行任务
  parallel(
    // 全量打包
    runTask('buildModules'),
    // 全量按需加载的包
    runTask('buildFullBundle'),
    runTask('generateTypesDefinitions'),
    runTask('buildHelper'),
    series(
      withTaskName('buildThemeChalk', () =>
        run('pnpm run -C packages/theme-chalk build')
      ),
      // 复制样式文件
      copyFullStyle
    )
  ),

  parallel(copyTypesDefinitions, copyFiles)
)
``` 
- build下的tasks文件分别对应以上几个任务
  - full-bundle.ts：通过rollup打包整个vue组件代码，全局导出所有组件。
  ```javascript
  async function buildFullEntry(minify: boolean) {
    const bundle = await rollup({
      <!-- 打包文件地址 -->
      input: path.resolve(epRoot, 'index.ts'),
      plugins: [
        ElementPlusAlias(),
        DefineOptions(),
        vue({
          isProduction: true,
        }),
        vueJsx(),
        nodeResolve({
          extensions: ['.mjs', '.js', '.json', '.ts'],
        }),
        <!-- 将commonjs转换成es6 -->
        commonjs(),
        <!-- esbuild采用ts打包 -->
        esbuild({
          exclude: [],
          minify,
          sourceMap: minify,
          target,
          loaders: {
            '.vue': 'ts',
          },
          define: {
            'process.env.NODE_ENV': JSON.stringify('production'),
          },
        }),
      ],
      external: await generateExternal({ full: true }),
    })
    await writeBundles(bundle, [
      {
        format: 'umd',
        file: path.resolve(
          epOutput,
          'dist',
          formatBundleFilename('index.full', minify, 'js')
        ),
        exports: 'named',
        name: 'ElementPlus',
        <!-- 使用全局的vue -->
        globals: {
          vue: 'Vue',
        },
        sourcemap: minify,
        banner,
      },
      {
        format: 'esm',
        file: path.resolve(
          epOutput,
          'dist',
          formatBundleFilename('index.full', minify, 'mjs')
        ),
        sourcemap: minify,
        banner,
      },
    ])
  }
  ```
  - modules.ts：分别打包每个组件，单个组件按需导出。
  ```javascript
  export const buildModules = async () => {
    <!-- 读取package下的文件，去掉node_modules等文件 -->
    const input = excludeFiles(
      await glob('**/*.{js,ts,vue}', {
        cwd: pkgRoot,
        absolute: true,
        onlyFiles: true,
      })
    )
    const bundle = await rollup({
      input,
      plugins: [
        ElementPlusAlias(),
        DefineOptions(),
        vue({
          isProduction: false,
        }),
        <!-- jsx -->
        vueJsx(),
        nodeResolve({
          extensions: ['.mjs', '.js', '.json', '.ts'],
        }),
        commonjs(),
        esbuild({
          sourceMap: true,
          target,
          loaders: {
            '.vue': 'ts',
          },
        }),
      ],
      external: await generateExternal({ full: false }),
      treeshake: false,
    })
    await writeBundles(
      bundle,
      buildConfigEntries.map(([module, config]): OutputOptions => {
        return {
          format: config.format,
          dir: config.output.path,
          exports: module === 'cjs' ? 'named' : undefined,
          preserveModules: true,
          preserveModulesRoot: epRoot,
          sourcemap: true,
          entryFileNames: `[name].${config.ext}`,
        }
      })
    )
  }
  ```
  - 
### 4.组建自己打包代码
#### 前端组需要进行个性化的组件开发，开发使用vue2，于是决定参考这个项目，进行vue2版本的组件打包框架开发。
- 目前已经完成项目的整体构建，同样采用pnpm，使用相同的项目目录结构。
- 构建的full-bundle.js任务文件。
  ```javascript
    export const buildModules = async () => {
      const input = excludeFiles(
        // 匹配需要打包的文件 js vue ts
        await glob("**/*.{js,ts,vue}", {
          cwd: inDir,
          absolute: true,
          onlyFiles: true,
        })
      );
      console.log(input, "input");
      const bundle = await rollup({
        input: input,
        plugins: [nodeResolve(), vue(), commonjs()],
        external: await generateExternal({ full: false }),
        treeshake: false,
      });

      const buildConfig = [
        {
          format: "umd", // 打包的格式
          file: resolve(outDir, "index.js"),
          name: "iepPlus", // 全局变量名字
          exports: "named", // 导出的名字 用命名的方式导出 libaryTarget:"" name:""
          globals: {
            // 表示使用的vue是全局的
            vue: "Vue",
          },
        },
        {
          format: "esm",
          file: resolve(outDir, "index.esm.js"),
        },
      ];

      return Promise.all(
        buildConfig.map((option) => {
          bundle.write(option);
        })
      );
    };
  ```
- 目前主要实现了，打包全量打包前端组件的配置，按需打包也会很快加入进来，剩下复制字体样式文件、多语言包、多皮肤开发、通过命令创建新的组件模板、使用composition Api等功能。
- 项目地址：http://iris.hikvision.com.cn/luoxi8/iepcomponents
#### 遇到的问题
- 安装依赖的时候，许多依赖都是默认为vue3版本，导致打包失败，例如：rollup-plugin-vue的6.0.x版本，打包之后会报错createElementBlock was not found，主要是因为我们使用的vue2没有这个方法。
- 在组件中打包的时候，遇到Cannot use import statement outside a module问题，主要是es6语法问题,通过配置@babel/env和@babel/plugin-transform-runtime解决问题。
<!-- 配置git 代理 -->
<!-- git config --global http.proxy 127.0.0.1:11087 -->

### 亮点：
- 1.调试技巧
- 2.使用设计模式或者算法解决什么问题
- 3.解决项目中 遇到的疑难问题
