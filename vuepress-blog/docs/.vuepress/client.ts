import { defineClientConfig } from '@vuepress/client'
import Home from './Layouts/Home.vue'
import List from './Layouts/List.vue'
import Layout from './Layouts/Layout.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // console.log(app.pages);
    
  },
  layouts: {
    Home,
    List,
    Layout
  },
  rootComponents: [],
})