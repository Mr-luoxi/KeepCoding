import { defineComponent, inject, ref, computed, nextTick, watch, onMounted, onBeforeUnmount, resolveComponent, resolveDirective, openBlock, createBlock, withCtx, withDirectives, createElementBlock, normalizeClass, normalizeStyle, createVNode, withModifiers, Fragment, renderList, toDisplayString, createElementVNode, withKeys, vModelText, createCommentVNode, vShow, renderSlot } from 'vue';
import { isPromise } from '@vue/shared';
import { debounce } from 'lodash-unified';
import { isClient } from '@vueuse/core';
import _CascaderPanel from '../../cascader-panel/index2.mjs';
import { ElInput } from '../../input/index2.mjs';
import { ElTooltip } from '../../tooltip/index2.mjs';
import '../../popper/index2.mjs';
import { ElScrollbar } from '../../scrollbar/index2.mjs';
import { ElTag } from '../../tag/index2.mjs';
import { ElIcon } from '../../icon/index2.mjs';
import '../../../tokens/index2.mjs';
import '../../../directives/index2.mjs';
import '../../../hooks/index2.mjs';
import '../../../utils/index2.mjs';
import '../../../constants/index2.mjs';
import { CircleClose, Check, ArrowDown } from '@element-plus/icons-vue';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import ClickOutside from '../../../directives/click-outside/index2.mjs';
import { CommonProps } from '../../cascader-panel/src/config2.mjs';
import { isValidComponentSize } from '../../../utils/vue/validator2.mjs';
import { useTooltipContentProps } from '../../tooltip/src/tooltip4.mjs';
import { tagProps } from '../../tag/src/tag4.mjs';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '../../../constants/event2.mjs';
import { useDeprecateAppendToBody } from '../../popper/src/deprecation2.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index2.mjs';
import { useLocale } from '../../../hooks/use-locale/index2.mjs';
import { formContextKey, formItemContextKey } from '../../../tokens/form2.mjs';
import { useSize } from '../../../hooks/use-common-props/index2.mjs';
import { debugWarn } from '../../../utils/error2.mjs';
import { isKorean } from '../../../utils/i18n2.mjs';
import { EVENT_CODE } from '../../../constants/aria2.mjs';
import { focusNode, getSibling } from '../../../utils/dom/aria2.mjs';
import { addResizeListener, removeResizeListener } from '../../../utils/dom/resize-event2.mjs';

