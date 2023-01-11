import { PageFrontmatter } from '@vuepress/shared'
interface Ilist {
  path: string,
  title: string,
  frontmatter: PageFrontmatter,
  [key: string]: any
}