/*
 * @Author: luo xi
 * @Date: 2023-01-11 21:04:37
 * @LastEditTime: 2023-01-13 10:53:54
 * @LastEditors: luoxi
 * @Description:
 * @FilePath: /KeepCoding/vuepress-starter/docs/.vuepress/config.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { defineUserConfig, defaultTheme } from "vuepress";
import anchor from "markdown-it-anchor";
import localTheme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "你好， VuePress ！",
  description: "这是我的第一个 VuePress 站点",
  markdown: {
    anchor: {
      level: [1, 2, 3, 4, 5, 6],
      permalink: anchor.permalink.ariaHidden({
        class: "header-anchor",
        placement: "before", //可设置为after
        symbol: "#", //显示文字，可自行修改
      }),
    },
    code: {
      highlightLines: true, //是否启用高亮功能
      lineNumbers: false, //是否启用行号功能
      preWrapper: true, //是否启用外包装层，上面两个选项的依赖项，启用上面两项必须启用这一项
      vPre: {
        block: true, //代码块启用v-pre标签
        inline: true, //行内代码启用v-pre标签
      },
    },
  },
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/": {
      lang: "en-US",
      title: "VuePress",
      description: "Vue-powered Static Site Generator",
      selectLanguageName: "English",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "VuePress",
      description: "Vue 驱动的静态网站生成器",
      selectLanguageName: "简体中文",
    },
  },
  theme: defaultTheme({
    selectLanguageText: "I18N",
    locales: {
      "/": {
        // navbar
        // navbar: navbarEn,
        // sidebar
        sidebar: {
          "/react": [
            {
              text: "Reference",
              children: ["/react/README.md"],
            },
            {
              text: "next",
              children: ["/react/next/README.md"],
            },
          ],
        },
        // page meta
        editLinkText: "Edit this page on GitHub",
      },

      // "en-US": {
      //   navbar: [
      //     {
      //       text: "HOME",
      //       link: "/",
      //     },
      //   ],
      //   colorModeSwitch: true,
      //   colorMode: "dark",
      //   logo: "http://rongapi.cn/images/logo.png",
      //   repo: "http://gitee.org/vuejs/vuepress",
      //   repoLabel: "Source",
      // },
    },
    // 默认主题配置
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "react",
        link: "/react",
      },
      {
        text: "vue",
        link: "/vue",
      },
      {
        text: "css",
        link: "/css",
      },
      {
        text: "html",
        link: "/html",
      },
    ],
  }),
});
