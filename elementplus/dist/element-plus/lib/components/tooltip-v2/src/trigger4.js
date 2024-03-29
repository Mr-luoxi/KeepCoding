'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../utils/index2.js');
require('../../../tokens/index2.js');
var forwardRef = require('./forward-ref.js');
var trigger = require('./trigger3.js');
var common = require('./common2.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var tooltipV2 = require('../../../tokens/tooltip-v22.js');
var event = require('../../../utils/dom/event2.js');

const __default__ = {
  name: "ElTooltipV2Trigger"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: {
    ...common.tooltipV2CommonProps,
    ...trigger.tooltipV2TriggerProps
  },
  setup(__props) {
    const props = __props;
    const { onClose, onOpen, onDelayOpen, triggerRef, contentId } = vue.inject(tooltipV2.tooltipV2RootKey);
    let isMousedown = false;
    const setTriggerRef = (el) => {
      triggerRef.value = el;
    };
    const onMouseup = () => {
      isMousedown = false;
    };
    const onMouseenter = event.composeEventHandlers(props.onMouseEnter, onDelayOpen);
    const onMouseleave = event.composeEventHandlers(props.onMouseLeave, onClose);
    const onMousedown = event.composeEventHandlers(props.onMouseDown, () => {
      onClose();
      isMousedown = true;
      document.addEventListener("mouseup", onMouseup, { once: true });
    });
    const onFocus = event.composeEventHandlers(props.onFocus, () => {
      if (!isMousedown)
        onOpen();
    });
    const onBlur = event.composeEventHandlers(props.onBlur, onClose);
    const onClick = event.composeEventHandlers(props.onClick, (e) => {
      if (e.detail === 0)
        onClose();
    });
    const events = {
      blur: onBlur,
      click: onClick,
      focus: onFocus,
      mousedown: onMousedown,
      mouseenter: onMouseenter,
      mouseleave: onMouseleave
    };
    const setEvents = (el, events2, type) => {
      if (el) {
        Object.entries(events2).forEach(([name, handler]) => {
          el[type](name, handler);
        });
      }
    };
    vue.watch(triggerRef, (triggerEl, previousTriggerEl) => {
      setEvents(triggerEl, events, "addEventListener");
      setEvents(previousTriggerEl, events, "removeEventListener");
      if (triggerEl) {
        triggerEl.setAttribute("aria-describedby", contentId.value);
      }
    });
    vue.onBeforeUnmount(() => {
      setEvents(triggerRef.value, events, "removeEventListener");
      document.removeEventListener("mouseup", onMouseup);
    });
    return (_ctx, _cache) => {
      return _ctx.nowrap ? (vue.openBlock(), vue.createBlock(vue.unref(forwardRef["default"]), {
        key: 0,
        "set-ref": setTriggerRef,
        "only-child": ""
      }, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      })) : (vue.openBlock(), vue.createElementBlock("button", vue.mergeProps({
        key: 1,
        ref_key: "triggerRef",
        ref: triggerRef
      }, _ctx.$attrs), [
        vue.renderSlot(_ctx.$slots, "default")
      ], 16));
    };
  }
});
var TooltipV2Trigger = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/tooltip-v2/src/trigger.vue"]]);

exports["default"] = TooltipV2Trigger;
//# sourceMappingURL=trigger4.js.map
