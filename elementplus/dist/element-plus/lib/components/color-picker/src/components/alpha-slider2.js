'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../../utils/index2.js');
var draggable = require('../draggable2.js');
var pluginVue_exportHelper = require('../../../../_virtual/plugin-vue_export-helper.js');
var position = require('../../../../utils/dom/position2.js');

const _sfc_main = vue.defineComponent({
  name: "ElColorAlphaSlider",
  props: {
    color: {
      type: Object,
      required: true
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const instance = vue.getCurrentInstance();
    const thumb = vue.shallowRef(null);
    const bar = vue.shallowRef(null);
    const thumbLeft = vue.ref(0);
    const thumbTop = vue.ref(0);
    const background = vue.ref(null);
    vue.watch(() => props.color.get("alpha"), () => {
      update();
    });
    vue.watch(() => props.color.value, () => {
      update();
    });
    function getThumbLeft() {
      if (props.vertical)
        return 0;
      const el = instance.vnode.el;
      const alpha = props.color.get("alpha");
      if (!el)
        return 0;
      return Math.round(alpha * (el.offsetWidth - thumb.value.offsetWidth / 2) / 100);
    }
    function getThumbTop() {
      const el = instance.vnode.el;
      if (!props.vertical)
        return 0;
      const alpha = props.color.get("alpha");
      if (!el)
        return 0;
      return Math.round(alpha * (el.offsetHeight - thumb.value.offsetHeight / 2) / 100);
    }
    function getBackground() {
      if (props.color && props.color.value) {
        const { r, g, b } = props.color.toRgb();
        return `linear-gradient(to right, rgba(${r}, ${g}, ${b}, 0) 0%, rgba(${r}, ${g}, ${b}, 1) 100%)`;
      }
      return null;
    }
    function handleClick(event) {
      const target = event.target;
      if (target !== thumb.value) {
        handleDrag(event);
      }
    }
    function handleDrag(event) {
      const el = instance.vnode.el;
      const rect = el.getBoundingClientRect();
      const { clientX, clientY } = position.getClientXY(event);
      if (!props.vertical) {
        let left = clientX - rect.left;
        left = Math.max(thumb.value.offsetWidth / 2, left);
        left = Math.min(left, rect.width - thumb.value.offsetWidth / 2);
        props.color.set("alpha", Math.round((left - thumb.value.offsetWidth / 2) / (rect.width - thumb.value.offsetWidth) * 100));
      } else {
        let top = clientY - rect.top;
        top = Math.max(thumb.value.offsetHeight / 2, top);
        top = Math.min(top, rect.height - thumb.value.offsetHeight / 2);
        props.color.set("alpha", Math.round((top - thumb.value.offsetHeight / 2) / (rect.height - thumb.value.offsetHeight) * 100));
      }
    }
    function update() {
      thumbLeft.value = getThumbLeft();
      thumbTop.value = getThumbTop();
      background.value = getBackground();
    }
    vue.onMounted(() => {
      const dragConfig = {
        drag: (event) => {
          handleDrag(event);
        },
        end: (event) => {
          handleDrag(event);
        }
      };
      draggable["default"](bar.value, dragConfig);
      draggable["default"](thumb.value, dragConfig);
      update();
    });
    return {
      thumb,
      bar,
      thumbLeft,
      thumbTop,
      background,
      handleClick,
      update
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(["el-color-alpha-slider", { "is-vertical": _ctx.vertical }])
  }, [
    vue.createElementVNode("div", {
      ref: "bar",
      class: "el-color-alpha-slider__bar",
      style: vue.normalizeStyle({
        background: _ctx.background
      }),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
    }, null, 4),
    vue.createElementVNode("div", {
      ref: "thumb",
      class: "el-color-alpha-slider__thumb",
      style: vue.normalizeStyle({
        left: _ctx.thumbLeft + "px",
        top: _ctx.thumbTop + "px"
      })
    }, null, 4)
  ], 2);
}
var AlphaSlider = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render], ["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/color-picker/src/components/alpha-slider.vue"]]);

exports["default"] = AlphaSlider;
//# sourceMappingURL=alpha-slider2.js.map
