'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../tooltip/index2.js');
require('../../../constants/index2.js');
require('../../../hooks/index2.js');
var useSliderButton = require('./useSliderButton2.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var event = require('../../../constants/event2.js');
var index$1 = require('../../../hooks/use-namespace/index2.js');

const _sfc_main = vue.defineComponent({
  name: "ElSliderButton",
  components: {
    ElTooltip: index.ElTooltip
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
  emits: [event.UPDATE_MODEL_EVENT],
  setup(props, { emit }) {
    const ns = index$1.useNamespace("slider");
    const initData = vue.reactive({
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
    } = useSliderButton.useSliderButton(props, initData, emit);
    const { hovering, dragging } = vue.toRefs(initData);
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
  const _component_el_tooltip = vue.resolveComponent("el-tooltip");
  return vue.openBlock(), vue.createElementBlock("div", {
    ref: "button",
    class: vue.normalizeClass([_ctx.ns.e("button-wrapper"), { hover: _ctx.hovering, dragging: _ctx.dragging }]),
    style: vue.normalizeStyle(_ctx.wrapperStyle),
    tabindex: "0",
    onMouseenter: _cache[1] || (_cache[1] = (...args) => _ctx.handleMouseEnter && _ctx.handleMouseEnter(...args)),
    onMouseleave: _cache[2] || (_cache[2] = (...args) => _ctx.handleMouseLeave && _ctx.handleMouseLeave(...args)),
    onMousedown: _cache[3] || (_cache[3] = (...args) => _ctx.onButtonDown && _ctx.onButtonDown(...args)),
    onTouchstart: _cache[4] || (_cache[4] = (...args) => _ctx.onButtonDown && _ctx.onButtonDown(...args)),
    onFocus: _cache[5] || (_cache[5] = (...args) => _ctx.handleMouseEnter && _ctx.handleMouseEnter(...args)),
    onBlur: _cache[6] || (_cache[6] = (...args) => _ctx.handleMouseLeave && _ctx.handleMouseLeave(...args)),
    onKeydown: _cache[7] || (_cache[7] = (...args) => _ctx.onKeyDown && _ctx.onKeyDown(...args))
  }, [
    vue.createVNode(_component_el_tooltip, {
      ref: "tooltip",
      visible: _ctx.tooltipVisible,
      "onUpdate:visible": _cache[0] || (_cache[0] = ($event) => _ctx.tooltipVisible = $event),
      placement: "top",
      "stop-popper-mouse-event": false,
      "popper-class": _ctx.tooltipClass,
      disabled: !_ctx.showTooltip,
      persistent: ""
    }, {
      content: vue.withCtx(() => [
        vue.createElementVNode("span", null, vue.toDisplayString(_ctx.formatValue), 1)
      ]),
      default: vue.withCtx(() => [
        vue.createElementVNode("div", {
          class: vue.normalizeClass([_ctx.ns.e("button"), { hover: _ctx.hovering, dragging: _ctx.dragging }])
        }, null, 2)
      ]),
      _: 1
    }, 8, ["visible", "popper-class", "disabled"])
  ], 38);
}
var SliderButton = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render], ["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/slider/src/button.vue"]]);

exports["default"] = SliderButton;
//# sourceMappingURL=button2.js.map
