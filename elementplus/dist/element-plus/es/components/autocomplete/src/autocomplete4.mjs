import { defineComponent, useAttrs as useAttrs$1, ref, computed, nextTick, onMounted, openBlock, createBlock, unref, isRef, withCtx, createElementVNode, normalizeClass, normalizeStyle, createVNode, createElementBlock, Fragment, renderList, renderSlot, createTextVNode, toDisplayString, mergeProps, withKeys, withModifiers, createSlots } from 'vue';
import { debounce } from 'lodash-unified';
import { onClickOutside } from '@vueuse/core';
import '../../../hooks/index2.mjs';
import '../../../utils/index2.mjs';
import '../../../constants/index2.mjs';
import { ElInput } from '../../input/index2.mjs';
import { ElScrollbar } from '../../scrollbar/index2.mjs';
import { ElTooltip } from '../../tooltip/index2.mjs';
import '../../popper/index2.mjs';
import { ElIcon } from '../../icon/index2.mjs';
import { Loading } from '@element-plus/icons-vue';
import { autocompleteProps, autocompleteEmits } from './autocomplete3.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index2.mjs';
import { useDeprecateAppendToBody } from '../../popper/src/deprecation2.mjs';
import { useAttrs } from '../../../hooks/use-attrs/index2.mjs';
import { generateId } from '../../../utils/rand2.mjs';
import { isArray } from '@vue/shared';
import { throwError } from '../../../utils/error2.mjs';
import { UPDATE_MODEL_EVENT } from '../../../constants/event2.mjs';