const DEFAULT_INPUT_HEIGHT = 40;
const INPUT_HEIGHT_MAP = {
  large: 36,
  default: 32,
  small: 28
};
const popperOptions = {
  modifiers: [
    {
      name: "arrowPosition",
      enabled: true,
      phase: "main",
      fn: ({ state }) => {
        const { modifiersData, placement } = state;
        if (["right", "left", "bottom", "top"].includes(placement))
          return;
        modifiersData.arrow.x = 35;
      },
      requires: ["arrow"]
    }
  ]
};
const COMPONENT_NAME = "ElCascader";
const _sfc_main = defineComponent({
  name: COMPONENT_NAME,
  components: {
    ElCascaderPanel: _CascaderPanel,
    ElInput,
    ElTooltip,
    ElScrollbar,
    ElTag,
    ElIcon,
    CircleClose,
    Check,
    ArrowDown
  },
  directives: {
    Clickoutside: ClickOutside
  },
  props: {
    ...CommonProps,
    size: {
      type: String,
      validator: isValidComponentSize
    },
    placeholder: {
      type: String
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    filterMethod: {
      type: Function,
      default: (node, keyword) => node.text.includes(keyword)
    },
    separator: {
      type: String,
      default: " / "
    },
    showAllLevels: {
      type: Boolean,
      default: true
    },
    collapseTags: Boolean,
    collapseTagsTooltip: {
      type: Boolean,
      default: false
    },
    debounce: {
      type: Number,
      default: 300
    },
    beforeFilter: {
      type: Function,
      default: () => true
    },
    popperClass: {
      type: String,
      default: ""
    },
    popperAppendToBody: {
      type: Boolean,
      default: void 0
    },
    teleported: useTooltipContentProps.teleported,
    tagType: { ...tagProps.type, default: "info" }
  },
  emits: [
    UPDATE_MODEL_EVENT,
    CHANGE_EVENT,
    "focus",
    "blur",
    "visible-change",
    "expand-change",
    "remove-tag"
  ],
  setup(props, { emit }) {
    let inputInitialHeight = 0;
    let pressDeleteCount = 0;
    const { compatTeleported } = useDeprecateAppendToBody(COMPONENT_NAME, "popperAppendToBody");
    const nsCascader = useNamespace("cascader");
    const nsInput = useNamespace("input");
    const { t } = useLocale();
    const elForm = inject(formContextKey, {});
    const elFormItem = inject(formItemContextKey, {});
    const tooltipRef = ref(null);
    const input = ref(null);
    const tagWrapper = ref(null);
    const panel = ref(null);
    const suggestionPanel = ref(null);
    const popperVisible = ref(false);
    const inputHover = ref(false);
    const filtering = ref(false);
    const inputValue = ref("");
    const searchInputValue = ref("");
    const presentTags = ref([]);
    const allPresentTags = ref([]);
    const suggestions = ref([]);
    const isOnComposition = ref(false);
    const isDisabled = computed(() => props.disabled || elForm.disabled);
    const inputPlaceholder = computed(() => props.placeholder || t("el.cascader.placeholder"));
    const realSize = useSize();
    const tagSize = computed(() => ["small"].includes(realSize.value) ? "small" : "default");
    const multiple = computed(() => !!props.props.multiple);
    const readonly = computed(() => !props.filterable || multiple.value);
    const searchKeyword = computed(() => multiple.value ? searchInputValue.value : inputValue.value);
    const checkedNodes = computed(() => {
      var _a;
      return ((_a = panel.value) == null ? void 0 : _a.checkedNodes) || [];
    });
    const clearBtnVisible = computed(() => {
      if (!props.clearable || isDisabled.value || filtering.value || !inputHover.value)
        return false;
      return !!checkedNodes.value.length;
    });
    const presentText = computed(() => {
      const { showAllLevels, separator } = props;
      const nodes = checkedNodes.value;
      return nodes.length ? multiple.value ? " " : nodes[0].calcText(showAllLevels, separator) : "";
    });
    const checkedValue = computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        var _a;
        emit(UPDATE_MODEL_EVENT, val);
        emit(CHANGE_EVENT, val);
        (_a = elFormItem.validate) == null ? void 0 : _a.call(elFormItem, "change").catch((err) => debugWarn(err));
      }
    });
    const popperPaneRef = computed(() => {
      var _a, _b;
      return (_b = (_a = tooltipRef.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.contentRef;
    });
    const togglePopperVisible = (visible) => {
      var _a, _b, _c;
      if (isDisabled.value)
        return;
      visible = visible != null ? visible : !popperVisible.value;
      if (visible !== popperVisible.value) {
        popperVisible.value = visible;
        (_b = (_a = input.value) == null ? void 0 : _a.input) == null ? void 0 : _b.setAttribute("aria-expanded", `${visible}`);
        if (visible) {
          updatePopperPosition();
          nextTick((_c = panel.value) == null ? void 0 : _c.scrollToExpandingNode);
        } else if (props.filterable) {
          const { value } = presentText;
          inputValue.value = value;
          searchInputValue.value = value;
        }
        emit("visible-change", visible);
      }
    };
    const updatePopperPosition = () => {
      nextTick(() => {
        var _a;
        (_a = tooltipRef.value) == null ? void 0 : _a.updatePopper();
      });
    };
    const hideSuggestionPanel = () => {
      filtering.value = false;
    };
    const genTag = (node) => {
      const { showAllLevels, separator } = props;
      return {
        node,
        key: node.uid,
        text: node.calcText(showAllLevels, separator),
        hitState: false,
        closable: !isDisabled.value && !node.isDisabled,
        isCollapseTag: false
      };
    };
    const deleteTag = (tag) => {
      var _a;
      const node = tag.node;
      node.doCheck(false);
      (_a = panel.value) == null ? void 0 : _a.calculateCheckedValue();
      emit("remove-tag", node.valueByOption);
    };
    const calculatePresentTags = () => {
      if (!multiple.value)
        return;
      const nodes = checkedNodes.value;
      const tags = [];
      const allTags = [];
      nodes.forEach((node) => allTags.push(genTag(node)));
      allPresentTags.value = allTags;
      if (nodes.length) {
        const [first, ...rest] = nodes;
        const restCount = rest.length;
        tags.push(genTag(first));
        if (restCount) {
          if (props.collapseTags) {
            tags.push({
              key: -1,
              text: `+ ${restCount}`,
              closable: false,
              isCollapseTag: true
            });
          } else {
            rest.forEach((node) => tags.push(genTag(node)));
          }
        }
      }
      presentTags.value = tags;
    };
    const calculateSuggestions = () => {
      var _a, _b;
      const { filterMethod, showAllLevels, separator } = props;
      const res = (_b = (_a = panel.value) == null ? void 0 : _a.getFlattedNodes(!props.props.checkStrictly)) == null ? void 0 : _b.filter((node) => {
        if (node.isDisabled)
          return false;
        node.calcText(showAllLevels, separator);
        return filterMethod(node, searchKeyword.value);
      });
      if (multiple.value) {
        presentTags.value.forEach((tag) => {
          tag.hitState = false;
        });
        allPresentTags.value.forEach((tag) => {
          tag.hitState = false;
        });
      }
      filtering.value = true;
      suggestions.value = res;
      updatePopperPosition();
    };
    const focusFirstNode = () => {
      var _a;
      let firstNode;
      if (filtering.value && suggestionPanel.value) {
        firstNode = suggestionPanel.value.$el.querySelector(`.${nsCascader.e("suggestion-item")}`);
      } else {
        firstNode = (_a = panel.value) == null ? void 0 : _a.$el.querySelector(`.${nsCascader.b("node")}[tabindex="-1"]`);
      }
      if (firstNode) {
        firstNode.focus();
        !filtering.value && firstNode.click();
      }
    };
    const updateStyle = () => {
      var _a, _b;
      const inputInner = (_a = input.value) == null ? void 0 : _a.input;
      const tagWrapperEl = tagWrapper.value;
      const suggestionPanelEl = (_b = suggestionPanel.value) == null ? void 0 : _b.$el;
      if (!isClient || !inputInner)
        return;
      if (suggestionPanelEl) {
        const suggestionList = suggestionPanelEl.querySelector(`.${nsCascader.e("suggestion-list")}`);
        suggestionList.style.minWidth = `${inputInner.offsetWidth}px`;
      }
      if (tagWrapperEl) {
        const { offsetHeight } = tagWrapperEl;
        const height = presentTags.value.length > 0 ? `${Math.max(offsetHeight + 6, inputInitialHeight)}px` : `${inputInitialHeight}px`;
        inputInner.style.height = height;
        updatePopperPosition();
      }
    };
    const getCheckedNodes = (leafOnly) => {
      var _a;
      return (_a = panel.value) == null ? void 0 : _a.getCheckedNodes(leafOnly);
    };
    const handleExpandChange = (value) => {
      updatePopperPosition();
      emit("expand-change", value);
    };
    const handleComposition = (event) => {
      var _a;
      const text = (_a = event.target) == null ? void 0 : _a.value;
      if (event.type === "compositionend") {
        isOnComposition.value = false;
        nextTick(() => handleInput(text));
      } else {
        const lastCharacter = text[text.length - 1] || "";
        isOnComposition.value = !isKorean(lastCharacter);
      }
    };
    const handleKeyDown = (e) => {
      if (isOnComposition.value)
        return;
      switch (e.code) {
        case EVENT_CODE.enter:
          togglePopperVisible();
          break;
        case EVENT_CODE.down:
          togglePopperVisible(true);
          nextTick(focusFirstNode);
          e.preventDefault();
          break;
        case EVENT_CODE.esc:
        case EVENT_CODE.tab:
          togglePopperVisible(false);
          break;
      }
    };
    const handleClear = () => {
      var _a;
      (_a = panel.value) == null ? void 0 : _a.clearCheckedNodes();
      togglePopperVisible(false);
    };
    const handleSuggestionClick = (node) => {
      var _a, _b;
      const { checked } = node;
      if (multiple.value) {
        (_a = panel.value) == null ? void 0 : _a.handleCheckChange(node, !checked, false);
      } else {
        !checked && ((_b = panel.value) == null ? void 0 : _b.handleCheckChange(node, true, false));
        togglePopperVisible(false);
      }
    };
    const handleSuggestionKeyDown = (e) => {
      const target = e.target;
      const { code } = e;
      switch (code) {
        case EVENT_CODE.up:
        case EVENT_CODE.down: {
          const distance = code === EVENT_CODE.up ? -1 : 1;
          focusNode(getSibling(target, distance, `.${nsCascader.e("suggestion-item")}[tabindex="-1"]`));
          break;
        }
        case EVENT_CODE.enter:
          target.click();
          break;
        case EVENT_CODE.esc:
        case EVENT_CODE.tab:
          togglePopperVisible(false);
          break;
      }
    };
    const handleDelete = () => {
      const tags = presentTags.value;
      const lastTag = tags[tags.length - 1];
      pressDeleteCount = searchInputValue.value ? 0 : pressDeleteCount + 1;
      if (!lastTag || !pressDeleteCount)
        return;
      if (lastTag.hitState) {
        deleteTag(lastTag);
      } else {
        lastTag.hitState = true;
      }
    };
    const handleFilter = debounce(() => {
      const { value } = searchKeyword;
      if (!value)
        return;
      const passed = props.beforeFilter(value);
      if (isPromise(passed)) {
        passed.then(calculateSuggestions).catch(() => {
        });
      } else if (passed !== false) {
        calculateSuggestions();
      } else {
        hideSuggestionPanel();
      }
    }, props.debounce);
    const handleInput = (val, e) => {
      !popperVisible.value && togglePopperVisible(true);
      if (e == null ? void 0 : e.isComposing)
        return;
      val ? handleFilter() : hideSuggestionPanel();
    };
    watch(filtering, updatePopperPosition);
    watch([checkedNodes, isDisabled], calculatePresentTags);
    watch(presentTags, () => {
      nextTick(() => updateStyle());
    });
    watch(presentText, (val) => inputValue.value = val, { immediate: true });
    onMounted(() => {
      var _a;
      const inputEl = (_a = input.value) == null ? void 0 : _a.$el;
      inputInitialHeight = (inputEl == null ? void 0 : inputEl.offsetHeight) || INPUT_HEIGHT_MAP[realSize.value] || DEFAULT_INPUT_HEIGHT;
      addResizeListener(inputEl, updateStyle);
    });
    onBeforeUnmount(() => {
      var _a;
      removeResizeListener((_a = input.value) == null ? void 0 : _a.$el, updateStyle);
    });
    return {
      popperOptions,
      tooltipRef,
      popperPaneRef,
      input,
      tagWrapper,
      panel,
      suggestionPanel,
      popperVisible,
      inputHover,
      inputPlaceholder,
      filtering,
      presentText,
      checkedValue,
      inputValue,
      searchInputValue,
      presentTags,
      allPresentTags,
      suggestions,
      isDisabled,
      isOnComposition,
      realSize,
      tagSize,
      multiple,
      readonly,
      clearBtnVisible,
      compatTeleported,
      nsCascader,
      nsInput,
      t,
      togglePopperVisible,
      hideSuggestionPanel,
      deleteTag,
      focusFirstNode,
      getCheckedNodes,
      handleExpandChange,
      handleKeyDown,
      handleComposition,
      handleClear,
      handleSuggestionClick,
      handleSuggestionKeyDown,
      handleDelete,
      handleInput
    };
  }
});
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "el-cascader__collapse-tags" };
const _hoisted_3 = ["placeholder"];
const _hoisted_4 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_circle_close = resolveComponent("circle-close");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_arrow_down = resolveComponent("arrow-down");
  const _component_el_input = resolveComponent("el-input");
  const _component_el_tag = resolveComponent("el-tag");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  const _component_el_cascader_panel = resolveComponent("el-cascader-panel");
  const _component_check = resolveComponent("check");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _directive_clickoutside = resolveDirective("clickoutside");
  return openBlock(), createBlock(_component_el_tooltip, {
    ref: "tooltipRef",
    visible: _ctx.popperVisible,
    "onUpdate:visible": _cache[17] || (_cache[17] = ($event) => _ctx.popperVisible = $event),
    teleported: _ctx.compatTeleported,
    "popper-class": [_ctx.nsCascader.e("dropdown"), _ctx.popperClass],
    "popper-options": _ctx.popperOptions,
    "fallback-placements": [
      "bottom-start",
      "bottom",
      "top-start",
      "top",
      "right",
      "left"
    ],
    "stop-popper-mouse-event": false,
    "gpu-acceleration": false,
    placement: "bottom-start",
    transition: `${_ctx.nsCascader.namespace.value}-zoom-in-top`,
    effect: "light",
    pure: "",
    persistent: "",
    onHide: _ctx.hideSuggestionPanel
  }, {
    default: withCtx(() => [
      withDirectives((openBlock(), createElementBlock("div", {
        class: normalizeClass([
          _ctx.nsCascader.b(),
          _ctx.nsCascader.m(_ctx.realSize),
          _ctx.nsCascader.is("disabled", _ctx.isDisabled),
          _ctx.$attrs.class
        ]),
        style: normalizeStyle(_ctx.$attrs.style),
        onClick: _cache[11] || (_cache[11] = () => _ctx.togglePopperVisible(_ctx.readonly ? void 0 : true)),
        onKeydown: _cache[12] || (_cache[12] = (...args) => _ctx.handleKeyDown && _ctx.handleKeyDown(...args)),
        onMouseenter: _cache[13] || (_cache[13] = ($event) => _ctx.inputHover = true),
        onMouseleave: _cache[14] || (_cache[14] = ($event) => _ctx.inputHover = false)
      }, [
        createVNode(_component_el_input, {
          ref: "input",
          modelValue: _ctx.inputValue,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.inputValue = $event),
          placeholder: _ctx.inputPlaceholder,
          readonly: _ctx.readonly,
          disabled: _ctx.isDisabled,
          "validate-event": false,
          size: _ctx.realSize,
          class: normalizeClass(_ctx.nsCascader.is("focus", _ctx.popperVisible)),
          onCompositionstart: _ctx.handleComposition,
          onCompositionupdate: _ctx.handleComposition,
          onCompositionend: _ctx.handleComposition,
          onFocus: _cache[2] || (_cache[2] = (e) => _ctx.$emit("focus", e)),
          onBlur: _cache[3] || (_cache[3] = (e) => _ctx.$emit("blur", e)),
          onInput: _ctx.handleInput
        }, {
          suffix: withCtx(() => [
            _ctx.clearBtnVisible ? (openBlock(), createBlock(_component_el_icon, {
              key: "clear",
              class: normalizeClass([_ctx.nsInput.e("icon"), "icon-circle-close"]),
              onClick: withModifiers(_ctx.handleClear, ["stop"])
            }, {
              default: withCtx(() => [
                createVNode(_component_circle_close)
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : (openBlock(), createBlock(_component_el_icon, {
              key: "arrow-down",
              class: normalizeClass([
                _ctx.nsInput.e("icon"),
                "icon-arrow-down",
                _ctx.nsCascader.is("reverse", _ctx.popperVisible)
              ]),
              onClick: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.togglePopperVisible(), ["stop"]))
            }, {
              default: withCtx(() => [
                createVNode(_component_arrow_down)
              ]),
              _: 1
            }, 8, ["class"]))
          ]),
          _: 1
        }, 8, ["modelValue", "placeholder", "readonly", "disabled", "size", "class", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput"]),
        _ctx.multiple ? (openBlock(), createElementBlock("div", {
          key: 0,
          ref: "tagWrapper",
          class: normalizeClass(_ctx.nsCascader.e("tags"))
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.presentTags, (tag) => {
            return openBlock(), createBlock(_component_el_tag, {
              key: tag.key,
              type: _ctx.tagType,
              size: _ctx.tagSize,
              hit: tag.hitState,
              closable: tag.closable,
              "disable-transitions": "",
              onClose: ($event) => _ctx.deleteTag(tag)
            }, {
              default: withCtx(() => [
                tag.isCollapseTag === false ? (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString(tag.text), 1)) : (openBlock(), createBlock(_component_el_tooltip, {
                  key: 1,
                  teleported: false,
                  disabled: _ctx.popperVisible || !_ctx.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  placement: "bottom",
                  effect: "light"
                }, {
                  default: withCtx(() => [
                    createElementVNode("span", null, toDisplayString(tag.text), 1)
                  ]),
                  content: withCtx(() => [
                    createElementVNode("div", _hoisted_2, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.allPresentTags, (tag2, idx) => {
                        return openBlock(), createElementBlock("div", {
                          key: idx,
                          class: "el-cascader__collapse-tag"
                        }, [
                          (openBlock(), createBlock(_component_el_tag, {
                            key: tag2.key,
                            class: "in-tooltip",
                            type: _ctx.tagType,
                            size: _ctx.tagSize,
                            hit: tag2.hitState,
                            closable: tag2.closable,
                            "disable-transitions": "",
                            onClose: ($event) => _ctx.deleteTag(tag2)
                          }, {
                            default: withCtx(() => [
                              createElementVNode("span", null, toDisplayString(tag2.text), 1)
                            ]),
                            _: 2
                          }, 1032, ["type", "size", "hit", "closable", "onClose"]))
                        ]);
                      }), 128))
                    ])
                  ]),
                  _: 2
                }, 1032, ["disabled"]))
              ]),
              _: 2
            }, 1032, ["type", "size", "hit", "closable", "onClose"]);
          }), 128)),
          _ctx.filterable && !_ctx.isDisabled ? withDirectives((openBlock(), createElementBlock("input", {
            key: 0,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.searchInputValue = $event),
            type: "text",
            class: normalizeClass(_ctx.nsCascader.e("search-input")),
            placeholder: _ctx.presentText ? "" : _ctx.inputPlaceholder,
            onInput: _cache[5] || (_cache[5] = (e) => _ctx.handleInput(_ctx.searchInputValue, e)),
            onClick: _cache[6] || (_cache[6] = withModifiers(($event) => _ctx.togglePopperVisible(true), ["stop"])),
            onKeydown: _cache[7] || (_cache[7] = withKeys((...args) => _ctx.handleDelete && _ctx.handleDelete(...args), ["delete"])),
            onCompositionstart: _cache[8] || (_cache[8] = (...args) => _ctx.handleComposition && _ctx.handleComposition(...args)),
            onCompositionupdate: _cache[9] || (_cache[9] = (...args) => _ctx.handleComposition && _ctx.handleComposition(...args)),
            onCompositionend: _cache[10] || (_cache[10] = (...args) => _ctx.handleComposition && _ctx.handleComposition(...args))
          }, null, 42, _hoisted_3)), [
            [vModelText, _ctx.searchInputValue]
          ]) : createCommentVNode("v-if", true)
        ], 2)) : createCommentVNode("v-if", true)
      ], 38)), [
        [_directive_clickoutside, () => _ctx.togglePopperVisible(false), _ctx.popperPaneRef]
      ])
    ]),
    content: withCtx(() => [
      withDirectives(createVNode(_component_el_cascader_panel, {
        ref: "panel",
        modelValue: _ctx.checkedValue,
        "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => _ctx.checkedValue = $event),
        options: _ctx.options,
        props: _ctx.props,
        border: false,
        "render-label": _ctx.$slots.default,
        onExpandChange: _ctx.handleExpandChange,
        onClose: _cache[16] || (_cache[16] = ($event) => _ctx.$nextTick(() => _ctx.togglePopperVisible(false)))
      }, null, 8, ["modelValue", "options", "props", "render-label", "onExpandChange"]), [
        [vShow, !_ctx.filtering]
      ]),
      _ctx.filterable ? withDirectives((openBlock(), createBlock(_component_el_scrollbar, {
        key: 0,
        ref: "suggestionPanel",
        tag: "ul",
        class: normalizeClass(_ctx.nsCascader.e("suggestion-panel")),
        "view-class": _ctx.nsCascader.e("suggestion-list"),
        onKeydown: _ctx.handleSuggestionKeyDown
      }, {
        default: withCtx(() => [
          _ctx.suggestions.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.suggestions, (item) => {
            return openBlock(), createElementBlock("li", {
              key: item.uid,
              class: normalizeClass([
                _ctx.nsCascader.e("suggestion-item"),
                _ctx.nsCascader.is("checked", item.checked)
              ]),
              tabindex: -1,
              onClick: ($event) => _ctx.handleSuggestionClick(item)
            }, [
              createElementVNode("span", null, toDisplayString(item.text), 1),
              item.checked ? (openBlock(), createBlock(_component_el_icon, { key: 0 }, {
                default: withCtx(() => [
                  createVNode(_component_check)
                ]),
                _: 1
              })) : createCommentVNode("v-if", true)
            ], 10, _hoisted_4);
          }), 128)) : renderSlot(_ctx.$slots, "empty", { key: 1 }, () => [
            createElementVNode("li", {
              class: normalizeClass(_ctx.nsCascader.e("empty-text"))
            }, toDisplayString(_ctx.t("el.cascader.noMatch")), 3)
          ])
        ]),
        _: 3
      }, 8, ["class", "view-class", "onKeydown"])), [
        [vShow, _ctx.filtering]
      ]) : createCommentVNode("v-if", true)
    ]),
    _: 3
  }, 8, ["visible", "teleported", "popper-class", "popper-options", "transition", "onHide"]);
}
var Cascader = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/cascader/src/index.vue"]]);

export { Cascader as default };
//# sourceMappingURL=index2.mjs.map
