'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var dayjs = require('dayjs');
require('../../../../constants/index2.js');
require('../../../../hooks/index2.js');
require('../../../../utils/index2.js');
var basicTimeSpinner = require('./basic-time-spinner2.js');
var useTimePicker = require('./useTimePicker2.js');
var pluginVue_exportHelper = require('../../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../../hooks/use-namespace/index2.js');
var index$1 = require('../../../../hooks/use-locale/index2.js');
var types = require('../../../../utils/types2.js');
var aria = require('../../../../constants/aria2.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);

const _sfc_main = vue.defineComponent({
  components: {
    TimeSpinner: basicTimeSpinner["default"]
  },
  props: {
    visible: Boolean,
    actualVisible: {
      type: Boolean,
      default: void 0
    },
    datetimeRole: {
      type: String
    },
    parsedValue: {
      type: [Object, String]
    },
    format: {
      type: String,
      default: ""
    }
  },
  emits: ["pick", "select-range", "set-picker-option"],
  setup(props, ctx) {
    const ns = index.useNamespace("time");
    const { t, lang } = index$1.useLocale();
    const selectionRange = vue.ref([0, 2]);
    const oldValue = useTimePicker.useOldValue(props);
    const transitionName = vue.computed(() => {
      return types.isUndefined(props.actualVisible) ? `${ns.namespace.value}-zoom-in-top` : "";
    });
    const showSeconds = vue.computed(() => {
      return props.format.includes("ss");
    });
    const amPmMode = vue.computed(() => {
      if (props.format.includes("A"))
        return "A";
      if (props.format.includes("a"))
        return "a";
      return "";
    });
    const isValidValue = (_date) => {
      const parsedDate = dayjs__default["default"](_date).locale(lang.value);
      const result = getRangeAvailableTime(parsedDate);
      return parsedDate.isSame(result);
    };
    const handleCancel = () => {
      ctx.emit("pick", oldValue.value, false);
    };
    const handleConfirm = (visible = false, first = false) => {
      if (first)
        return;
      ctx.emit("pick", props.parsedValue, visible);
    };
    const handleChange = (_date) => {
      if (!props.visible) {
        return;
      }
      const result = getRangeAvailableTime(_date).millisecond(0);
      ctx.emit("pick", result, true);
    };
    const setSelectionRange = (start, end) => {
      ctx.emit("select-range", start, end);
      selectionRange.value = [start, end];
    };
    const changeSelectionRange = (step) => {
      const list = [0, 3].concat(showSeconds.value ? [6] : []);
      const mapping = ["hours", "minutes"].concat(showSeconds.value ? ["seconds"] : []);
      const index = list.indexOf(selectionRange.value[0]);
      const next = (index + step + list.length) % list.length;
      timePickerOptions["start_emitSelectRange"](mapping[next]);
    };
    const handleKeydown = (event) => {
      const code = event.code;
      if (code === aria.EVENT_CODE.left || code === aria.EVENT_CODE.right) {
        const step = code === aria.EVENT_CODE.left ? -1 : 1;
        changeSelectionRange(step);
        event.preventDefault();
        return;
      }
      if (code === aria.EVENT_CODE.up || code === aria.EVENT_CODE.down) {
        const step = code === aria.EVENT_CODE.up ? -1 : 1;
        timePickerOptions["start_scrollDown"](step);
        event.preventDefault();
        return;
      }
    };
    const getRangeAvailableTime = (date) => {
      const availableMap = {
        hour: getAvailableHours,
        minute: getAvailableMinutes,
        second: getAvailableSeconds
      };
      let result = date;
      ["hour", "minute", "second"].forEach((_) => {
        if (availableMap[_]) {
          let availableArr;
          const method = availableMap[_];
          if (_ === "minute") {
            availableArr = method(result.hour(), props.datetimeRole);
          } else if (_ === "second") {
            availableArr = method(result.hour(), result.minute(), props.datetimeRole);
          } else {
            availableArr = method(props.datetimeRole);
          }
          if (availableArr && availableArr.length && !availableArr.includes(result[_]())) {
            result = result[_](availableArr[0]);
          }
        }
      });
      return result;
    };
    const parseUserInput = (value) => {
      if (!value)
        return null;
      return dayjs__default["default"](value, props.format).locale(lang.value);
    };
    const formatToString = (value) => {
      if (!value)
        return null;
      return value.format(props.format);
    };
    const getDefaultValue = () => {
      return dayjs__default["default"](defaultValue).locale(lang.value);
    };
    ctx.emit("set-picker-option", ["isValidValue", isValidValue]);
    ctx.emit("set-picker-option", ["formatToString", formatToString]);
    ctx.emit("set-picker-option", ["parseUserInput", parseUserInput]);
    ctx.emit("set-picker-option", ["handleKeydown", handleKeydown]);
    ctx.emit("set-picker-option", [
      "getRangeAvailableTime",
      getRangeAvailableTime
    ]);
    ctx.emit("set-picker-option", ["getDefaultValue", getDefaultValue]);
    const timePickerOptions = {};
    const onSetOption = (e) => {
      timePickerOptions[e[0]] = e[1];
    };
    const pickerBase = vue.inject("EP_PICKER_BASE");
    const {
      arrowControl,
      disabledHours,
      disabledMinutes,
      disabledSeconds,
      defaultValue
    } = pickerBase.props;
    const { getAvailableHours, getAvailableMinutes, getAvailableSeconds } = useTimePicker.getAvailableArrs(disabledHours, disabledMinutes, disabledSeconds);
    return {
      ns,
      transitionName,
      arrowControl,
      onSetOption,
      t,
      handleConfirm,
      handleChange,
      setSelectionRange,
      amPmMode,
      showSeconds,
      handleCancel,
      disabledHours,
      disabledMinutes,
      disabledSeconds
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_time_spinner = vue.resolveComponent("time-spinner");
  return vue.openBlock(), vue.createBlock(vue.Transition, { name: _ctx.transitionName }, {
    default: vue.withCtx(() => [
      _ctx.actualVisible || _ctx.visible ? (vue.openBlock(), vue.createElementBlock("div", {
        key: 0,
        class: vue.normalizeClass(_ctx.ns.b("panel"))
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass([_ctx.ns.be("panel", "content"), { "has-seconds": _ctx.showSeconds }])
        }, [
          vue.createVNode(_component_time_spinner, {
            ref: "spinner",
            role: _ctx.datetimeRole || "start",
            "arrow-control": _ctx.arrowControl,
            "show-seconds": _ctx.showSeconds,
            "am-pm-mode": _ctx.amPmMode,
            "spinner-date": _ctx.parsedValue,
            "disabled-hours": _ctx.disabledHours,
            "disabled-minutes": _ctx.disabledMinutes,
            "disabled-seconds": _ctx.disabledSeconds,
            onChange: _ctx.handleChange,
            onSetOption: _ctx.onSetOption,
            onSelectRange: _ctx.setSelectionRange
          }, null, 8, ["role", "arrow-control", "show-seconds", "am-pm-mode", "spinner-date", "disabled-hours", "disabled-minutes", "disabled-seconds", "onChange", "onSetOption", "onSelectRange"])
        ], 2),
        vue.createElementVNode("div", {
          class: vue.normalizeClass(_ctx.ns.be("panel", "footer"))
        }, [
          vue.createElementVNode("button", {
            type: "button",
            class: vue.normalizeClass([_ctx.ns.be("panel", "btn"), "cancel"]),
            onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleCancel && _ctx.handleCancel(...args))
          }, vue.toDisplayString(_ctx.t("el.datepicker.cancel")), 3),
          vue.createElementVNode("button", {
            type: "button",
            class: vue.normalizeClass([_ctx.ns.be("panel", "btn"), "confirm"]),
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.handleConfirm())
          }, vue.toDisplayString(_ctx.t("el.datepicker.confirm")), 3)
        ], 2)
      ], 2)) : vue.createCommentVNode("v-if", true)
    ]),
    _: 1
  }, 8, ["name"]);
}
var TimePickPanel = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render], ["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/time-picker/src/time-picker-com/panel-time-pick.vue"]]);

exports["default"] = TimePickPanel;
//# sourceMappingURL=panel-time-pick2.js.map
