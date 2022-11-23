<!--
 * @Author: luo xi
 * @Date: 2022-04-30 22:41:49
 * @LastEditTime: 2022-07-08 15:50:51
 * @LastEditors: luoxi
 * @Description: 
 * @FilePath: /pnpmvue/packages/components/icon/src/icon.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <i class="iep-icon" :style="style">
    <slot>iep-icon</slot>
  </i>
</template>

<script>
import { defineComponent, computed } from "@vue/composition-api";
import iconProps from "./player";
export default defineComponent({
  name: "iep-icon",
  props: iconProps,
  setup(props) {
    const style = computed(() => {
      if (!props.size && !props.color) {
        return {};
      }
      return {
        ...(props.size ? { "font-size": props.size + "px" } : {}),
        ...(props.color ? { color: props.color } : {}),
      };
    });
    console.log(style);
    return { style };
  },
});
</script>
