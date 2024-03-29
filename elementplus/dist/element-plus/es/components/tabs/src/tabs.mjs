import { defineComponent, getCurrentInstance, ref, reactive, computed, watch, provide, createVNode, renderSlot } from 'vue';
import '../../../utils/index2.mjs';
import '../../../constants/index2.mjs';
import { ElIcon } from '../../icon/index2.mjs';
import { Plus } from '@element-plus/icons-vue';
import '../../../tokens/index2.mjs';
import '../../../hooks/index2.mjs';
import TabNav from './tab-nav.mjs';
import { buildProps, definePropType } from '../../../utils/vue/props2.mjs';
import { isString, isFunction } from '@vue/shared';
import { isNumber } from '@vueuse/core';
import { UPDATE_MODEL_EVENT, INPUT_EVENT } from '../../../constants/event2.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index2.mjs';
import { useDeprecated } from '../../../hooks/use-deprecated/index2.mjs';
import { tabsRootContextKey } from '../../../tokens/tabs2.mjs';
import { EVENT_CODE } from '../../../constants/aria2.mjs';

const tabsProps = buildProps({
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
    type: definePropType(Function),
    default: () => true
  },
  stretch: Boolean
});
const isPanelName = (value) => isString(value) || isNumber(value);
const tabsEmits = {
  [UPDATE_MODEL_EVENT]: (name) => isPanelName(name),
  [INPUT_EVENT]: (name) => isPanelName(name),
  "tab-click": (pane, ev) => ev instanceof Event,
  "tab-change": (name) => isPanelName(name),
  edit: (paneName, action) => ["remove", "add"].includes(action),
  "tab-remove": (name) => isPanelName(name),
  "tab-add": () => true
};
var Tabs = defineComponent({
  name: "ElTabs",
  props: tabsProps,
  emits: tabsEmits,
  setup(props, {
    emit,
    slots,
    expose
  }) {
    const instance = getCurrentInstance();
    const ns = useNamespace("tabs");
    const nav$ = ref();
    const panes = reactive({});
    const currentName = ref(props.modelValue || props.activeName || "0");
    useDeprecated({
      scope: "el-tabs",
      type: "Event",
      from: "input",
      replacement: "tab-change",
      version: "2.5.0",
      ref: "https://element-plus.org/en-US/component/tabs.html#tabs-events"
    }, computed(() => {
      var _a;
      return isFunction((_a = instance.vnode.props) == null ? void 0 : _a.onInput);
    }));
    const changeCurrentName = (value) => {
      currentName.value = value;
      emit(INPUT_EVENT, value);
      emit(UPDATE_MODEL_EVENT, value);
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
    watch(() => props.activeName, (modelValue) => setCurrentName(modelValue));
    watch(() => props.modelValue, (modelValue) => setCurrentName(modelValue));
    watch(currentName, async () => {
      var _a;
      (_a = nav$.value) == null ? void 0 : _a.scrollToActiveTab();
    });
    {
      const registerPane = (pane) => panes[pane.uid] = pane;
      const unregisterPane = (uid) => delete panes[uid];
      provide(tabsRootContextKey, {
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
      const newButton = props.editable || props.addable ? createVNode("span", {
        "class": ns.e("new-tab"),
        "tabindex": "0",
        "onClick": handleTabAdd,
        "onKeydown": (ev) => {
          if (ev.code === EVENT_CODE.enter)
            handleTabAdd();
        }
      }, [createVNode(ElIcon, {
        "class": ns.is("icon-plus")
      }, {
        default: () => [createVNode(Plus, null, null)]
      })]) : null;
      const header = createVNode("div", {
        "class": [ns.e("header"), ns.is(props.tabPosition)]
      }, [newButton, createVNode(TabNav, {
        "ref": nav$,
        "currentName": currentName.value,
        "editable": props.editable,
        "type": props.type,
        "panes": Object.values(panes),
        "stretch": props.stretch,
        "onTabClick": handleTabClick,
        "onTabRemove": handleTabRemove
      }, null)]);
      const panels = createVNode("div", {
        "class": ns.e("content")
      }, [renderSlot(slots, "default")]);
      return createVNode("div", {
        "class": [ns.b(), ns.m(props.tabPosition), {
          [ns.m("card")]: props.type === "card",
          [ns.m("border-card")]: props.type === "border-card"
        }]
      }, [...props.tabPosition !== "bottom" ? [header, panels] : [panels, header]]);
    };
  }
});

export { Tabs as default, tabsEmits, tabsProps };
//# sourceMappingURL=tabs.mjs.map
