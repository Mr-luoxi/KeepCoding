'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var lodashUnified = require('lodash-unified');
var core = require('@vueuse/core');
require('../../../hooks/index2.js');
require('../../../utils/index2.js');
require('../../../constants/index2.js');
var index$5 = require('../../input/index2.js');
var index$3 = require('../../scrollbar/index2.js');
var index$2 = require('../../tooltip/index2.js');
require('../../popper/index2.js');
var index$4 = require('../../icon/index2.js');
var iconsVue = require('@element-plus/icons-vue');
var autocomplete = require('./autocomplete3.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../hooks/use-namespace/index2.js');
var deprecation = require('../../popper/src/deprecation2.js');
var index$1 = require('../../../hooks/use-attrs/index2.js');
var rand = require('../../../utils/rand2.js');
var shared = require('@vue/shared');
var error = require('../../../utils/error2.js');
var event = require('../../../constants/event2.js');

const _hoisted_1 = ["aria-expanded", "aria-owns"];
const _hoisted_2 = { key: 0 };
const _hoisted_3 = ["id", "aria-selected", "onClick"];
const __default__ = {
  name: "ElAutocomplete",
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: autocomplete.autocompleteProps,
  emits: autocomplete.autocompleteEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const COMPONENT_NAME = "ElAutocomplete";
    const ns = index.useNamespace("autocomplete");
    const { compatTeleported } = deprecation.useDeprecateAppendToBody(COMPONENT_NAME, "popperAppendToBody");
    let isClear = false;
    const attrs = index$1.useAttrs();
    const compAttrs = vue.useAttrs();
    const suggestions = vue.ref([]);
    const highlightedIndex = vue.ref(-1);
    const dropdownWidth = vue.ref("");
    const activated = vue.ref(false);
    const suggestionDisabled = vue.ref(false);
    const loading = vue.ref(false);
    const inputRef = vue.ref();
    const regionRef = vue.ref();
    const popperRef = vue.ref();
    const listboxRef = vue.ref();
    const id = vue.computed(() => {
      return ns.b(String(rand.generateId()));
    });
    const styles = vue.computed(() => compAttrs.style);
    const suggestionVisible = vue.computed(() => {
      const isValidData = shared.isArray(suggestions.value) && suggestions.value.length > 0;
      return (isValidData || loading.value) && activated.value;
    });
    const suggestionLoading = vue.computed(() => {
      return !props.hideLoading && loading.value;
    });
    const onSuggestionShow = () => {
      vue.nextTick(() => {
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
        if (shared.isArray(suggestionsArg)) {
          suggestions.value = suggestionsArg;
          highlightedIndex.value = props.highlightFirstItem ? 0 : -1;
        } else {
          error.throwError(COMPONENT_NAME, "autocomplete suggestions must be an array");
        }
      };
      if (shared.isArray(props.fetchSuggestions)) {
        cb(props.fetchSuggestions);
      } else {
        const result = await props.fetchSuggestions(queryString, cb);
        if (shared.isArray(result)) {
          cb(result);
        }
      }
    };
    const debouncedGetData = lodashUnified.debounce(getData, props.debounce);
    const handleInput = (value) => {
      const valuePresented = Boolean(value);
      emit("input", value);
      emit(event.UPDATE_MODEL_EVENT, value);
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
      emit(event.UPDATE_MODEL_EVENT, "");
      emit("clear");
    };
    const handleKeyEnter = () => {
      if (suggestionVisible.value && highlightedIndex.value >= 0 && highlightedIndex.value < suggestions.value.length) {
        handleSelect(suggestions.value[highlightedIndex.value]);
      } else if (props.selectWhenUnmatched) {
        emit("select", { value: props.modelValue });
        vue.nextTick(() => {
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
      emit(event.UPDATE_MODEL_EVENT, item[props.valueKey]);
      emit("select", item);
      vue.nextTick(() => {
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
    core.onClickOutside(listboxRef, close);
    vue.onMounted(() => {
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
      return vue.openBlock(), vue.createBlock(vue.unref(index$2.ElTooltip), {
        ref_key: "popperRef",
        ref: popperRef,
        visible: vue.unref(suggestionVisible),
        "onUpdate:visible": _cache[2] || (_cache[2] = ($event) => vue.isRef(suggestionVisible) ? suggestionVisible.value = $event : null),
        placement: _ctx.placement,
        "fallback-placements": ["bottom-start", "top-start"],
        "popper-class": [vue.unref(ns).e("popper"), _ctx.popperClass],
        teleported: vue.unref(compatTeleported),
        "gpu-acceleration": false,
        pure: "",
        "manual-mode": "",
        effect: "light",
        trigger: "click",
        transition: `${vue.unref(ns).namespace.value}-zoom-in-top`,
        persistent: "",
        onBeforeShow: onSuggestionShow
      }, {
        content: vue.withCtx(() => [
          vue.createElementVNode("div", {
            ref_key: "regionRef",
            ref: regionRef,
            class: vue.normalizeClass([vue.unref(ns).b("suggestion"), vue.unref(ns).is("loading", vue.unref(suggestionLoading))]),
            style: vue.normalizeStyle({ minWidth: dropdownWidth.value, outline: "none" }),
            role: "region"
          }, [
            vue.createVNode(vue.unref(index$3.ElScrollbar), {
              id: vue.unref(id),
              tag: "ul",
              "wrap-class": vue.unref(ns).be("suggestion", "wrap"),
              "view-class": vue.unref(ns).be("suggestion", "list"),
              role: "listbox"
            }, {
              default: vue.withCtx(() => [
                vue.unref(suggestionLoading) ? (vue.openBlock(), vue.createElementBlock("li", _hoisted_2, [
                  vue.createVNode(vue.unref(index$4.ElIcon), {
                    class: vue.normalizeClass(vue.unref(ns).is("loading"))
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(vue.unref(iconsVue.Loading))
                    ]),
                    _: 1
                  }, 8, ["class"])
                ])) : (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 1 }, vue.renderList(suggestions.value, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("li", {
                    id: `${vue.unref(id)}-item-${index}`,
                    key: index,
                    class: vue.normalizeClass({ highlighted: highlightedIndex.value === index }),
                    role: "option",
                    "aria-selected": highlightedIndex.value === index,
                    onClick: ($event) => handleSelect(item)
                  }, [
                    vue.renderSlot(_ctx.$slots, "default", { item }, () => [
                      vue.createTextVNode(vue.toDisplayString(item[_ctx.valueKey]), 1)
                    ])
                  ], 10, _hoisted_3);
                }), 128))
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class"])
          ], 6)
        ]),
        default: vue.withCtx(() => [
          vue.createElementVNode("div", {
            ref_key: "listboxRef",
            ref: listboxRef,
            class: vue.normalizeClass([vue.unref(ns).b(), _ctx.$attrs.class]),
            style: vue.normalizeStyle(vue.unref(styles)),
            role: "combobox",
            "aria-haspopup": "listbox",
            "aria-expanded": vue.unref(suggestionVisible),
            "aria-owns": vue.unref(id)
          }, [
            vue.createVNode(vue.unref(index$5.ElInput), vue.mergeProps({
              ref_key: "inputRef",
              ref: inputRef
            }, vue.unref(attrs), {
              "model-value": _ctx.modelValue,
              onInput: handleInput,
              onChange: handleChange,
              onFocus: handleFocus,
              onBlur: handleBlur,
              onClear: handleClear,
              onKeydown: [
                _cache[0] || (_cache[0] = vue.withKeys(vue.withModifiers(($event) => highlight(highlightedIndex.value - 1), ["prevent"]), ["up"])),
                _cache[1] || (_cache[1] = vue.withKeys(vue.withModifiers(($event) => highlight(highlightedIndex.value + 1), ["prevent"]), ["down"])),
                vue.withKeys(handleKeyEnter, ["enter"]),
                vue.withKeys(close, ["tab"])
              ]
            }), vue.createSlots({ _: 2 }, [
              _ctx.$slots.prepend ? {
                name: "prepend",
                fn: vue.withCtx(() => [
                  vue.renderSlot(_ctx.$slots, "prepend")
                ])
              } : void 0,
              _ctx.$slots.append ? {
                name: "append",
                fn: vue.withCtx(() => [
                  vue.renderSlot(_ctx.$slots, "append")
                ])
              } : void 0,
              _ctx.$slots.prefix ? {
                name: "prefix",
                fn: vue.withCtx(() => [
                  vue.renderSlot(_ctx.$slots, "prefix")
                ])
              } : void 0,
              _ctx.$slots.suffix ? {
                name: "suffix",
                fn: vue.withCtx(() => [
                  vue.renderSlot(_ctx.$slots, "suffix")
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
var Autocomplete = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/autocomplete/src/autocomplete.vue"]]);

exports["default"] = Autocomplete;
//# sourceMappingURL=autocomplete4.js.map
