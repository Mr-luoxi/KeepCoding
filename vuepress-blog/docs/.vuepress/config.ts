import { defineUserConfig, HeadConfig, defaultTheme } from 'vuepress'
import pagePlugin from './plugins/page'

let head:HeadConfig[] = [
  ['meta', { name: 'keywords', content: '官方网址：https://slbyml.github.io' }],
  ['link', { rel: 'apple-touch-icon', href: '/images/link.jpg' }],
  ['link', { rel: 'mask-icon', href: '/images/link.jpg', color: '#1e90ff' }],
]

export default defineUserConfig({
  title: '静水深流',
  description: '这是我的第一个 VuePress 站点',
  lang: 'zh-CN',
  head,
  shouldPrefetch: true, // 页面多的时候，为了性能可以讲prefetch关掉
  theme: defaultTheme({
    editLink: false
  }),
  plugins: [
    pagePlugin
  ]
})