'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../constants/index2.js');
require('../../../utils/index2.js');
require('../../../tokens/index2.js');
var index$2 = require('../../icon/index2.js');
require('../../../hooks/index2.js');
var rate = require('./rate3.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var shared = require('@vue/shared');
var form = require('../../../tokens/form2.js');
var index = require('../../../hooks/use-common-props/index2.js');
var index$1 = require('../../../hooks/use-namespace/index2.js');
var event = require('../../../constants/event2.js');
var aria = require('../../../constants/aria2.js');
var style = require('../../../utils/dom/style2.js');

const _hoisted_1 = ["aria-valuenow", "aria-valuetext", "aria-valuemax"];
const _hoisted_2 = ["onMousemove", "onClick"];
const __default__ = {
  name: "ElRate"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: rate.rateProps,
  emits: rate.rateEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    function getValueFromMap(value, map) {
      const isExcludedObject = (val) => shared.isObject(val);
      const matchedKeys = Object.keys(map).map((key) => +key).filter((key) => {
        const val = map[key];
        const excluded = isExcludedObject(val) ? val.excluded : false;
        return excluded ? value < key : value <= key;
      }).sort((a, b) => a - b);
      const matchedValue = map[matchedKeys[0]];
      return isExcludedObject(matchedValue) && matchedValue.value || matchedValue;
    }
    const formContext = vue.inject(form.formContextKey, void 0);
    const rateSize = index.useSize();
    const ns = index$1.useNamespace("rate");
    const currentValue = vue.ref(props.modelValue);
    const hoverIndex = vue.ref(-1);
    const pointerAtLeftHalf = vue.ref(true);
    const rateClasses = vue.computed(() => [ns.b(), ns.m(rateSize.value)]);
    const rateDisabled = vue.computed(() => props.disabled || (formContext == null ? void 0 : formContext.disabled));
    const rateStyles = vue.computed(() => {
      return ns.cssVarBlock({
        "void-color": props.voidColor,
        "disabled-void-color": props.disabledVoidColor,
        "fill-color": activeColor.value
      });
    });
    const text = vue.computed(() => {
      let result = "";
      if (props.showScore) {
        result = props.scoreTemplate.replace(/\{\s*value\s*\}/, rateDisabled.value ? `${props.modelValue}` : `${currentValue.value}`);
      } else if (props.showText) {
        result = props.texts[Math.ceil(currentValue.value) - 1];
      }
      return result;
    });
    const valueDecimal = vue.computed(() => props.modelValue * 100 - Math.floor(props.modelValue) * 100);
    const colorMap = vue.computed(() => shared.isArray(props.colors) ? {
      [props.lowThreshold]: props.colors[0],
      [props.highThreshold]: { value: props.colors[1], excluded: true },
      [props.max]: props.colors[2]
    } : props.colors);
    const activeColor = vue.computed(() => {
      const color = getValueFromMap(currentValue.value, colorMap.value);
      return shared.isObject(color) ? "" : color;
    });
    const decimalStyle = vue.computed(() => {
      let width = "";
      if (rateDisabled.value) {
        width = `${valueDecimal.value}%`;
      } else if (props.allowHalf) {
        width = "50%";
      }
      return {
        color: activeColor.value,
        width
      };
    });
    const componentMap = vue.computed(() => shared.isArray(props.icons) ? {
      [props.lowThreshold]: props.icons[0],
      [props.highThreshold]: {
        value: props.icons[1],
        excluded: true
      },
      [props.max]: props.icons[2]
    } : props.icons);
    const decimalIconComponent = vue.computed(() => getValueFromMap(props.modelValue, componentMap.value));
    const voidComponent = vue.computed(() => rateDisabled.value ? props.disabledVoidIcon : props.voidIcon);
    const activeComponent = vue.computed(() => getValueFromMap(currentValue.value, componentMap.value));
    const iconComponents = vue.computed(() => {
      const result = Array.from({ length: props.max });
      const threshold = currentValue.value;
      result.fill(activeComponent.value, 0, threshold);
      result.fill(voidComponent.value, threshold, props.max);
      return result;
    });
    function showDecimalIcon(item) {
      const showWhenDisabled = rateDisabled.value && valueDecimal.value > 0 && item - 1 < props.modelValue && item > props.modelValue;
      const showWhenAllowHalf = props.allowHalf && pointerAtLeftHalf.value && item - 0.5 <= currentValue.value && item > currentValue.value;
      return showWhenDisabled || showWhenAllowHalf;
    }
    function selectValue(value) {
      if (rateDisabled.value) {
        return;
      }
      if (props.allowHalf && pointerAtLeftHalf.value) {
        emit(event.UPDATE_MODEL_EVENT, currentValue.value);
        if (props.modelValue !== currentValue.value) {
          emit("change", currentValue.value);
        }
      } else {
        emit(event.UPDATE_MODEL_EVENT, value);
        if (props.modelValue !== value) {
          emit("change", value);
        }
      }
    }
    function handleKey(e) {
      if (rateDisabled.value) {
        return;
      }
      let _currentValue = currentValue.value;
      const code = e.code;
      if (code === aria.EVENT_CODE.up || code === aria.EVENT_CODE.right) {
        if (props.allowHalf) {
          _currentValue += 0.5;
        } else {
          _currentValue += 1;
        }
        e.stopPropagation();
        e.preventDefault();
      } else if (code === aria.EVENT_CODE.left || code === aria.EVENT_CODE.down) {
        if (props.allowHalf) {
          _currentValue -= 0.5;
        } else {
          _currentValue -= 1;
        }
        e.stopPropagation();
        e.preventDefault();
      }
      _currentValue = _currentValue < 0 ? 0 : _currentValue;
      _currentValue = _currentValue > props.max ? props.max : _currentValue;
      emit(event.UPDATE_MODEL_EVENT, _currentValue);
      emit("change", _currentValue);
      return _currentValue;
    }
    function setCurrentValue(value, event) {
      if (rateDisabled.value) {
        return;
      }
      if (props.allowHalf) {
        let target = event.target;
        if (style.hasClass(target, ns.e("item"))) {
          target = target.querySelector(`.${ns.e("icon")}`);
        }
        if (target.clientWidth === 0 || style.hasClass(target, ns.e("decimal"))) {
          target = target.parentNode;
        }
        pointerAtLeftHalf.value = event.offsetX * 2 <= target.clientWidth;
        currentValue.value = pointerAtLeftHalf.value ? value - 0.5 : value;
      } else {
        currentValue.value = value;
      }
      hoverIndex.value = value;
    }
    function resetCurrentValue() {
      if (rateDisabled.value) {
        return;
      }
      if (props.allowHalf) {
        pointerAtLeftHalf.value = props.modelValue !== Math.floor(props.modelValue);
      }
      currentValue.value = props.modelValue;
      hoverIndex.value = -1;
    }
    vue.watch(() => props.modelValue, (val) => {
      currentValue.value = val;
      pointerAtLeftHalf.value = props.modelValue !== Math.floor(props.modelValue);
    });
    if (!props.modelValue) {
      emit(event.UPDATE_MODEL_EVENT, 0);
    }
    expose({
      setCurrentValue,
      resetCurrentValue
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass([vue.unref(rateClasses), vue.unref(ns).is("disabled", vue.unref(rateDisabled))]),
        role: "slider",
        "aria-valuenow": currentValue.value,
        "aria-valuetext": vue.unref(text),
        "aria-valuemin": "0",
        "aria-valuemax": _ctx.max,
        tabindex: "0",
        style: vue.normalizeStyle(vue.unref(rateStyles)),
        onKeydown: handleKey
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.max, (item, key) => {
          return vue.openBlock(), vue.createElementBlock("span", {
            key,
            class: vue.normalizeClass(vue.unref(ns).e("item")),
            onMousemove: ($event) => setCurrentValue(item, $event),
            onMouseleave: resetCurrentValue,
            onClick: ($event) => selectValue(item)
          }, [
            vue.createVNode(vue.unref(index$2.ElIcon), {
              class: vue.normalizeClass([
                vue.unref(ns).e("icon"),
                { hover: hoverIndex.value === item },
                vue.unref(ns).is("active", item <= currentValue.value)
              ])
            }, {
              default: vue.withCtx(() => [
                !showDecimalIcon(item) ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(vue.unref(iconComponents)[item - 1]), { key: 0 })) : vue.createCommentVNode("v-if", true),
                showDecimalIcon(item) ? (vue.openBlock(), vue.createBlock(vue.unref(index$2.ElIcon), {
                  key: 1,
                  style: vue.normalizeStyle(vue.unref(decimalStyle)),
                  class: vue.normalizeClass([vue.unref(ns).e("icon"), vue.unref(ns).e("decimal")])
                }, {
                  default: vue.withCtx(() => [
                    (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(vue.unref(decimalIconComponent))))
                  ]),
                  _: 1
                }, 8, ["style", "class"])) : vue.createCommentVNode("v-if", true)
              ]),
              _: 2
            }, 1032, ["class"])
          ], 42, _hoisted_2);
        }), 128)),
        _ctx.showText || _ctx.showScore ? (vue.openBlock(), vue.createElementBlock("span", {
          key: 0,
          class: vue.normalizeClass(vue.unref(ns).e("text"))
        }, vue.toDisplayString(vue.unref(text)), 3)) : vue.createCommentVNode("v-if", true)
      ], 46, _hoisted_1);
    };
  }
});
var Rate = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/rate/src/rate.vue"]]);

exports["default"] = Rate;
//# sourceMappingURL=rate4.js.map
