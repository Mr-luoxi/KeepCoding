import { defineComponent, reactive, toRefs, resolveComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, createVNode, withCtx, createElementVNode, toDisplayString } from 'vue';
import { ElTooltip } from '../../tooltip/index2.mjs';
import '../../../constants/index2.mjs';
import '../../../hooks/index2.mjs';
import { useSliderButton } from './useSliderButton2.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { UPDATE_MODEL_EVENT } from '../../../constants/event2.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index2.mjs';

const _sfc_main = defineComponent({
  name: "ElSliderButton",
  components: {
    ElTooltip
  },
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    vertical: {
      type: Boolean,
      default: false
    },
    tooltipClass: {
      type: String,
      default: ""
    }
  },
  emits: [UPDATE_MODEL_EVENT],
  setup(props, { emit }) {
    const ns = useNamespace("slider");
    const initData = reactive({
      hovering: false,
      dragging: false,
      isClick: false,
      startX: 0,
      currentX: 0,
      startY: 0,
      currentY: 0,
      startPosition: 0,
      newPosition: 0,
      oldValue: props.modelValue
    });
    const {
      button,
      tooltip,
      showTooltip,
      tooltipVisible,
      wrapperStyle,
      formatValue,
      handleMouseEnter,
      handleMouseLeave,
      onButtonDown,
      onKeyDown,
      setPosition
    } = useSliderButton(props, initData, emit);
    const { hovering, dragging } = toRefs(initData);
    return {
      ns,
      button,
      tooltip,
      tooltipVisible,
      showTooltip,
      wrapperStyle,
      formatValue,
      handleMouseEnter,
      handleMouseLeave,
      onButtonDown,
      onKeyDown,
      setPosition,
      hovering,
      dragging
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tooltip = resolveComponent("el-tooltip");
  return openBlock(), createElementBlock("div", {
    ref: "button",
    class: normalizeClass([_ctx.ns.e("button-wrapper"), { hover: _ctx.hovering, dragging: _ctx.dragging }]),
    style: normalizeStyle(_ctx.wrapperStyle),
    tabindex: "0",
    onMouseenter: _cache[1] || (_cache[1] = (...args) => _ctx.handleMouseEnter && _ctx.handleMouseEnter(...args)),
    onMouseleave: _cache[2] || (_cache[2] = (...args) => _ctx.handleMouseLeave && _ctx.handleMouseLeave(...args)),
    onMousedown: _cache[3] || (_cache[3] = (...args) => _ctx.onButtonDown && _ctx.onButtonDown(...args)),
    onTouchstart: _cache[4] || (_cache[4] = (...args) => _ctx.onButtonDown && _ctx.onButtonDown(...args)),
    onFocus: _cache[5] || (_cache[5] = (...args) => _ctx.handleMouseEnter && _ctx.handleMouseEnter(...args)),
    onBlur: _cache[6] || (_cache[6] = (...args) => _ctx.handleMouseLeave && _ctx.handleMouseLeave(...args)),
    onKeydown: _cache[7] || (_cache[7] = (...args) => _ctx.onKeyDown && _ctx.onKeyDown(...args))
  }, [
    createVNode(_component_el_tooltip, {
      ref: "tooltip",
      visible: _ctx.tooltipVisible,
      "onUpdate:visible": _cache[0] || (_cache[0] = ($event) => _ctx.tooltipVisible = $event),
      placement: "top",
      "stop-popper-mouse-event": false,
      "popper-class": _ctx.tooltipClass,
      disabled: !_ctx.showTooltip,
      persistent: ""
    }, {
      content: withCtx(() => [
        createElementVNode("span", null, toDisplayString(_ctx.formatValue), 1)
      ]),
      default: withCtx(() => [
        createElementVNode("div", {
          class: normalizeClass([_ctx.ns.e("button"), { hover: _ctx.hovering, dragging: _ctx.dragging }])
        }, null, 2)
      ]),
      _: 1
    }, 8, ["visible", "popper-class", "disabled"])
  ], 38);
}
var SliderButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/slider/src/button.vue"]]);

export { SliderButton as default };
//# sourceMappingURL=button2.mjs.map
