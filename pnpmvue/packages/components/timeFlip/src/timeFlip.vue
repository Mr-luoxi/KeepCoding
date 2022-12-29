<!--
 * @Author: luo xi
 * @Date: 2022-04-30 22:41:49
 * @LastEditTime: 2022-12-29 21:47:20
 * @LastEditors: luo xi
 * @Description: 参考https://juejin.cn/post/7169852766452613150
 * @FilePath: /KeepCoding/pnpmvue/packages/components/timeFlip/src/timeFlip.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div
    :class="[
      ns.b(),
      isTopFlip ? ns.b('up') : ns.b('down'),
      isFlipping && ns.b('go'),
    ]"
    :style="style"
    v-bind="$attrs"
  >
    <div
      :class="[ns.b('digital'), ns.m('front'), ns.b('number' + count)]"
    ></div>
    <div
      :class="[ns.b('digital'), ns.m('back'), ns.b('number' + nextCount)]"
    ></div>
  </div>
  <!-- <button @click="flipDown">向下翻+1</button> -->
  <!-- <button @click="flipUp">向上翻-1</button> -->
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useNamespace } from "@iep-plus/hooks";
import flip from "./timeFlip.js";

// import iconProps from "./icon";
// 使用unplugin-vue-define-options 来注册组件
defineOptions({
  name: "TimeFlip",
  inheritAttrs: false,
});
const props = defineProps(flip);
// 当前数字0
const count = ref(props.count);
// 下一个数字 1
const nextCount = ref(props.count);
// 是否正在翻转
const isFlipping = ref(false);
// 向上翻还是向下
const isTopFlip = ref(props.isTopFlip);

const ns = useNamespace("flip");
const style = computed(() => {
  return {
    height: props.height + "px",
    lineHeight: props.height + "px",
    width: props.width + "px",
    fontSize: props.fontSize + "px",
  };
});
// 向下翻+1
// const flipDown = () => {
//   if (isFlipping.value) {
//     return;
//   }
//   isTopFlip.value = false;
//   nextCount.value = count.value >= 9 ? 0 : count.value + 1;
//   isFlipping.value = true;
//   setTimeout(function () {
//     isFlipping.value = false;
//   }, 1000);
//   count.value = nextCount.value;
// };
// 向上翻-1
const flipUp = () => {
  if (isFlipping.value) {
    return;
  }
  nextCount.value = props.count;
  // nextCount.value = count.value <= 0 ? 9 : count.value - 1;
  isFlipping.value = true;
  count.value = nextCount.value;
  setTimeout(function () {
    isFlipping.value = false;
  }, 900);
};

watch(
  props,
  () => {
    flipUp();
  },
  { deep: true }
);
</script>