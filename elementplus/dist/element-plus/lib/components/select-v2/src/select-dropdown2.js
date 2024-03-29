'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var lodashUnified = require('lodash-unified');
require('../../../utils/index2.js');
require('../../virtual-list/index2.js');
require('../../../hooks/index2.js');
var groupItem = require('./group-item2.js');
var optionItem = require('./option-item2.js');
var token = require('./token2.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../hooks/use-namespace/index2.js');
var types = require('../../../utils/types2.js');
var shared = require('@vue/shared');
var fixedSizeList = require('../../virtual-list/src/components/fixed-size-list2.js');
var dynamicSizeList = require('../../virtual-list/src/components/dynamic-size-list2.js');

const _sfc_main = vue.defineComponent({
  name: "ElSelectDropdown",
  props: {
    data: Array,
    hoveringIndex: Number,
    width: Number
  },
  setup(props) {
    const select = vue.inject(token.selectV2InjectionKey);
    const ns = index.useNamespace("select");
    const cachedHeights = vue.ref([]);
    const listRef = vue.ref(null);
    const isSized = vue.computed(() => types.isUndefined(select.props.estimatedOptionHeight));
    const listProps = vue.computed(() => {
      if (isSized.value) {
        return {
          itemSize: select.props.itemHeight
        };
      }
      return {
        estimatedSize: select.props.estimatedOptionHeight,
        itemSize: (idx) => cachedHeights.value[idx]
      };
    });
    const contains = (arr = [], target) => {
      const {
        props: { valueKey }
      } = select;
      if (!shared.isObject(target)) {
        return arr.includes(target);
      }
      return arr && arr.some((item) => {
        return lodashUnified.get(item, valueKey) === lodashUnified.get(target, valueKey);
      });
    };
    const isEqual = (selected, target) => {
      if (!shared.isObject(target)) {
        return selected === target;
      } else {
        const { valueKey } = select.props;
        return lodashUnified.get(selected, valueKey) === lodashUnified.get(target, valueKey);
      }
    };
    const isItemSelected = (modelValue, target) => {
      const { valueKey } = select.props;
      if (select.props.multiple) {
        return contains(modelValue, lodashUnified.get(target, valueKey));
      }
      return isEqual(modelValue, lodashUnified.get(target, valueKey));
    };
    const isItemDisabled = (modelValue, selected) => {
      const { disabled, multiple, multipleLimit } = select.props;
      return disabled || !selected && (multiple ? multipleLimit > 0 && modelValue.length >= multipleLimit : false);
    };
    const isItemHovering = (target) => props.hoveringIndex === target;
    const scrollToItem = (index) => {
      const list = listRef.value;
      if (list) {
        list.scrollToItem(index);
      }
    };
    const resetScrollTop = () => {
      const list = listRef.value;
      if (list) {
        list.resetScrollTop();
      }
    };
    return {
      ns,
      select,
      listProps,
      listRef,
      isSized,
      isItemDisabled,
      isItemHovering,
      isItemSelected,
      scrollToItem,
      resetScrollTop
    };
  },
  render(_ctx, _cache) {
    var _a;
    const {
      $slots,
      data,
      listProps,
      select,
      isSized,
      width,
      ns,
      isItemDisabled,
      isItemHovering,
      isItemSelected
    } = _ctx;
    const Comp = isSized ? fixedSizeList["default"] : dynamicSizeList["default"];
    const {
      props: selectProps,
      onSelect,
      onHover,
      onKeyboardNavigate,
      onKeyboardSelect
    } = select;
    const { height, modelValue, multiple } = selectProps;
    if (data.length === 0) {
      return vue.h("div", {
        class: ns.b("dropdown"),
        style: {
          width: `${width}px`
        }
      }, (_a = $slots.empty) == null ? void 0 : _a.call($slots));
    }
    const ListItem = vue.withCtx((scoped) => {
      const { index, data: data2 } = scoped;
      const item = data2[index];
      if (data2[index].type === "Group") {
        return vue.h(groupItem["default"], {
          item,
          style: scoped.style,
          height: isSized ? listProps.itemSize : listProps.estimatedSize
        });
      }
      const selected = isItemSelected(modelValue, item);
      const itemDisabled = isItemDisabled(modelValue, selected);
      return vue.h(optionItem["default"], {
        ...scoped,
        selected,
        disabled: item.disabled || itemDisabled,
        created: !!item.created,
        hovering: isItemHovering(index),
        item,
        onSelect,
        onHover
      }, {
        default: vue.withCtx((props) => {
          return vue.renderSlot($slots, "default", props, () => [
            vue.h("span", item.label)
          ]);
        })
      });
    });
    const List = vue.h(Comp, {
      ref: "listRef",
      className: ns.be("dropdown", "list"),
      data,
      height,
      width,
      total: data.length,
      scrollbarAlwaysOn: selectProps.scrollbarAlwaysOn,
      onKeydown: [
        _cache[1] || (_cache[1] = vue.withKeys(vue.withModifiers(() => onKeyboardNavigate("forward"), ["stop", "prevent"]), ["down"])),
        _cache[2] || (_cache[2] = vue.withKeys(vue.withModifiers(() => onKeyboardNavigate("backward"), ["stop", "prevent"]), ["up"])),
        _cache[3] || (_cache[3] = vue.withKeys(vue.withModifiers(onKeyboardSelect, ["stop", "prevent"]), ["enter"])),
        _cache[4] || (_cache[4] = vue.withKeys(vue.withModifiers(() => select.expanded = false, ["stop", "prevent"]), ["esc"])),
        _cache[5] || (_cache[5] = vue.withKeys(() => select.expanded = false, ["tab"]))
      ],
      ...listProps
    }, {
      default: ListItem
    });
    return vue.h("div", {
      class: [ns.b("dropdown"), ns.is("multiple", multiple)]
    }, [List]);
  }
});
var ElSelectMenu = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/select-v2/src/select-dropdown.vue"]]);

exports["default"] = ElSelectMenu;
//# sourceMappingURL=select-dropdown2.js.map
