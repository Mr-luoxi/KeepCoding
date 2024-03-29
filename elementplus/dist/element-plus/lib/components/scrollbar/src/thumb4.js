'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var core = require('@vueuse/core');
require('../../../tokens/index2.js');
require('../../../utils/index2.js');
require('../../../hooks/index2.js');
var util = require('./util2.js');
var thumb = require('./thumb3.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var scrollbar = require('../../../tokens/scrollbar2.js');
var index = require('../../../hooks/use-namespace/index2.js');
var error = require('../../../utils/error2.js');

const COMPONENT_NAME = "Thumb";
const _sfc_main = vue.defineComponent({
  name: COMPONENT_NAME,
  props: thumb.thumbProps,
  setup(props) {
    const scrollbar$1 = vue.inject(scrollbar.scrollbarContextKey);
    const ns = index.useNamespace("scrollbar");
    if (!scrollbar$1)
      error.throwError(COMPONENT_NAME, "can not inject scrollbar context");
    const instance = vue.ref();
    const thumb = vue.ref();
    const thumbState = vue.ref({});
    const visible = vue.ref(false);
    let cursorDown = false;
    let cursorLeave = false;
    let originalOnSelectStart = core.isClient ? document.onselectstart : null;
    const bar = vue.computed(() => util.BAR_MAP[props.vertical ? "vertical" : "horizontal"]);
    const thumbStyle = vue.computed(() => util.renderThumbStyle({
      size: props.size,
      move: props.move,
      bar: bar.value
    }));
    const offsetRatio = vue.computed(() => instance.value[bar.value.offset] ** 2 / scrollbar$1.wrapElement[bar.value.scrollSize] / props.ratio / thumb.value[bar.value.offset]);
    const clickThumbHandler = (e) => {
      var _a;
      e.stopPropagation();
      if (e.ctrlKey || [1, 2].includes(e.button))
        return;
      (_a = window.getSelection()) == null ? void 0 : _a.removeAllRanges();
      startDrag(e);
      const el = e.currentTarget;
      if (!el)
        return;
      thumbState.value[bar.value.axis] = el[bar.value.offset] - (e[bar.value.client] - el.getBoundingClientRect()[bar.value.direction]);
    };
    const clickTrackHandler = (e) => {
      if (!thumb.value || !instance.value || !scrollbar$1.wrapElement)
        return;
      const offset = Math.abs(e.target.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]);
      const thumbHalf = thumb.value[bar.value.offset] / 2;
      const thumbPositionPercentage = (offset - thumbHalf) * 100 * offsetRatio.value / instance.value[bar.value.offset];
      scrollbar$1.wrapElement[bar.value.scroll] = thumbPositionPercentage * scrollbar$1.wrapElement[bar.value.scrollSize] / 100;
    };
    const startDrag = (e) => {
      e.stopImmediatePropagation();
      cursorDown = true;
      document.addEventListener("mousemove", mouseMoveDocumentHandler);
      document.addEventListener("mouseup", mouseUpDocumentHandler);
      originalOnSelectStart = document.onselectstart;
      document.onselectstart = () => false;
    };
    const mouseMoveDocumentHandler = (e) => {
      if (!instance.value || !thumb.value)
        return;
      if (cursorDown === false)
        return;
      const prevPage = thumbState.value[bar.value.axis];
      if (!prevPage)
        return;
      const offset = (instance.value.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]) * -1;
      const thumbClickPosition = thumb.value[bar.value.offset] - prevPage;
      const thumbPositionPercentage = (offset - thumbClickPosition) * 100 * offsetRatio.value / instance.value[bar.value.offset];
      scrollbar$1.wrapElement[bar.value.scroll] = thumbPositionPercentage * scrollbar$1.wrapElement[bar.value.scrollSize] / 100;
    };
    const mouseUpDocumentHandler = () => {
      cursorDown = false;
      thumbState.value[bar.value.axis] = 0;
      document.removeEventListener("mousemove", mouseMoveDocumentHandler);
      document.removeEventListener("mouseup", mouseUpDocumentHandler);
      restoreOnselectstart();
      if (cursorLeave)
        visible.value = false;
    };
    const mouseMoveScrollbarHandler = () => {
      cursorLeave = false;
      visible.value = !!props.size;
    };
    const mouseLeaveScrollbarHandler = () => {
      cursorLeave = true;
      visible.value = cursorDown;
    };
    vue.onBeforeUnmount(() => {
      restoreOnselectstart();
      document.removeEventListener("mouseup", mouseUpDocumentHandler);
    });
    const restoreOnselectstart = () => {
      if (document.onselectstart !== originalOnSelectStart)
        document.onselectstart = originalOnSelectStart;
    };
    core.useEventListener(vue.toRef(scrollbar$1, "scrollbarElement"), "mousemove", mouseMoveScrollbarHandler);
    core.useEventListener(vue.toRef(scrollbar$1, "scrollbarElement"), "mouseleave", mouseLeaveScrollbarHandler);
    return {
      ns,
      instance,
      thumb,
      bar,
      thumbStyle,
      visible,
      clickTrackHandler,
      clickThumbHandler
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock(vue.Transition, {
    name: _ctx.ns.b("fade")
  }, {
    default: vue.withCtx(() => [
      vue.withDirectives(vue.createElementVNode("div", {
        ref: "instance",
        class: vue.normalizeClass([_ctx.ns.e("bar"), _ctx.ns.is(_ctx.bar.key)]),
        onMousedown: _cache[1] || (_cache[1] = (...args) => _ctx.clickTrackHandler && _ctx.clickTrackHandler(...args))
      }, [
        vue.createElementVNode("div", {
          ref: "thumb",
          class: vue.normalizeClass(_ctx.ns.e("thumb")),
          style: vue.normalizeStyle(_ctx.thumbStyle),
          onMousedown: _cache[0] || (_cache[0] = (...args) => _ctx.clickThumbHandler && _ctx.clickThumbHandler(...args))
        }, null, 38)
      ], 34), [
        [vue.vShow, _ctx.always || _ctx.visible]
      ])
    ]),
    _: 1
  }, 8, ["name"]);
}
var Thumb = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render], ["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/scrollbar/src/thumb.vue"]]);

exports["default"] = Thumb;
//# sourceMappingURL=thumb4.js.map
