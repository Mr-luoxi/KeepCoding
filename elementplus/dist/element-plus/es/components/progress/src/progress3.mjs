import { defineComponent, computed, resolveComponent, openBlock, createElementBlock, normalizeClass, createElementVNode, normalizeStyle, renderSlot, normalizeProps, guardReactiveProps, toDisplayString, createCommentVNode, createBlock, withCtx, resolveDynamicComponent } from 'vue';
import { ElIcon } from '../../icon/index2.mjs';
import { CircleCheck, CircleClose, Check, Close, WarningFilled } from '@element-plus/icons-vue';
import '../../../hooks/index2.mjs';
import { progressProps } from './progress4.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index2.mjs';

const _sfc_main = defineComponent({
  name: "ElProgress",
  components: {
    ElIcon,
    CircleCheck,
    CircleClose,
    Check,
    Close,
    WarningFilled
  },
  props: progressProps,
  setup(props) {
    const ns = useNamespace("progress");
    const barStyle = computed(() => ({
      width: `${props.percentage}%`,
      animationDuration: `${props.duration}s`,
      backgroundColor: getCurrentColor(props.percentage)
    }));
    const relativeStrokeWidth = computed(() => (props.strokeWidth / props.width * 100).toFixed(1));
    const radius = computed(() => {
      if (props.type === "circle" || props.type === "dashboard") {
        return Number.parseInt(`${50 - Number.parseFloat(relativeStrokeWidth.value) / 2}`, 10);
      } else {
        return 0;
      }
    });
    const trackPath = computed(() => {
      const r = radius.value;
      const isDashboard = props.type === "dashboard";
      return `
          M 50 50
          m 0 ${isDashboard ? "" : "-"}${r}
          a ${r} ${r} 0 1 1 0 ${isDashboard ? "-" : ""}${r * 2}
          a ${r} ${r} 0 1 1 0 ${isDashboard ? "" : "-"}${r * 2}
          `;
    });
    const perimeter = computed(() => 2 * Math.PI * radius.value);
    const rate = computed(() => props.type === "dashboard" ? 0.75 : 1);
    const strokeDashoffset = computed(() => {
      const offset = -1 * perimeter.value * (1 - rate.value) / 2;
      return `${offset}px`;
    });
    const trailPathStyle = computed(() => ({
      strokeDasharray: `${perimeter.value * rate.value}px, ${perimeter.value}px`,
      strokeDashoffset: strokeDashoffset.value
    }));
    const circlePathStyle = computed(() => ({
      strokeDasharray: `${perimeter.value * rate.value * (props.percentage / 100)}px, ${perimeter.value}px`,
      strokeDashoffset: strokeDashoffset.value,
      transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease"
    }));
    const stroke = computed(() => {
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
    const statusIcon = computed(() => {
      if (props.status === "warning") {
        return WarningFilled;
      }
      if (props.type === "line") {
        return props.status === "success" ? CircleCheck : CircleClose;
      } else {
        return props.status === "success" ? Check : Close;
      }
    });
    const progressTextSize = computed(() => {
      return props.type === "line" ? 12 + props.strokeWidth * 0.4 : props.width * 0.111111 + 2;
    });
    const content = computed(() => props.format(props.percentage));
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
    const slotData = computed(() => {
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
  const _component_el_icon = resolveComponent("el-icon");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([
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
    _ctx.type === "line" ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(_ctx.ns.b("bar"))
    }, [
      createElementVNode("div", {
        class: normalizeClass(_ctx.ns.be("bar", "outer")),
        style: normalizeStyle({ height: `${_ctx.strokeWidth}px` })
      }, [
        createElementVNode("div", {
          class: normalizeClass([
            _ctx.ns.be("bar", "inner"),
            { [_ctx.ns.bem("bar", "inner", "indeterminate")]: _ctx.indeterminate }
          ]),
          style: normalizeStyle(_ctx.barStyle)
        }, [
          (_ctx.showText || _ctx.$slots.default) && _ctx.textInside ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(_ctx.ns.be("bar", "innerText"))
          }, [
            renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(_ctx.slotData)), () => [
              createElementVNode("span", null, toDisplayString(_ctx.content), 1)
            ])
          ], 2)) : createCommentVNode("v-if", true)
        ], 6)
      ], 6)
    ], 2)) : (openBlock(), createElementBlock("div", {
      key: 1,
      class: normalizeClass(_ctx.ns.b("circle")),
      style: normalizeStyle({ height: `${_ctx.width}px`, width: `${_ctx.width}px` })
    }, [
      (openBlock(), createElementBlock("svg", _hoisted_2, [
        createElementVNode("path", {
          class: normalizeClass(_ctx.ns.be("circle", "track")),
          d: _ctx.trackPath,
          stroke: `var(${_ctx.ns.cssVarName("fill-color-light")}, #e5e9f2)`,
          "stroke-width": _ctx.relativeStrokeWidth,
          fill: "none",
          style: normalizeStyle(_ctx.trailPathStyle)
        }, null, 14, _hoisted_3),
        createElementVNode("path", {
          class: normalizeClass(_ctx.ns.be("circle", "path")),
          d: _ctx.trackPath,
          stroke: _ctx.stroke,
          fill: "none",
          "stroke-linecap": _ctx.strokeLinecap,
          "stroke-width": _ctx.percentage ? _ctx.relativeStrokeWidth : 0,
          style: normalizeStyle(_ctx.circlePathStyle)
        }, null, 14, _hoisted_4)
      ]))
    ], 6)),
    (_ctx.showText || _ctx.$slots.default) && !_ctx.textInside ? (openBlock(), createElementBlock("div", {
      key: 2,
      class: normalizeClass(_ctx.ns.e("text")),
      style: normalizeStyle({ fontSize: `${_ctx.progressTextSize}px` })
    }, [
      renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(_ctx.slotData)), () => [
        !_ctx.status ? (openBlock(), createElementBlock("span", _hoisted_5, toDisplayString(_ctx.content), 1)) : (openBlock(), createBlock(_component_el_icon, { key: 1 }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.statusIcon)))
          ]),
          _: 1
        }))
      ])
    ], 6)) : createCommentVNode("v-if", true)
  ], 10, _hoisted_1);
}
var Progress = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/progress/src/progress.vue"]]);

export { Progress as default };
//# sourceMappingURL=progress3.mjs.map
