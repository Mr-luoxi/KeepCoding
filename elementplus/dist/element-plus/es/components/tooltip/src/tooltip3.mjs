import { defineComponent, computed, ref, unref, toRef, provide, readonly, watch, resolveComponent, openBlock, createBlock, withCtx, createVNode, renderSlot, createCommentVNode, createElementBlock, toDisplayString } from 'vue';
import { ElPopper } from '../../popper/index2.mjs';
import '../../../utils/index2.mjs';
import '../../../hooks/index2.mjs';
import ElTooltipContent from './content2.mjs';
import ElTooltipTrigger from './trigger2.mjs';
import { useTooltipContentProps, useTooltipTriggerProps, useTooltipProps } from './tooltip4.mjs';
import { TOOLTIP_INJECTION_KEY } from './tokens2.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { createModelToggleComposable } from '../../../hooks/use-model-toggle/index2.mjs';
import ElPopperArrow from '../../popper/src/arrow4.mjs';
import { usePopperArrowProps } from '../../popper/src/arrow3.mjs';
import { usePopperContainer } from '../../../hooks/use-popper-container/index2.mjs';
import { isUndefined } from '../../../utils/types2.mjs';
import { debugWarn } from '../../../utils/error2.mjs';
import { isBoolean } from '@vueuse/core';
import { useId } from '../../../hooks/use-id/index2.mjs';
import { useDelayedToggle } from '../../../hooks/use-delayed-toggle/index2.mjs';

const { useModelToggleProps, useModelToggle, useModelToggleEmits } = createModelToggleComposable("visible");
const _sfc_main = defineComponent({
  name: "ElTooltip",
  components: {
    ElPopper,
    ElPopperArrow,
    ElTooltipContent,
    ElTooltipTrigger
  },
  props: {
    ...useModelToggleProps,
    ...useTooltipContentProps,
    ...useTooltipTriggerProps,
    ...usePopperArrowProps,
    ...useTooltipProps
  },
  emits: [...useModelToggleEmits, "before-show", "before-hide", "show", "hide"],
  setup(props, { emit }) {
    usePopperContainer();
    const compatShowAfter = computed(() => {
      if (!isUndefined(props.openDelay)) {
        debugWarn("ElTooltip", "open-delay is about to be deprecated in the next major version, please use `show-after` instead");
      }
      return props.openDelay || props.showAfter;
    });
    const compatShowArrow = computed(() => {
      if (!isUndefined(props.visibleArrow)) {
        debugWarn("ElTooltip", "`visible-arrow` is about to be deprecated in the next major version, please use `show-arrow` instead");
      }
      return isBoolean(props.visibleArrow) ? props.visibleArrow : props.showArrow;
    });
    const id = useId();
    const popperRef = ref(null);
    const updatePopper = () => {
      var _a;
      const popperComponent = unref(popperRef);
      if (popperComponent) {
        (_a = popperComponent.popperInstanceRef) == null ? void 0 : _a.update();
      }
    };
    const open = ref(false);
    const { show, hide } = useModelToggle({
      indicator: open
    });
    const { onOpen, onClose } = useDelayedToggle({
      showAfter: compatShowAfter,
      hideAfter: toRef(props, "hideAfter"),
      open: show,
      close: hide
    });
    const controlled = computed(() => isBoolean(props.visible));
    provide(TOOLTIP_INJECTION_KEY, {
      controlled,
      id,
      open: readonly(open),
      trigger: toRef(props, "trigger"),
      onOpen,
      onClose,
      onToggle: () => {
        if (unref(open)) {
          onClose();
        } else {
          onOpen();
        }
      },
      onShow: () => {
        emit("show");
      },
      onHide: () => {
        emit("hide");
      },
      onBeforeShow: () => {
        emit("before-show");
      },
      onBeforeHide: () => {
        emit("before-hide");
      },
      updatePopper
    });
    watch(() => props.disabled, (disabled) => {
      if (disabled && open.value) {
        open.value = false;
      }
    });
    return {
      compatShowAfter,
      compatShowArrow,
      popperRef,
      open,
      hide,
      updatePopper,
      onOpen,
      onClose
    };
  }
});
const _hoisted_1 = ["innerHTML"];
const _hoisted_2 = { key: 1 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tooltip_trigger = resolveComponent("el-tooltip-trigger");
  const _component_el_popper_arrow = resolveComponent("el-popper-arrow");
  const _component_el_tooltip_content = resolveComponent("el-tooltip-content");
  const _component_el_popper = resolveComponent("el-popper");
  return openBlock(), createBlock(_component_el_popper, { ref: "popperRef" }, {
    default: withCtx(() => [
      createVNode(_component_el_tooltip_trigger, {
        disabled: _ctx.disabled,
        trigger: _ctx.trigger,
        "virtual-ref": _ctx.virtualRef,
        "virtual-triggering": _ctx.virtualTriggering
      }, {
        default: withCtx(() => [
          _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 8, ["disabled", "trigger", "virtual-ref", "virtual-triggering"]),
      createVNode(_component_el_tooltip_content, {
        "aria-label": _ctx.ariaLabel,
        "boundaries-padding": _ctx.boundariesPadding,
        content: _ctx.content,
        disabled: _ctx.disabled,
        effect: _ctx.effect,
        enterable: _ctx.enterable,
        "fallback-placements": _ctx.fallbackPlacements,
        "hide-after": _ctx.hideAfter,
        "gpu-acceleration": _ctx.gpuAcceleration,
        offset: _ctx.offset,
        persistent: _ctx.persistent,
        "popper-class": _ctx.popperClass,
        "popper-style": _ctx.popperStyle,
        placement: _ctx.placement,
        "popper-options": _ctx.popperOptions,
        pure: _ctx.pure,
        "raw-content": _ctx.rawContent,
        "reference-el": _ctx.referenceEl,
        "show-after": _ctx.compatShowAfter,
        strategy: _ctx.strategy,
        teleported: _ctx.teleported,
        transition: _ctx.transition,
        "z-index": _ctx.zIndex,
        "append-to": _ctx.appendTo
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "content", {}, () => [
            _ctx.rawContent ? (openBlock(), createElementBlock("span", {
              key: 0,
              innerHTML: _ctx.content
            }, null, 8, _hoisted_1)) : (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(_ctx.content), 1))
          ]),
          _ctx.compatShowArrow ? (openBlock(), createBlock(_component_el_popper_arrow, {
            key: 0,
            "arrow-offset": _ctx.arrowOffset
          }, null, 8, ["arrow-offset"])) : createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "show-after", "strategy", "teleported", "transition", "z-index", "append-to"])
    ]),
    _: 3
  }, 512);
}
var Tooltip = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/tooltip/src/tooltip.vue"]]);

export { Tooltip as default };
//# sourceMappingURL=tooltip3.mjs.map
