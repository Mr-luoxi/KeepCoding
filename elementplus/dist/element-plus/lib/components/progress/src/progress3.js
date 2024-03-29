'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../icon/index2.js');
var iconsVue = require('@element-plus/icons-vue');
require('../../../hooks/index2.js');
var progress = require('./progress4.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index$1 = require('../../../hooks/use-namespace/index2.js');

const _sfc_main = vue.defineComponent({
  name: "ElProgress",
  components: {
    ElIcon: index.ElIcon,
    CircleCheck: iconsVue.CircleCheck,
    CircleClose: iconsVue.CircleClose,
    Check: iconsVue.Check,
    Close: iconsVue.Close,
    WarningFilled: iconsVue.WarningFilled
  },
  props: progress.progressProps,
  setup(props) {
    const ns = index$1.useNamespace("progress");
    const barStyle = vue.computed(() => ({
      width: `${props.percentage}%`,
      animationDuration: `${props.duration}s`,
      backgroundColor: getCurrentColor(props.percentage)
    }));
    const relativeStrokeWidth = vue.computed(() => (props.strokeWidth / props.width * 100).toFixed(1));
    const radius = vue.computed(() => {
      if (props.type === "circle" || props.type === "dashboard") {
        return Number.parseInt(`${50 - Number.parseFloat(relativeStrokeWidth.value) / 2}`, 10);
      } else {
        return 0;
      }
    });
    const trackPath = vue.computed(() => {
      const r = radius.value;
      const isDashboard = props.type === "dashboard";
      return `
          M 50 50
          m 0 ${isDashboard ? "" : "-"}${r}
          a ${r} ${r} 0 1 1 0 ${isDashboard ? "-" : ""}${r * 2}
          a ${r} ${r} 0 1 1 0 ${isDashboard ? "" : "-"}${r * 2}
          `;
    });
    const perimeter = vue.computed(() => 2 * Math.PI * radius.value);
    const rate = vue.computed(() => props.type === "dashboard" ? 0.75 : 1);
    const strokeDashoffset = vue.computed(() => {
      const offset = -1 * perimeter.value * (1 - rate.value) / 2;
      return `${offset}px`;
    });
    const trailPathStyle = vue.computed(() => ({
      strokeDasharray: `${perimeter.value * rate.value}px, ${perimeter.value}px`,
      strokeDashoffset: strokeDashoffset.value
    }));
    const circlePathStyle = vue.computed(() => ({
      strokeDasharray: `${perimeter.value * rate.value * (props.percentage / 100)}px, ${perimeter.value}px`,
      strokeDashoffset: strokeDashoffset.value,
      transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease"
    }));
    const stroke = vue.computed(() => {
      let ret;
      if (props.color) {
        ret = getCurrentColor(props.percentage);
      } else {
        switch (props.status) {
          case "success":
            ret = "#13ce66";
            break;
          case "exception":
            ret = "#ff4949";
            break;
          case "warning":
            ret = "#e6a23c";
            break;
          default:
            ret = "#20a0ff";
        }
      }
      return ret;
    });
    const statusIcon = vue.computed(() => {
      if (props.status === "warning") {
        return iconsVue.WarningFilled;
      }
      if (props.type === "line") {
        return props.status === "success" ? iconsVue.CircleCheck : iconsVue.CircleClose;
      } else {
        return props.status === "success" ? iconsVue.Check : iconsVue.Close;
      }
    });
    const progressTextSize = vue.computed(() => {
      return props.type === "line" ? 12 + props.strokeWidth * 0.4 : props.width * 0.111111 + 2;
    });
    const content = vue.computed(() => props.format(props.percentage));
    const getCurrentColor = (percentage) => {
      var _a;
      const { color } = props;
      if (typeof color === "function") {
        return color(percentage);
      } else if (typeof color === "string") {
        return color;
      } else {
        const span = 100 / color.length;
        const seriesColors = color.map((seriesColor, index) => {
          if (typeof seriesColor === "string") {
            return {
              color: seriesColor,
              percentage: (index + 1) * span
            };
          }
          return seriesColor;
        });
        const colors = seriesColors.sort((a, b) => a.percentage - b.percentage);
        for (const color2 of colors) {
          if (color2.percentage > percentage)
            return color2.color;
        }
        return (_a = colors[colors.length - 1]) == null ? void 0 : _a.color;
      }
    };
    const slotData = vue.computed(() => {
      return {
        percentage: props.percentage
      };
    });
    return {
      ns,
      barStyle,
      relativeStrokeWidth,
      radius,
      trackPath,
      perimeter,
      rate,
      strokeDashoffset,
      trailPathStyle,
      circlePathStyle,
      stroke,
      statusIcon,
      progressTextSize,
      content,
      slotData
    };
  }
});
const _hoisted_1 = ["aria-valuenow"];
const _hoisted_2 = { viewBox: "0 0 100 100" };
const _hoisted_3 = ["d", "stroke", "stroke-width"];
const _hoisted_4 = ["d", "stroke", "stroke-linecap", "stroke-width"];
const _hoisted_5 = { key: 0 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = vue.resolveComponent("el-icon");
  return vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass([
      _ctx.ns.b(),
      _ctx.ns.m(_ctx.type),
      _ctx.ns.is(_ctx.status),
      {
        [_ctx.ns.m("without-text")]: !_ctx.showText,
        [_ctx.ns.m("text-inside")]: _ctx.textInside
      }
    ]),
    role: "progressbar",
    "aria-valuenow": _ctx.percentage,
    "aria-valuemin": "0",
    "aria-valuemax": "100"
  }, [
    _ctx.type === "line" ? (vue.openBlock(), vue.createElementBlock("div", {
      key: 0,
      class: vue.normalizeClass(_ctx.ns.b("bar"))
    }, [
      vue.createElementVNode("div", {
        class: vue.normalizeClass(_ctx.ns.be("bar", "outer")),
        style: vue.normalizeStyle({ height: `${_ctx.strokeWidth}px` })
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass([
            _ctx.ns.be("bar", "inner"),
            { [_ctx.ns.bem("bar", "inner", "indeterminate")]: _ctx.indeterminate }
          ]),
          style: vue.normalizeStyle(_ctx.barStyle)
        }, [
          (_ctx.showText || _ctx.$slots.default) && _ctx.textInside ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            class: vue.normalizeClass(_ctx.ns.be("bar", "innerText"))
          }, [
            vue.renderSlot(_ctx.$slots, "default", vue.normalizeProps(vue.guardReactiveProps(_ctx.slotData)), () => [
              vue.createElementVNode("span", null, vue.toDisplayString(_ctx.content), 1)
            ])
          ], 2)) : vue.createCommentVNode("v-if", true)
        ], 6)
      ], 6)
    ], 2)) : (vue.openBlock(), vue.createElementBlock("div", {
      key: 1,
      class: vue.normalizeClass(_ctx.ns.b("circle")),
      style: vue.normalizeStyle({ height: `${_ctx.width}px`, width: `${_ctx.width}px` })
    }, [
      (vue.openBlock(), vue.createElementBlock("svg", _hoisted_2, [
        vue.createElementVNode("path", {
          class: vue.normalizeClass(_ctx.ns.be("circle", "track")),
          d: _ctx.trackPath,
          stroke: `var(${_ctx.ns.cssVarName("fill-color-light")}, #e5e9f2)`,
          "stroke-width": _ctx.relativeStrokeWidth,
          fill: "none",
          style: vue.normalizeStyle(_ctx.trailPathStyle)
        }, null, 14, _hoisted_3),
        vue.createElementVNode("path", {
          class: vue.normalizeClass(_ctx.ns.be("circle", "path")),
          d: _ctx.trackPath,
          stroke: _ctx.stroke,
          fill: "none",
          "stroke-linecap": _ctx.strokeLinecap,
          "stroke-width": _ctx.percentage ? _ctx.relativeStrokeWidth : 0,
          style: vue.normalizeStyle(_ctx.circlePathStyle)
        }, null, 14, _hoisted_4)
      ]))
    ], 6)),
    (_ctx.showText || _ctx.$slots.default) && !_ctx.textInside ? (vue.openBlock(), vue.createElementBlock("div", {
      key: 2,
      class: vue.normalizeClass(_ctx.ns.e("text")),
      style: vue.normalizeStyle({ fontSize: `${_ctx.progressTextSize}px` })
    }, [
      vue.renderSlot(_ctx.$slots, "default", vue.normalizeProps(vue.guardReactiveProps(_ctx.slotData)), () => [
        !_ctx.status ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_5, vue.toDisplayString(_ctx.content), 1)) : (vue.openBlock(), vue.createBlock(_component_el_icon, { key: 1 }, {
          default: vue.withCtx(() => [
            (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.statusIcon)))
          ]),
          _: 1
        }))
      ])
    ], 6)) : vue.createCommentVNode("v-if", true)
  ], 10, _hoisted_1);
}
var Progress = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render], ["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/progress/src/progress.vue"]]);

exports["default"] = Progress;
//# sourceMappingURL=progress3.js.map
