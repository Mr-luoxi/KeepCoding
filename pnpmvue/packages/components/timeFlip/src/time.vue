<!--
 * @Author: luo xi
 * @Date: 2022-12-28 22:51:30
 * @LastEditTime: 2022-12-28 23:31:07
 * @LastEditors: luo xi
 * @Description: 
 * @FilePath: /KeepCoding/pnpmvue/packages/components/timeFlip/src/time.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div :class="[ns.b()]">
    <TimeFlip :count="count[0]" :curCount="curCount[0]"></TimeFlip>
    <TimeFlip :count="count[1]" :curCount="curCount[1]"></TimeFlip>
    <span>:</span>
    <TimeFlip :count="count[2]" :curCount="curCount[2]"></TimeFlip>
    <TimeFlip :count="count[3]" :curCount="curCount[3]"></TimeFlip>
    <span>:</span>
    <TimeFlip :count="count[4]" :curCount="curCount[4]"></TimeFlip>
    <TimeFlip :count="count[5]" :curCount="curCount[5]"></TimeFlip>
  </div>
</template>

<script setup>
import { timeProps } from "./timeFlip.js";
import { ref } from "vue";
// import TimeFlip from "./timeFlip.vue";
import { useNamespace } from "@iep-plus/hooks";

defineProps(timeProps);

const config = ref({});
const count = ref([1, 2, 3, 4, 5, 6]);
const curCount = ref([1, 2, 3, 4, 5, 6]);
const ns = useNamespace("time");

setTimeout(() => {
  count.value = [4, 5, 1, 1, 1, 1];
}, 1000);

setTimeout(() => {
  count.value = [2, 3, 4, 11, 11, 11];
}, 3000);

defineOptions({
  name: "timeBlock",
  inheritAttrs: false,
});
</script>