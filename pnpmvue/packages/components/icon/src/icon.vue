<!--
 * @Author: luo xi
 * @Date: 2022-04-30 22:41:49
 * @LastEditTime: 2022-11-29 21:49:12
 * @LastEditors: luo xi
 * @Description: 
 * @FilePath: /KeepCoding/pnpmvue/packages/components/icon/src/icon.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <i class="iep-icon__demo" :class="ns.b()" :style="style" v-bind="$attrs">
    <slot>iep-icon</slot>
  </i>
</template>

<script setup>
import { computed } from "vue";
import { useNamespace } from "@iep-plus/hooks";
import iconProps from "./icon";
// 使用unplugin-vue-define-options 来注册组件
defineOptions({
  name: "IepIcon",
  inheritAttrs: false,
});
const props = defineProps(iconProps);

const ns = useNamespace("icon");
const style = computed(() => {
  if (!props.size && !props.color) {
    return {};
  }
  return {
    ...(props.size ? { "font-size": props.size + "px" } : {}),
    ...(props.color ? { color: props.color } : {}),
  };
});
</script>