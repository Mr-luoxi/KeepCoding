'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../utils/index2.js');
require('../../../constants/index2.js');
var index$2 = require('../../icon/index2.js');
var iconsVue = require('@element-plus/icons-vue');
require('../../../tokens/index2.js');
require('../../../hooks/index2.js');
var tabNav = require('./tab-nav.js');
var props = require('../../../utils/vue/props2.js');
var shared = require('@vue/shared');
var core = require('@vueuse/core');
var event = require('../../../constants/event2.js');
var index = require('../../../hooks/use-namespace/index2.js');
var index$1 = require('../../../hooks/use-deprecated/index2.js');
var tabs = require('../../../tokens/tabs2.js');
var aria = require('../../../constants/aria2.js');

const tabsProps = props.buildProps({
  type: {
    type: String,
    values: ["card", "border-card", ""],
    default: ""
  },
  activeName: {
    type: [String, Number],
    default: ""
  },
  closable: Boolean,
  addable: Boolean,
  modelValue: {
    type: [String, Number],
    default: ""
  },
  editable: Boolean,
  tabPosition: {
    type: String,
    values: ["top", "right", "bottom", "left"],
    default: "top"
  },
  beforeLeave: {
    type: props.definePropType(Function),
    default: () => true
  },
  stretch: Boolean
});
const isPanelName = (value) => shared.isString(value) || core.isNumber(value);
const tabsEmits = {
  [event.UPDATE_MODEL_EVENT]: (name) => isPanelName(name),
  [event.INPUT_EVENT]: (name) => isPanelName(name),
  "tab-click": (pane, ev) => ev instanceof Event,
  "tab-change": (name) => isPanelName(name),
  edit: (paneName, action) => ["remove", "add"].includes(action),
  "tab-remove": (name) => isPanelName(name),
  "tab-add": () => true
};
var Tabs = vue.defineComponent({
  name: "ElTabs",
  props: tabsProps,
  emits: tabsEmits,
  setup(props, {
    emit,
    slots,
    expose
  }) {
    const instance = vue.getCurrentInstance();
    const ns = index.useNamespace("tabs");
    const nav$ = vue.ref();
    const panes = vue.reactive({});
    const currentName = vue.ref(props.modelValue || props.activeName || "0");
    index$1.useDeprecated({
      scope: "el-tabs",
      type: "Event",
      from: "input",
      replacement: "tab-change",
      version: "2.5.0",
      ref: "https://element-plus.org/en-US/component/tabs.html#tabs-events"
    }, vue.computed(() => {
      var _a;
      return shared.isFunction((_a = instance.vnode.props) == null ? void 0 : _a.onInput);
    }));
    const changeCurrentName = (value) => {
      currentName.value = value;
      emit(event.INPUT_EVENT, value);
      emit(event.UPDATE_MODEL_EVENT, value);
      emit("tab-change", value);
    };
    const setCurrentName = async (value) => {
      var _a, _b, _c;
      if (currentName.value === value)
        return;
      try {
        const canLeave = await ((_a = props.beforeLeave) == null ? void 0 : _a.call(props, value, currentName.value));
        if (canLeave !== false) {
          changeCurrentName(value);
          (_c = (_b = nav$.value) == null ? void 0 : _b.removeFocus) == null ? void 0 : _c.call(_b);
        }
      } catch (e) {
      }
    };
    const handleTabClick = (tab, tabName, event) => {
      if (tab.props.disabled)
        return;
      setCurrentName(tabName);
      emit("tab-click", tab, event);
    };
    const handleTabRemove = (pane, ev) => {
      if (pane.props.disabled)
        return;
      ev.stopPropagation();
      emit("edit", pane.props.name, "remove");
      emit("tab-remove", pane.props.name);
    };
    const handleTabAdd = () => {
      emit("edit", void 0, "add");
      emit("tab-add");
    };
    vue.watch(() => props.activeName, (modelValue) => setCurrentName(modelValue));
    vue.watch(() => props.modelValue, (modelValue) => setCurrentName(modelValue));
    vue.watch(currentName, async () => {
      var _a;
      (_a = nav$.value) == null ? void 0 : _a.scrollToActiveTab();
    });
    {
      const registerPane = (pane) => panes[pane.uid] = pane;
      const unregisterPane = (uid) => delete panes[uid];
      vue.provide(tabs.tabsRootContextKey, {
        props,
        currentName,
        registerPane,
        unregisterPane
      });
    }
    expose({
      currentName
    });
    return () => {
      const newButton = props.editable || props.addable ? vue.createVNode("span", {
        "class": ns.e("new-tab"),
        "tabindex": "0",
        "onClick": handleTabAdd,
        "onKeydown": (ev) => {
          if (ev.code === aria.EVENT_CODE.enter)
            handleTabAdd();
        }
      }, [vue.createVNode(index$2.ElIcon, {
        "class": ns.is("icon-plus")
      }, {
        default: () => [vue.createVNode(iconsVue.Plus, null, null)]
      })]) : null;
      const header = vue.createVNode("div", {
        "class": [ns.e("header"), ns.is(props.tabPosition)]
      }, [newButton, vue.createVNode(tabNav["default"], {
        "ref": nav$,
        "currentName": currentName.value,
        "editable": props.editable,
        "type": props.type,
        "panes": Object.values(panes),
        "stretch": props.stretch,
        "onTabClick": handleTabClick,
        "onTabRemove": handleTabRemove
      }, null)]);
      const panels = vue.createVNode("div", {
        "class": ns.e("content")
      }, [vue.renderSlot(slots, "default")]);
      return vue.createVNode("div", {
        "class": [ns.b(), ns.m(props.tabPosition), {
          [ns.m("card")]: props.type === "card",
          [ns.m("border-card")]: props.type === "border-card"
        }]
      }, [...props.tabPosition !== "bottom" ? [header, panels] : [panels, header]]);
    };
  }
});

exports["default"] = Tabs;
exports.tabsEmits = tabsEmits;
exports.tabsProps = tabsProps;
//# sourceMappingURL=tabs.js.map
