import { defineComponent, ref, inject, computed, onBeforeUnmount, unref, watch, resolveComponent, openBlock, createBlock, Teleport, createVNode, Transition, withCtx, withDirectives, mergeProps, createCommentVNode, createElementBlock, Fragment, renderSlot, createTextVNode, toDisplayString, vShow } from 'vue';
import { onClickOutside } from '@vueuse/core';
import '../../popper/index2.mjs';
import '../../visual-hidden/index2.mjs';
import '../../../utils/index2.mjs';
import '../../../hooks/index2.mjs';
import { useTooltipContentProps } from './tooltip4.mjs';
import { TOOLTIP_INJECTION_KEY } from './tokens2.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import ElPopperContent from '../../popper/src/content4.mjs';
import ElVisuallyHidden from '../../visual-hidden/src/visual-hidden2.mjs';
import { useEscapeKeydown } from '../../../hooks/use-escape-keydown/index2.mjs';
import { composeEventHandlers } from '../../../utils/dom/event2.mjs';

const _sfc_main = defineComponent({
  name: "ElTooltipContent",
  components: {
    ElPopperContent,
    ElVisuallyHidden
  },
  inheritAttrs: false,
  props: useTooltipContentProps,
  setup(props) {
    const contentRef = ref(null);
    const intermediateOpen = ref(false);
    const entering = ref(false);
    const leaving = ref(false);
    const destroyed = ref(false);
    const {
      controlled,
      id,
      open,
      trigger,
      onClose,
      onOpen,
      onShow,
      onHide,
      onBeforeShow,
      onBeforeHide
    } = inject(TOOLTIP_INJECTION_KEY, void 0);
    const persistentRef = computed(() => {
      if (process.env.NODE_ENV === "test") {
        return true;
      }
      return props.persistent;
    });
    onBeforeUnmount(() => {
      destroyed.value = true;
    });
    const shouldRender = computed(() => {
      return unref(persistentRef) ? true : unref(open);
    });
    const shouldShow = computed(() => {
      return props.disabled ? false : unref(open);
    });
    const contentStyle = computed(() => {
      var _a;
      return (_a = props.style) != null ? _a : {};
    });
    const ariaHidden = computed(() => !unref(open));
    useEscapeKeydown(onClose);
    const onTransitionLeave = () => {
      onHide();
    };
    const stopWhenControlled = () => {
      if (unref(controlled))
        return true;
    };
    const onContentEnter = composeEventHandlers(stopWhenControlled, () => {
      if (props.enterable && unref(trigger) === "hover") {
        onOpen();
      }
    });
    const onContentLeave = composeEventHandlers(stopWhenControlled, () => {
      if (unref(trigger) === "hover") {
        onClose();
      }
    });
    const onBeforeEnter = () => {
      var _a, _b;
      (_b = (_a = contentRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
      onBeforeShow == null ? void 0 : onBeforeShow();
    };
    const onBeforeLeave = () => {
      onBeforeHide == null ? void 0 : onBeforeHide();
    };
    const onAfterShow = () => {
      onShow();
    };
    let stopHandle;
    watch(() => unref(open), (val) => {
      if (val) {
        stopHandle = onClickOutside(computed(() => {
          var _a;
          return (_a = contentRef.value) == null ? void 0 : _a.popperContentRef;
        }), () => {
          if (unref(controlled))
            return;
          const $trigger = unref(trigger);
          if ($trigger !== "hover") {
            onClose();
          }
        });
      } else {
        stopHandle == null ? void 0 : stopHandle();
      }
    }, {
      flush: "post"
    });
    return {
      ariaHidden,
      entering,
      leaving,
      id,
      intermediateOpen,
      contentStyle,
      contentRef,
      destroyed,
      shouldRender,
      shouldShow,
      open,
      onAfterShow,
      onBeforeEnter,
      onBeforeLeave,
      onContentEnter,
      onContentLeave,
      onTransitionLeave
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_visually_hidden = resolveComponent("el-visually-hidden");
  const _component_el_popper_content = resolveComponent("el-popper-content");
  return openBlock(), createBlock(Teleport, {
    disabled: !_ctx.teleported,
    to: _ctx.appendTo
  }, [
    createVNode(Transition, {
      name: _ctx.transition,
      onAfterLeave: _ctx.onTransitionLeave,
      onBeforeEnter: _ctx.onBeforeEnter,
      onAfterEnter: _ctx.onAfterShow,
      onBeforeLeave: _ctx.onBeforeLeave
    }, {
      default: withCtx(() => [
        _ctx.shouldRender ? withDirectives((openBlock(), createBlock(_component_el_popper_content, mergeProps({
          key: 0,
          ref: "contentRef"
        }, _ctx.$attrs, {
          "aria-hidden": _ctx.ariaHidden,
          "boundaries-padding": _ctx.boundariesPadding,
          "fallback-placements": _ctx.fallbackPlacements,
          "gpu-acceleration": _ctx.gpuAcceleration,
          offset: _ctx.offset,
          placement: _ctx.placement,
          "popper-options": _ctx.popperOptions,
          strategy: _ctx.strategy,
          effect: _ctx.effect,
          enterable: _ctx.enterable,
          pure: _ctx.pure,
          "popper-class": _ctx.popperClass,
          "popper-style": [_ctx.popperStyle, _ctx.contentStyle],
          "reference-el": _ctx.referenceEl,
          visible: _ctx.shouldShow,
          "z-index": _ctx.zIndex,
          onMouseenter: _ctx.onContentEnter,
          onMouseleave: _ctx.onContentLeave
        }), {
          default: withCtx(() => [
            createCommentVNode(" Workaround bug #6378 "),
            !_ctx.destroyed ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              renderSlot(_ctx.$slots, "default"),
              createVNode(_component_el_visually_hidden, {
                id: _ctx.id,
                role: "tooltip"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.ariaLabel), 1)
                ]),
                _: 1
              }, 8, ["id"])
            ], 64)) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 16, ["aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "visible", "z-index", "onMouseenter", "onMouseleave"])), [
          [vShow, _ctx.shouldShow]
        ]) : createCommentVNode("v-if", true)
      ]),
      _: 3
    }, 8, ["name", "onAfterLeave", "onBeforeEnter", "onAfterEnter", "onBeforeLeave"])
  ], 8, ["disabled", "to"]);
}
var ElTooltipContent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/tooltip/src/content.vue"]]);

export { ElTooltipContent as default };
//# sourceMappingURL=content2.mjs.map
