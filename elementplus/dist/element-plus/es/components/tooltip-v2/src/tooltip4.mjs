import { defineComponent, toRefs, reactive, openBlock, createBlock, normalizeProps, guardReactiveProps, unref, withCtx, createVNode, mergeProps, renderSlot, Teleport, Transition, createCommentVNode, createElementBlock, Fragment } from 'vue';
import { pick } from 'lodash-unified';
import { tooltipV2ArrowProps } from './arrow4.mjs';
import { tooltipV2ContentProps } from './content3.mjs';
import { tooltipV2RootProps } from './root3.mjs';
import { tooltipV2Props } from './tooltip3.mjs';
import { tooltipV2TriggerProps } from './trigger3.mjs';
import TooltipV2Root from './root4.mjs';
import TooltipV2Arrow from './arrow3.mjs';
import TooltipV2Content from './content4.mjs';
import TooltipV2Trigger from './trigger4.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';

const __default__ = {
  name: "ElTooltipV2"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: tooltipV2Props,
  setup(__props) {
    const props = __props;
    const refedProps = toRefs(props);
    const arrowProps = reactive(pick(refedProps, Object.keys(tooltipV2ArrowProps)));
    const contentProps = reactive(pick(refedProps, Object.keys(tooltipV2ContentProps)));
    const rootProps = reactive(pick(refedProps, Object.keys(tooltipV2RootProps)));
    const triggerProps = reactive(pick(refedProps, Object.keys(tooltipV2TriggerProps)));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(TooltipV2Root, normalizeProps(guardReactiveProps(unref(rootProps))), {
        default: withCtx(({ open }) => [
          createVNode(TooltipV2Trigger, mergeProps(unref(triggerProps), { nowrap: "" }), {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "trigger")
            ]),
            _: 3
          }, 16),
          (openBlock(), createBlock(Teleport, {
            to: _ctx.to,
            disabled: !_ctx.teleported
          }, [
            _ctx.fullTransition ? (openBlock(), createBlock(Transition, normalizeProps(mergeProps({ key: 0 }, _ctx.transitionProps)), {
              default: withCtx(() => [
                _ctx.alwaysOn || open ? (openBlock(), createBlock(TooltipV2Content, normalizeProps(mergeProps({ key: 0 }, unref(contentProps))), {
                  arrow: withCtx(({ style, side }) => [
                    _ctx.showArrow ? (openBlock(), createBlock(TooltipV2Arrow, mergeProps({ key: 0 }, unref(arrowProps), {
                      style,
                      side
                    }), null, 16, ["style", "side"])) : createCommentVNode("v-if", true)
                  ]),
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "default")
                  ]),
                  _: 3
                }, 16)) : createCommentVNode("v-if", true)
              ]),
              _: 2
            }, 1040)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              _ctx.alwaysOn || open ? (openBlock(), createBlock(TooltipV2Content, normalizeProps(mergeProps({ key: 0 }, unref(contentProps))), {
                arrow: withCtx(({ style, side }) => [
                  _ctx.showArrow ? (openBlock(), createBlock(TooltipV2Arrow, mergeProps({ key: 0 }, unref(arrowProps), {
                    style,
                    side
                  }), null, 16, ["style", "side"])) : createCommentVNode("v-if", true)
                ]),
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 16)) : createCommentVNode("v-if", true)
            ], 2112))
          ], 8, ["to", "disabled"]))
        ]),
        _: 3
      }, 16);
    };
  }
});
var TooltipV2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/tooltip-v2/src/tooltip.vue"]]);

export { TooltipV2 as default };
//# sourceMappingURL=tooltip4.mjs.map
