<!--
 * @Author: luo xi
 * @Date: 2023-01-11 22:31:52
 * @LastEditTime: 2023-01-11 22:45:16
 * @LastEditors: luo xi
 * @Description: 
 * @FilePath: /KeepCoding/vuepress-starter/docs/layouts/Layout.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
   <ParentLayout>
    <Content />
   </ParentLayout>
</template>

<script setup>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import Home from '@theme/Home.vue'
import Content from '@theme/Content.vue'
import Navbar from '@theme/Navbar.vue'
import Page from '@theme/Page.vue'
import Sidebar from '@theme/Sidebar.vue'
console.log(12312312)
</script>

<style>
</style>