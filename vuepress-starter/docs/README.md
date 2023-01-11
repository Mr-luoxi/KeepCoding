<!--
 * @Author: luo xi
 * @Date: 2023-01-11 21:25:11
 * @LastEditTime: 2023-01-11 22:41:45
 * @LastEditors: luo xi
 * @Description: 
 * @FilePath: /KeepCoding/vuepress-starter/docs/README.md
 * 可以输入预定的版权声明、个性签名、空行等
-->
<style>
    h2 {
        color:yellow
    }
</style>

---
lang: zh-CN
title: 页面的标题
description: 页面的描述
layout: Layout
---
# Hello React

```ts{1,6-8}
import { defaultTheme, defineUserConfig } from 'vuepress'
 
export default defineUserConfig({
  title: '你好， VuePress',
 
  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```

::: warning

注意，这是warning容器的内容

:::

```
data.query({{ version }})
```

```:no-v-pre
data.query("{{data?.CallUrl}}/{{data?.Url}}",{查询参数1:值1,查询参数1:值1})
```