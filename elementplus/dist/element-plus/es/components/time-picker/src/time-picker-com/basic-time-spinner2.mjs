import { defineComponent, ref, computed, nextTick, onMounted, watch, resolveComponent, resolveDirective, openBlock, createElementBlock, normalizeClass, Fragment, renderList, createBlock, withCtx, createTextVNode, toDisplayString, createCommentVNode, withDirectives, createVNode, createElementVNode } from 'vue';
import { debounce } from 'lodash-unified';
import '../../../../directives/index2.mjs';
import { ElScrollbar } from '../../../scrollbar/index2.mjs';
import { ElIcon } from '../../../icon/index2.mjs';
import { ArrowUp, ArrowDown } from '@element-plus/icons-vue';
import '../../../../hooks/index2.mjs';
import { getTimeLists } from './useTimePicker2.mjs';
import _export_sfc from '../../../../_virtual/plugin-vue_export-helper.mjs';
import RepeatClick from '../../../../directives/repeat-click/index2.mjs';
import { useNamespace } from '../../../../hooks/use-namespace/index2.mjs';

const _sfc_main = defineComponent({
  directives: {
    repeatClick: RepeatClick
  },
  components: {
    ElScrollbar,
    ElIcon,
    ArrowUp,
    ArrowDown
  },
  props: {
    role: {
      type: String,
      required: true
    },
    spinnerDate: {
      type: Object,
      required: true
    },
    showSeconds: {
      type: Boolean,
      default: true
    },
    arrowControl: Boolean,
    amPmMode: {
      type: String,
      default: ""
    },
    disabledHours: {
      type: Function
    },
    disabledMinutes: {
      type: Function
    },
    disabledSeconds: {
      type: Function
    }
  },
  emits: ["change", "select-range", "set-option"],
  setup(props, ctx) {
    const ns = useNamespace("time");
    let isScrolling = false;
    const debouncedResetScroll = debounce((type) => {
      isScrolling = false;
      adjustCurrentSpinner(type);
    }, 200);
    const currentScrollbar = ref(null);
    const listHoursRef = ref(null);
    const listMinutesRef = ref(null);
    const listSecondsRef = ref(null);
    const listRefsMap = {
      hours: listHoursRef,
      minutes: listMinutesRef,
      seconds: listSecondsRef
    };
    const spinnerItems = computed(() => {
      const arr = ["hours", "minutes", "seconds"];
      return props.showSeconds ? arr : arr.slice(0, 2);
    });
    const hours = computed(() => {
      return props.spinnerDate.hour();
    });
    const minutes = computed(() => {
      return props.spinnerDate.minute();
    });
    const seconds = computed(() => {
      return props.spinnerDate.second();
    });
    const timePartsMap = computed(() => ({
      hours,
      minutes,
      seconds
    }));
    const hoursList = computed(() => {
      return getHoursList(props.role);
    });
    const minutesList = computed(() => {
      return getMinutesList(hours.value, props.role);
    });
    const secondsList = computed(() => {
      return getSecondsList(hours.value, minutes.value, props.role);
    });
    const listMap = computed(() => ({
      hours: hoursList,
      minutes: minutesList,
      seconds: secondsList
    }));
    const arrowHourList = computed(() => {
      const hour = hours.value;
      return [
        hour > 0 ? hour - 1 : void 0,
        hour,
        hour < 23 ? hour + 1 : void 0
      ];
    });
    const arrowMinuteList = computed(() => {
      const minute = minutes.value;
      return [
        minute > 0 ? minute - 1 : void 0,
        minute,
        minute < 59 ? minute + 1 : void 0
      ];
    });
    const arrowSecondList = computed(() => {
      const second = seconds.value;
      return [
        second > 0 ? second - 1 : void 0,
        second,
        second < 59 ? second + 1 : void 0
      ];
    });
    const arrowListMap = computed(() => ({
      hours: arrowHourList,
      minutes: arrowMinuteList,
      seconds: arrowSecondList
    }));
    const getAmPmFlag = (hour) => {
      const shouldShowAmPm = !!props.amPmMode;
      if (!shouldShowAmPm)
        return "";
      const isCapital = props.amPmMode === "A";
      let content = hour < 12 ? " am" : " pm";
      if (isCapital)
        content = content.toUpperCase();
      return content;
    };
    const emitSelectRange = (type) => {
      if (type === "hours") {
        ctx.emit("select-range", 0, 2);
      } else if (type === "minutes") {
        ctx.emit("select-range", 3, 5);
      } else if (type === "seconds") {
        ctx.emit("select-range", 6, 8);
      }
      currentScrollbar.value = type;
    };
    const adjustCurrentSpinner = (type) => {
      adjustSpinner(type, timePartsMap.value[type].value);
    };
    const adjustSpinners = () => {
      adjustCurrentSpinner("hours");
      adjustCurrentSpinner("minutes");
      adjustCurrentSpinner("seconds");
    };
    const getScrollbarElement = (el) => el.querySelector(`.${ns.namespace.value}-scrollbar__wrap`);
    const adjustSpinner = (type, value) => {
      if (props.arrowControl)
        return;
      const el = listRefsMap[type];
      if (el && el.$el) {
        getScrollbarElement(el.$el).scrollTop = Math.max(0, value * typeItemHeight(type));
      }
    };
    const typeItemHeight = (type) => {
      const el = listRefsMap[type];
      return el.$el.querySelector("li").offsetHeight;
    };
    const onIncreaseClick = () => {
      scrollDown(1);
    };
    const onDecreaseClick = () => {
      scrollDown(-1);
    };
    const scrollDown = (step) => {
      if (!currentScrollbar.value) {
        emitSelectRange("hours");
      }
      const label = currentScrollbar.value;
      let now = timePartsMap.value[label].value;
      const total = currentScrollbar.value === "hours" ? 24 : 60;
      now = (now + step + total) % total;
      modifyDateField(label, now);
      adjustSpinner(label, now);
      nextTick(() => emitSelectRange(currentScrollbar.value));
    };
    const modifyDateField = (type, value) => {
      const list = listMap.value[type].value;
      const isDisabled = list[value];
      if (isDisabled)
        return;
      switch (type) {
        case "hours":
          ctx.emit("change", props.spinnerDate.hour(value).minute(minutes.value).second(seconds.value));
          break;
        case "minutes":
          ctx.emit("change", props.spinnerDate.hour(hours.value).minute(value).second(seconds.value));
          break;
        case "seconds":
          ctx.emit("change", props.spinnerDate.hour(hours.value).minute(minutes.value).second(value));
          break;
      }
    };
    const handleClick = (type, { value, disabled }) => {
      if (!disabled) {
        modifyDateField(type, value);
        emitSelectRange(type);
        adjustSpinner(type, value);
      }
    };
    const handleScroll = (type) => {
      isScrolling = true;
      debouncedResetScroll(type);
      const value = Math.min(Math.round((getScrollbarElement(listRefsMap[type].$el).scrollTop - (scrollBarHeight(type) * 0.5 - 10) / typeItemHeight(type) + 3) / typeItemHeight(type)), type === "hours" ? 23 : 59);
      modifyDateField(type, value);
    };
    const scrollBarHeight = (type) => {
      return listRefsMap[type].$el.offsetHeight;
    };
    const bindScrollEvent = () => {
      const bindFunction = (type) => {
        if (listRefsMap[type] && listRefsMap[type].$el) {
          getScrollbarElement(listRefsMap[type].$el).onscroll = () => {
            handleScroll(type);
          };
        }
      };
      bindFunction("hours");
      bindFunction("minutes");
      bindFunction("seconds");
    };
    onMounted(() => {
      nextTick(() => {
        !props.arrowControl && bindScrollEvent();
        adjustSpinners();
        if (props.role === "start")
          emitSelectRange("hours");
      });
    });
    const setRef = (scrollbar, type) => {
      listRefsMap[type] = scrollbar;
    };
    ctx.emit("set-option", [`${props.role}_scrollDown`, scrollDown]);
    ctx.emit("set-option", [`${props.role}_emitSelectRange`, emitSelectRange]);
    const { getHoursList, getMinutesList, getSecondsList } = getTimeLists(props.disabledHours, props.disabledMinutes, props.disabledSeconds);
    watch(() => props.spinnerDate, () => {
      if (isScrolling)
        return;
      adjustSpinners();
    });
    return {
      ns,
      setRef,
      spinnerItems,
      currentScrollbar,
      hours,
      minutes,
      seconds,
      hoursList,
      minutesList,
      arrowHourList,
      arrowMinuteList,
      arrowSecondList,
      getAmPmFlag,
      emitSelectRange,
      adjustCurrentSpinner,
      typeItemHeight,
      listHoursRef,
      listMinutesRef,
      listSecondsRef,
      onIncreaseClick,
      onDecreaseClick,
      handleClick,
      secondsList,
      timePartsMap,
      arrowListMap,
      listMap
    };
  }
});
const _hoisted_1 = ["onClick"];
const _hoisted_2 = ["onMouseenter"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_arrow_up = resolveComponent("arrow-up");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_arrow_down = resolveComponent("arrow-down");
  const _directive_repeat_click = resolveDirective("repeat-click");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.ns.b("spinner"), { "has-seconds": _ctx.showSeconds }])
  }, [
    !_ctx.arrowControl ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.spinnerItems, (item) => {
      return openBlock(), createBlock(_component_el_scrollbar, {
        key: item,
        ref_for: true,
        ref: (scollbar) => _ctx.setRef(scollbar, item),
        class: normalizeClass(_ctx.ns.be("spinner", "wrapper")),
        "wrap-style": "max-height: inherit;",
        "view-class": _ctx.ns.be("spinner", "list"),
        noresize: "",
        tag: "ul",
        onMouseenter: ($event) => _ctx.emitSelectRange(item),
        onMousemove: ($event) => _ctx.adjustCurrentSpinner(item)
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.listMap[item].value, (disabled, key) => {
            return openBlock(), createElementBlock("li", {
              key,
              class: normalizeClass([
                _ctx.ns.be("spinner", "item"),
                _ctx.ns.is("active", key === _ctx.timePartsMap[item].value),
                _ctx.ns.is("disabled", disabled)
              ]),
              onClick: ($event) => _ctx.handleClick(item, { value: key, disabled })
            }, [
              item === "hours" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createTextVNode(toDisplayString(("0" + (_ctx.amPmMode ? key % 12 || 12 : key)).slice(-2)) + toDisplayString(_ctx.getAmPmFlag(key)), 1)
              ], 2112)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createTextVNode(toDisplayString(("0" + key).slice(-2)), 1)
              ], 2112))
            ], 10, _hoisted_1);
          }), 128))
        ]),
        _: 2
      }, 1032, ["class", "view-class", "onMouseenter", "onMousemove"]);
    }), 128)) : createCommentVNode("v-if", true),
    _ctx.arrowControl ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(_ctx.spinnerItems, (item) => {
      return openBlock(), createElementBlock("div", {
        key: item,
        class: normalizeClass([_ctx.ns.be("spinner", "wrapper"), _ctx.ns.is("arrow")]),
        onMouseenter: ($event) => _ctx.emitSelectRange(item)
      }, [
        withDirectives((openBlock(), createBlock(_component_el_icon, {
          class: normalizeClass(["arrow-up", _ctx.ns.be("spinner", "arrow")])
        }, {
          default: withCtx(() => [
            createVNode(_component_arrow_up)
          ]),
          _: 1
        }, 8, ["class"])), [
          [_directive_repeat_click, _ctx.onDecreaseClick]
        ]),
        withDirectives((openBlock(), createBlock(_component_el_icon, {
          class: normalizeClass(["arrow-down", _ctx.ns.be("spinner", "arrow")])
        }, {
          default: withCtx(() => [
            createVNode(_component_arrow_down)
          ]),
          _: 1
        }, 8, ["class"])), [
          [_directive_repeat_click, _ctx.onIncreaseClick]
        ]),
        createElementVNode("ul", {
          class: normalizeClass(_ctx.ns.be("spinner", "list"))
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.arrowListMap[item].value, (time, key) => {
            return openBlock(), createElementBlock("li", {
              key,
              class: normalizeClass([
                _ctx.ns.be("spinner", "item"),
                _ctx.ns.is("active", time === _ctx.timePartsMap[item].value),
                _ctx.ns.is("disabled", _ctx.listMap[item].value[time])
              ])
            }, [
              typeof time === "number" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                item === "hours" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createTextVNode(toDisplayString(("0" + (_ctx.amPmMode ? time % 12 || 12 : time)).slice(-2)) + toDisplayString(_ctx.getAmPmFlag(time)), 1)
                ], 2112)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(("0" + time).slice(-2)), 1)
                ], 2112))
              ], 2112)) : createCommentVNode("v-if", true)
            ], 2);
          }), 128))
        ], 2)
      ], 42, _hoisted_2);
    }), 128)) : createCommentVNode("v-if", true)
  ], 2);
}
var TimeSpinner = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/time-picker/src/time-picker-com/basic-time-spinner.vue"]]);

export { TimeSpinner as default };
//# sourceMappingURL=basic-time-spinner2.mjs.map
