'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var core = require('@popperjs/core');
require('../../../hooks/index2.js');
require('../../../tokens/index2.js');
var content = require('./content3.js');
var utils = require('./utils2.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var popper = require('../../../tokens/popper2.js');
var index = require('../../../hooks/use-z-index/index2.js');
var index$1 = require('../../../hooks/use-namespace/index2.js');

const __default__ = {
  name: "ElPopperContent"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: content.usePopperContentProps,
  emits: ["mouseenter", "mouseleave"],
  setup(__props, { expose }) {
    const props = __props;
    const { popperInstanceRef, contentRef, triggerRef } = vue.inject(popper.POPPER_INJECTION_KEY, void 0);
    const { nextZIndex } = index.useZIndex();
    const ns = index$1.useNamespace("popper");
    const popperContentRef = vue.ref();
    const arrowRef = vue.ref();
    const arrowOffset = vue.ref();
    vue.provide(popper.POPPER_CONTENT_INJECTION_KEY, {
      arrowRef,
      arrowOffset
    });
    const contentZIndex = vue.ref(props.zIndex || nextZIndex());
    const computedReference = vue.computed(() => utils.unwrapMeasurableEl(props.referenceEl) || vue.unref(triggerRef));
    const contentStyle = vue.computed(() => [{ zIndex: vue.unref(contentZIndex) }, props.popperStyle]);
    const contentClass = vue.computed(() => [
      ns.b(),
      ns.is("pure", props.pure),
      ns.is(props.effect),
      props.popperClass
    ]);
    const createPopperInstance = ({ referenceEl, popperContentEl, arrowEl }) => {
      const options = utils.buildPopperOptions(props, {
        arrowEl,
        arrowOffset: vue.unref(arrowOffset)
      });
      return core.createPopper(referenceEl, popperContentEl, options);
    };
    const updatePopper = (shouldUpdateZIndex = true) => {
      var _a;
      (_a = vue.unref(popperInstanceRef)) == null ? void 0 : _a.update();
      shouldUpdateZIndex && (contentZIndex.value = props.zIndex || nextZIndex());
    };
    const togglePopperAlive = () => {
      var _a, _b;
      const monitorable = { name: "eventListeners", enabled: props.visible };
      (_b = (_a = vue.unref(popperInstanceRef)) == null ? void 0 : _a.setOptions) == null ? void 0 : _b.call(_a, (options) => ({
        ...options,
        modifiers: [...options.modifiers || [], monitorable]
      }));
      updatePopper(false);
    };
    vue.onMounted(() => {
      let updateHandle;
      vue.watch(computedReference, (referenceEl) => {
        var _a;
        updateHandle == null ? void 0 : updateHandle();
        const popperInstance = vue.unref(popperInstanceRef);
        (_a = popperInstance == null ? void 0 : popperInstance.destroy) == null ? void 0 : _a.call(popperInstance);
        if (referenceEl) {
          const popperContentEl = vue.unref(popperContentRef);
          contentRef.value = popperContentEl;
          popperInstanceRef.value = createPopperInstance({
            referenceEl,
            popperContentEl,
            arrowEl: vue.unref(arrowRef)
          });
          updateHandle = vue.watch(() => referenceEl.getBoundingClientRect(), () => updatePopper(), {
            immediate: true
          });
        } else {
          popperInstanceRef.value = void 0;
        }
      }, {
        immediate: true
      });
      vue.watch(() => props.visible, togglePopperAlive, { immediate: true });
      vue.watch(() => utils.buildPopperOptions(props, {
        arrowEl: vue.unref(arrowRef),
        arrowOffset: vue.unref(arrowOffset)
      }), (option) => {
        var _a;
        return (_a = popperInstanceRef.value) == null ? void 0 : _a.setOptions(option);
      });
    });
    expose({
      popperContentRef,
      popperInstanceRef,
      updatePopper,
      contentStyle
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        ref_key: "popperContentRef",
        ref: popperContentRef,
        style: vue.normalizeStyle(vue.unref(contentStyle)),
        class: vue.normalizeClass(vue.unref(contentClass)),
        role: "tooltip",
        onMouseenter: _cache[0] || (_cache[0] = (e) => _ctx.$emit("mouseenter", e)),
        onMouseleave: _cache[1] || (_cache[1] = (e) => _ctx.$emit("mouseleave", e))
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 38);
    };
  }
});
var ElPopperContent = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/popper/src/content.vue"]]);

exports["default"] = ElPopperContent;
//# sourceMappingURL=content4.js.map
