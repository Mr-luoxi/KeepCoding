import { defineComponent, shallowRef, ref, computed, watch, onMounted, watchEffect, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, createElementVNode, renderSlot } from 'vue';
import { useWindowSize, useElementBounding, useEventListener } from '@vueuse/core';
import '../../../utils/index2.mjs';
import '../../../hooks/index2.mjs';
import { affixProps, affixEmits } from './affix4.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index2.mjs';
import { throwError } from '../../../utils/error2.mjs';
import { getScrollContainer } from '../../../utils/dom/scroll2.mjs';

const __default__ = {
  name: "ElAffix"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: affixProps,
  emits: affixEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const COMPONENT_NAME = "ElAffix";
    const ns = useNamespace("affix");
    const target = shallowRef();
    const root = shallowRef();
    const scrollContainer = shallowRef();
    const { height: windowHeight } = useWindowSize();
    const {
      height: rootHeight,
      width: rootWidth,
      top: rootTop,
      bottom: rootBottom,
      update: updateRoot
    } = useElementBounding(root);
    const targetRect = useElementBounding(target);
    const fixed = ref(false);
    const scrollTop = ref(0);
    const transform = ref(0);
    const rootStyle = computed(() => {
      return {
        height: fixed.value ? `${rootHeight.value}px` : "",
        width: fixed.value ? `${rootWidth.value}px` : ""
      };
    });
    const affixStyle = computed(() => {
      if (!fixed.value)
        return {};
      const offset = props.offset ? `${props.offset}px` : 0;
      return {
        height: `${rootHeight.value}px`,
        width: `${rootWidth.value}px`,
        top: props.position === "top" ? offset : "",
        bottom: props.position === "bottom" ? offset : "",
        transform: transform.value ? `translateY(${transform.value}px)` : "",
        zIndex: props.zIndex
      };
    });
    const update = () => {
      if (!scrollContainer.value)
        return;
      scrollTop.value = scrollContainer.value instanceof Window ? document.documentElement.scrollTop : scrollContainer.value.scrollTop || 0;
      if (props.position === "top") {
        if (props.target) {
          const difference = targetRect.bottom.value - props.offset - rootHeight.value;
          fixed.value = props.offset > rootTop.value && targetRect.bottom.value > 0;
          transform.value = difference < 0 ? difference : 0;
        } else {
          fixed.value = props.offset > rootTop.value;
        }
      } else if (props.target) {
        const difference = windowHeight.value - targetRect.top.value - props.offset - rootHeight.value;
        fixed.value = windowHeight.value - props.offset < rootBottom.value && windowHeight.value > targetRect.top.value;
        transform.value = difference < 0 ? -difference : 0;
      } else {
        fixed.value = windowHeight.value - props.offset < rootBottom.value;
      }
    };
    const handleScroll = () => {
      emit("scroll", {
        scrollTop: scrollTop.value,
        fixed: fixed.value
      });
    };
    watch(fixed, (val) => emit("change", val));
    onMounted(() => {
      var _a;
      if (props.target) {
        target.value = (_a = document.querySelector(props.target)) != null ? _a : void 0;
        if (!target.value)
          throwError(COMPONENT_NAME, `Target is not existed: ${props.target}`);
      } else {
        target.value = document.documentElement;
      }
      scrollContainer.value = getScrollContainer(root.value, true);
      updateRoot();
    });
    useEventListener(scrollContainer, "scroll", handleScroll);
    watchEffect(update);
    expose({
      update
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "root",
        ref: root,
        class: normalizeClass(unref(ns).b()),
        style: normalizeStyle(unref(rootStyle))
      }, [
        createElementVNode("div", {
          class: normalizeClass({ [unref(ns).m("fixed")]: fixed.value }),
          style: normalizeStyle(unref(affixStyle))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 6)
      ], 6);
    };
  }
});
var Affix = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/affix/src/affix.vue"]]);

export { Affix as default };
//# sourceMappingURL=affix3.mjs.map
