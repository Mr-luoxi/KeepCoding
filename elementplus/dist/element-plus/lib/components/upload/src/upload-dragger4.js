'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../hooks/index2.js');
require('../../../tokens/index2.js');
var error = require('../../../utils/error2.js');
var uploadDragger = require('./upload-dragger3.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var upload = require('../../../tokens/upload2.js');
var index = require('../../../hooks/use-namespace/index2.js');

const _hoisted_1 = ["onDrop", "onDragover"];
const __default__ = {
  name: "ElUploadDrag"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: uploadDragger.uploadDraggerProps,
  emits: uploadDragger.uploadDraggerEmits,
  setup(__props, { emit }) {
    const props = __props;
    const COMPONENT_NAME = "ElUploadDrag";
    const uploaderContext = vue.inject(upload.uploadContextKey);
    if (!uploaderContext) {
      error.throwError(COMPONENT_NAME, "usage: <el-upload><el-upload-dragger /></el-upload>");
    }
    const ns = index.useNamespace("upload");
    const dragover = vue.ref(false);
    const onDrop = (e) => {
      if (props.disabled)
        return;
      dragover.value = false;
      const files = Array.from(e.dataTransfer.files);
      const accept = uploaderContext.accept.value;
      if (!accept) {
        emit("file", files);
        return;
      }
      const filesFiltered = files.filter((file) => {
        const { type, name } = file;
        const extension = name.includes(".") ? `.${name.split(".").pop()}` : "";
        const baseType = type.replace(/\/.*$/, "");
        return accept.split(",").map((type2) => type2.trim()).filter((type2) => type2).some((acceptedType) => {
          if (acceptedType.startsWith(".")) {
            return extension === acceptedType;
          }
          if (/\/\*$/.test(acceptedType)) {
            return baseType === acceptedType.replace(/\/\*$/, "");
          }
          if (/^[^/]+\/[^/]+$/.test(acceptedType)) {
            return type === acceptedType;
          }
          return false;
        });
      });
      emit("file", filesFiltered);
    };
    const onDragover = () => {
      if (!props.disabled)
        dragover.value = true;
    };
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass([vue.unref(ns).b("dragger"), vue.unref(ns).is("dragover", dragover.value)]),
        onDrop: vue.withModifiers(onDrop, ["prevent"]),
        onDragover: vue.withModifiers(onDragover, ["prevent"]),
        onDragleave: _cache[0] || (_cache[0] = vue.withModifiers(($event) => dragover.value = false, ["prevent"]))
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 42, _hoisted_1);
    };
  }
});
var UploadDragger = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/upload/src/upload-dragger.vue"]]);

exports["default"] = UploadDragger;
//# sourceMappingURL=upload-dragger4.js.map