const _hoisted_1 = ["aria-expanded", "aria-owns"];
const _hoisted_2 = { key: 0 };
const _hoisted_3 = ["id", "aria-selected", "onClick"];
const __default__ = {
  name: "ElAutocomplete",
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: autocompleteProps,
  emits: autocompleteEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const COMPONENT_NAME = "ElAutocomplete";
    const ns = useNamespace("autocomplete");
    const { compatTeleported } = useDeprecateAppendToBody(COMPONENT_NAME, "popperAppendToBody");
    let isClear = false;
    const attrs = useAttrs();
    const compAttrs = useAttrs$1();
    const suggestions = ref([]);
    const highlightedIndex = ref(-1);
    const dropdownWidth = ref("");
    const activated = ref(false);
    const suggestionDisabled = ref(false);
    const loading = ref(false);
    const inputRef = ref();
    const regionRef = ref();
    const popperRef = ref();
    const listboxRef = ref();
    const id = computed(() => {
      return ns.b(String(generateId()));
    });
    const styles = computed(() => compAttrs.style);
    const suggestionVisible = computed(() => {
      const isValidData = isArray(suggestions.value) && suggestions.value.length > 0;
      return (isValidData || loading.value) && activated.value;
    });
    const suggestionLoading = computed(() => {
      return !props.hideLoading && loading.value;
    });
    const onSuggestionShow = () => {
      nextTick(() => {
        if (suggestionVisible.value) {
          dropdownWidth.value = `${inputRef.value.$el.offsetWidth}px`;
        }
      });
    };
    const getData = async (queryString) => {
      if (suggestionDisabled.value) {
        return;
      }
      loading.value = true;
      const cb = (suggestionsArg) => {
        loading.value = false;
        if (suggestionDisabled.value) {
          return;
        }
        if (isArray(suggestionsArg)) {
          suggestions.value = suggestionsArg;
          highlightedIndex.value = props.highlightFirstItem ? 0 : -1;
        } else {
          throwError(COMPONENT_NAME, "autocomplete suggestions must be an array");
        }
      };
      if (isArray(props.fetchSuggestions)) {
        cb(props.fetchSuggestions);
      } else {
        const result = await props.fetchSuggestions(queryString, cb);
        if (isArray(result)) {
          cb(result);
        }
      }
    };
    const debouncedGetData = debounce(getData, props.debounce);
    const handleInput = (value) => {
      const valuePresented = Boolean(value);
      emit("input", value);
      emit(UPDATE_MODEL_EVENT, value);
      suggestionDisabled.value = false;
      activated.value || (activated.value = isClear && valuePresented);
      if (!props.triggerOnFocus && !value) {
        suggestionDisabled.value = true;
        suggestions.value = [];
        return;
      }
      if (isClear && valuePresented) {
        isClear = false;
      }
      debouncedGetData(value);
    };
    const handleChange = (value) => {
      emit("change", value);
    };
    const handleFocus = (evt) => {
      activated.value = true;
      emit("focus", evt);
      if (props.triggerOnFocus) {
        debouncedGetData(String(props.modelValue));
      }
    };
    const handleBlur = (evt) => {
      emit("blur", evt);
    };
    const handleClear = () => {
      activated.value = false;
      isClear = true;
      emit(UPDATE_MODEL_EVENT, "");
      emit("clear");
    };
    const handleKeyEnter = () => {
      if (suggestionVisible.value && highlightedIndex.value >= 0 && highlightedIndex.value < suggestions.value.length) {
        handleSelect(suggestions.value[highlightedIndex.value]);
      } else if (props.selectWhenUnmatched) {
        emit("select", { value: props.modelValue });
        nextTick(() => {
          suggestions.value = [];
          highlightedIndex.value = -1;
        });
      }
    };
    const close = () => {
      activated.value = false;
    };
    const focus = () => {
      var _a;
      (_a = inputRef.value) == null ? void 0 : _a.focus();
    };
    const handleSelect = (item) => {
      emit("input", item[props.valueKey]);
      emit(UPDATE_MODEL_EVENT, item[props.valueKey]);
      emit("select", item);
      nextTick(() => {
        suggestions.value = [];
        highlightedIndex.value = -1;
      });
    };
    const highlight = (index) => {
      if (!suggestionVisible.value || loading.value) {
        return;
      }
      if (index < 0) {
        highlightedIndex.value = -1;
        return;
      }
      if (index >= suggestions.value.length) {
        index = suggestions.value.length - 1;
      }
      const suggestion = regionRef.value.querySelector(`.${ns.be("suggestion", "wrap")}`);
      const suggestionList = suggestion.querySelectorAll(`.${ns.be("suggestion", "list")} li`);
      const highlightItem = suggestionList[index];
      const scrollTop = suggestion.scrollTop;
      const { offsetTop, scrollHeight } = highlightItem;
      if (offsetTop + scrollHeight > scrollTop + suggestion.clientHeight) {
        suggestion.scrollTop += scrollHeight;
      }
      if (offsetTop < scrollTop) {
        suggestion.scrollTop -= scrollHeight;
      }
      highlightedIndex.value = index;
      inputRef.value.ref.setAttribute("aria-activedescendant", `${id.value}-item-${highlightedIndex.value}`);
    };
    onClickOutside(listboxRef, close);
    onMounted(() => {
      ;
      inputRef.value.ref.setAttribute("role", "textbox");
      inputRef.value.ref.setAttribute("aria-autocomplete", "list");
      inputRef.value.ref.setAttribute("aria-controls", "id");
      inputRef.value.ref.setAttribute("aria-activedescendant", `${id.value}-item-${highlightedIndex.value}`);
    });
    expose({
      highlightedIndex,
      activated,
      loading,
      inputRef,
      popperRef,
      suggestions,
      handleSelect,
      handleKeyEnter,
      focus,
      close,
      highlight
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElTooltip), {
        ref_key: "popperRef",
        ref: popperRef,
        visible: unref(suggestionVisible),
        "onUpdate:visible": _cache[2] || (_cache[2] = ($event) => isRef(suggestionVisible) ? suggestionVisible.value = $event : null),
        placement: _ctx.placement,
        "fallback-placements": ["bottom-start", "top-start"],
        "popper-class": [unref(ns).e("popper"), _ctx.popperClass],
        teleported: unref(compatTeleported),
        "gpu-acceleration": false,
        pure: "",
        "manual-mode": "",
        effect: "light",
        trigger: "click",
        transition: `${unref(ns).namespace.value}-zoom-in-top`,
        persistent: "",
        onBeforeShow: onSuggestionShow
      }, {
        content: withCtx(() => [
          createElementVNode("div", {
            ref_key: "regionRef",
            ref: regionRef,
            class: normalizeClass([unref(ns).b("suggestion"), unref(ns).is("loading", unref(suggestionLoading))]),
            style: normalizeStyle({ minWidth: dropdownWidth.value, outline: "none" }),
            role: "region"
          }, [
            createVNode(unref(ElScrollbar), {
              id: unref(id),
              tag: "ul",
              "wrap-class": unref(ns).be("suggestion", "wrap"),
              "view-class": unref(ns).be("suggestion", "list"),
              role: "listbox"
            }, {
              default: withCtx(() => [
                unref(suggestionLoading) ? (openBlock(), createElementBlock("li", _hoisted_2, [
                  createVNode(unref(ElIcon), {
                    class: normalizeClass(unref(ns).is("loading"))
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Loading))
                    ]),
                    _: 1
                  }, 8, ["class"])
                ])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(suggestions.value, (item, index) => {
                  return openBlock(), createElementBlock("li", {
                    id: `${unref(id)}-item-${index}`,
                    key: index,
                    class: normalizeClass({ highlighted: highlightedIndex.value === index }),
                    role: "option",
                    "aria-selected": highlightedIndex.value === index,
                    onClick: ($event) => handleSelect(item)
                  }, [
                    renderSlot(_ctx.$slots, "default", { item }, () => [
                      createTextVNode(toDisplayString(item[_ctx.valueKey]), 1)
                    ])
                  ], 10, _hoisted_3);
                }), 128))
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class"])
          ], 6)
        ]),
        default: withCtx(() => [
          createElementVNode("div", {
            ref_key: "listboxRef",
            ref: listboxRef,
            class: normalizeClass([unref(ns).b(), _ctx.$attrs.class]),
            style: normalizeStyle(unref(styles)),
            role: "combobox",
            "aria-haspopup": "listbox",
            "aria-expanded": unref(suggestionVisible),
            "aria-owns": unref(id)
          }, [
            createVNode(unref(ElInput), mergeProps({
              ref_key: "inputRef",
              ref: inputRef
            }, unref(attrs), {
              "model-value": _ctx.modelValue,
              onInput: handleInput,
              onChange: handleChange,
              onFocus: handleFocus,
              onBlur: handleBlur,
              onClear: handleClear,
              onKeydown: [
                _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => highlight(highlightedIndex.value - 1), ["prevent"]), ["up"])),
                _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => highlight(highlightedIndex.value + 1), ["prevent"]), ["down"])),
                withKeys(handleKeyEnter, ["enter"]),
                withKeys(close, ["tab"])
              ]
            }), createSlots({ _: 2 }, [
              _ctx.$slots.prepend ? {
                name: "prepend",
                fn: withCtx(() => [
                  renderSlot(_ctx.$slots, "prepend")
                ])
              } : void 0,
              _ctx.$slots.append ? {
                name: "append",
                fn: withCtx(() => [
                  renderSlot(_ctx.$slots, "append")
                ])
              } : void 0,
              _ctx.$slots.prefix ? {
                name: "prefix",
                fn: withCtx(() => [
                  renderSlot(_ctx.$slots, "prefix")
                ])
              } : void 0,
              _ctx.$slots.suffix ? {
                name: "suffix",
                fn: withCtx(() => [
                  renderSlot(_ctx.$slots, "suffix")
                ])
              } : void 0
            ]), 1040, ["model-value", "onKeydown"])
          ], 14, _hoisted_1)
        ]),
        _: 3
      }, 8, ["visible", "placement", "popper-class", "teleported", "transition"]);
    };
  }
});
var Autocomplete = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/autocomplete/src/autocomplete.vue"]]);

export { Autocomplete as default };
//# sourceMappingURL=autocomplete4.mjs.map
