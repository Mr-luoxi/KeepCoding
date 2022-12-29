<!--
 * @Author: luo xi
 * @Date: 2022-12-28 22:51:30
 * @LastEditTime: 2022-12-29 21:07:53
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
import { ref, onMounted, onBeforeUnmount } from "vue";
// import TimeFlip from "./timeFlip.vue";
import { useNamespace } from "@iep-plus/hooks";
import dayjs from "dayjs";

defineProps(timeProps);
defineOptions({
  name: "timeBlock",
  inheritAttrs: false,
});

const config = ref({});
const count = ref([]);
const curCount = ref([1, 2, 3, 4, 5, 6]);
const nowTime = ref(new Date());
const ns = useNamespace("time");

function getTime() {
  const hour = nowTime.value.getHours().toString().split("");
  const minute = nowTime.value.getMinutes().toString().split("");
  const second = nowTime.value.getSeconds().toString().split("");

  if (hour.length === 1) {
    hour.unshift(0);
  }
  if (minute.length === 1) {
    minute.unshift(0);
  }
  if (second.length === 1) {
    second.unshift(0);
  }

  count.value[0] = Number(hour[0]);
  count.value[1] = Number(hour[1]);
  count.value[2] = Number(minute[0]);
  count.value[3] = Number(minute[1]);
  count.value[4] = Number(second[0]);
  count.value[5] = Number(second[1]);
}
getTime();

onMounted(() => {
  setInterval(() => {
    nowTime.value = new Date();
    getTime();
  }, 1000);
});

console.log(dayjs(new Date()).format("hh:mm:ss"));
</script>