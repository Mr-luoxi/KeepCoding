<!--
 * @Author: luo xi
 * @Date: 2022-10-30 09:59:09
 * @LastEditTime: 2022-10-30 11:58:08
 * @LastEditors: luo xi
 * @Description: 
 * @FilePath: /interview-2022/macOs/my-vitecamp-app/src/views/desk/BootUp.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div class="boot-up">
    <AppleIcon></AppleIcon>
    <div class="boot-progress">
      <div class="indicator" :style="{ transform: `translateX(-${output}%)` }" />
    </div>
  </div>
  <!-- <iframe id="audio" src="/sounds/mac-startup-sound.mp3" type="audio/mp3" allow="autoplay" title="hello" /> -->
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { TransitionPresets, useTransition, promiseTimeout } from '@vueuse/core';
import AppleIcon from '~icons/mdi/apple';

const progressVal = ref(100);
// 样式数据滚动
const output = useTransition(progressVal, {
  duration: 1500,
  transition: TransitionPresets.linear,
});
// 使用路由
const route = useRouter();
onMounted(async () => {
  progressVal.value = 0;
  // 两秒之后进入主页
  await promiseTimeout(1500);
  route.push({
    name: 'home',
  });
});
</script>

<style lang="scss" scoped>
.boot-up {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation-fill-mode: forwards;
  gap: 2rem;
  // :global{}将需要修改的class名包裹起来，就可以到到修改的目的。
  :global(svg) {
    color: white;
    font-size: 100px;
  }

  .boot-progress {
    border-radius: 50px;
    height: 4px;
    width: 150px;
    background-color: #424242;
    overflow-x: hidden;
  }

  .indicator {
    background-color: #f5f5f5;
    border-radius: inherit;
    width: 100%;
    height: 100%;
    transform: translateX(-0%);
  }
}
</style>
