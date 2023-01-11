<template>
  <Navbar />
  <div class="contain">
    <div class="right info">
      <div class="tags">
        <h6>标签云</h6>
        <template v-for="item in allTags">
          <span @click="handleChangeTag(item)" :class="{active : curTag === item}">{{item}}</span>
        </template>
        <span @click="handleChangeTag('')" :class="{active : curTag === ''}">所有</span>
      </div>
    </div>
    <div class="lists">
      <div class="item" v-for="item in lists.slice(curPage*pageSize, curPage*pageSize + pageSize)" :key="item.path">
        <a :href="item.path" class="link" :title="item.title">
        {{item.title}}
        </a>
        <div class="info">
          <p title="文章创建时间"><i class="iconfont">&#xe644;</i>{{new Date(item.frontmatter.date).toLocaleDateString()}}</p>
          <template v-if="item.frontmatter.tags">
            <p title="文章标签">
              <i class="iconfont">&#xe68a;</i>
              <span v-for="(tag, index) in item.frontmatter.tags" :key="index" class="tag">
                {{tag}}
              </span>
            </p>
          </template>
          <p title="文章大概的字数"><i class="iconfont">&#xe71c;</i>{{item.count}}</p>
          <p title="大概需要阅读的时间"><i class="iconfont">&#xe63e;</i>{{item.time}}</p>
        </div>
        <div v-if="item.frontmatter.description" class="art">
          {{item.frontmatter.description}}……<a :href="item.path" class="look">阅读原文</a>
        </div>
        <div class="art" v-html="item.excerpt" v-else></div>
      </div>
    </div>
    <div class="pagination">
        <span class="pre" @click="handlePre">上一页</span>
        {{curPage}} - {{allSize}}
        <span class="next" @click="handleNext">下一页</span>
      </div>
  </div>
</template>
<script>
import { usePageData } from '@vuepress/client'
import Navbar from '@theme/Navbar.vue'
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'

export default {
  components: {
    Navbar
  },
  setup() {
    const pageSize = ref(3)
    const curPage = ref(0)
    const query = useRoute().query
    let curTag = ref(query?.tag || '')

    const page = usePageData()
    const allList = page.value.lists || []
    const allTags = allList.reduce((previous, current) => {
      return previous.concat(current.frontmatter.tags)
    }, [])
    const lists = computed(() => {
      return curTag.value ? allList.filter((item) => {
          return item.frontmatter?.tags?.includes(curTag.value)
        }) : allList
    })

    const allSize = computed(() => {
      return Math.ceil(lists.value.length/pageSize.value)
    })
    const handleChangeTag = (tag) =>{
      curTag.value = tag
    }
    const handlePre = () => {
      curPage.value = curPage.value <= 0 ? 0 : curPage.value-1
    }
    const handleNext = () =>{
      curPage.value = curPage.value >= allSize.value - 1 ? allSize.value - 1 : curPage.value+1
    }
    return {
      allSize,
      curPage,
      pageSize,
      curTag,
      lists,
      allTags: [...new Set(allTags)],
      handleChangeTag,
      handlePre,
      handleNext
    }
  }
}
</script>

<style lang="scss" scoped>
.contain{
  padding-top: var(--navbar-height);
  width: 90%;
  margin: 0 auto;
}
.lists{
  margin-right: 325px;
  margin-top:1.4rem;
  box-shadow: 0 0 6px rgba(239,239,239,1);
  border-radius: 3px;
  overflow:hidden;
  .item:last-child{
    border-bottom-color: transparent
  }
}
.item{
  background-color: var(--c-bg);
  border-bottom: 1px solid #efefef;
  color: rgba(50,50,50,.8);
  padding: 18px 20px;
}
.dark {
  .item{
    color: #a39e9e;
    border-bottom-color: #a39e9e;
  }
}
.link{
  display: block;
  font-weight: 500;
  color: #1e90ff;
  text-decoration: none;
  font-size: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.info{
  font-size: 13px;
  margin:6 0;
  &>p{
    margin:0;
    line-height: 1.5;
    display: inline-block;
    padding-right: 10px
  }
}
.tag{
  border-bottom: 1px solid #ccc;
  margin-right: 4px
}
.art{
  font-size: 14px;
}
.look{
  text-decoration: none!important;
  margin-left: 6px;
  color: #fff;
  border-radius: 3px;
  background-color: #5ea5ea;
  font-size: 12px;
  padding: 3px 6px;
  &:hover{
    background-color: #1e90ff
  }
}
.right{
  position:sticky;
  top:var(--navbar-height);
  width:310px;
  float: right;
  margin-top: 1.4rem!important;
  &.info{
    box-shadow: 0 0 6px rgba(239,239,239,1);
    border-radius: 3px;
    overflow:hidden;
    margin:0 10px 10px;
  }
  .tags{
    background: var(--c-bg);
    padding: 10px;
    box-sizing: border-box;
    &>h6{
    margin:0 0 10px;
    font-size: 16px;
    }
    .active{
      background-color: #70b4f6;
      color: #fff;
      &:hover{
        color: #fff;
      }
    }
    &>span{
      cursor: pointer;
      display: inline-block;
      font-size: 13px;
      padding: 4px 10px;
      border-radius: 8px;
      margin:0 8px 8px 0;
      background-color: #f9f9f9;
      color: #bbb;
      &:hover{
        color: #70b4f6;
      }
    }
  }
}
.pagination{
  margin-top: 10px;
  span{
    display: inline-block;
    margin-right: 10px;
    cursor: pointer;
  }
}
</style>