import { Page } from '@vuepress/core'
import { Ilist } from '../index'

const counter = function (content) {
  const cn = (content.match(/[\u4E00-\u9FA5]/g) || []).length;
  const en = (content.replace(/[\u4E00-\u9FA5]/g, '').match(/[a-zA-Z0-9_\u0392-\u03c9\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|[\u00E4\u00C4\u00E5\u00C5\u00F6\u00D6]+|\w+/g) || []).length;
  return [cn, en];
};
// 文章大概需要多久读完
const min2read = (content, minusLen = 0,{ cn = 250, en = 200 } = {}) => {
  var len = counter(content);
  var readingTime = len[0] / cn + len[1] / en;
  return readingTime < 1 ? '1m' : parseInt(`${readingTime}`, 10) + 'm';
}
// 文章的字数
const wordcount = (content, minusLen = 0) => {
  var len = counter(content);
  var count = len[0] + len[1];
  if (count < 1000) {
    return count;
  }
  return Math.round(count / 100) / 10 + 'k';
}

export default  {
  name: 'vuepress-plugin-foo',
  extendsPage(page) {
    // 去掉页面的Frontmatter
    const content = page.content.replace(/^(---\n[\s\S]*---)/, '')
    const time = min2read(content)
    const count = wordcount(content)
    page.time = time
    page.count = count
  },
  onInitialized(app) {
    const lists:Ilist[] = []
    app.pages.forEach((item:Page) => {
      if (item.path === '/list.html') {
        item.data = {
          ...item.data,
          lists
        }
      }
      if (/^\/[\s\S]*\/[\s\S]*/.test(item.path)) {
        lists.push({
          path: item.data.path,
          title: item.data.title,
          frontmatter: item.data.frontmatter,
          git: item.data?.git,
          time: item.time,
          count: item.count
        })
      }
    });
  }
}