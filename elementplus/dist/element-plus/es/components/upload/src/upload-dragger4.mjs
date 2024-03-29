import { defineComponent, inject, ref, openBlock, createElementBlock, normalizeClass, unref, withModifiers, renderSlot } from 'vue';
import '../../../hooks/index2.mjs';
import '../../../tokens/index2.mjs';
import { throwError } from '../../../utils/error2.mjs';
import { uploadDraggerProps, uploadDraggerEmits } from './upload-dragger3.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { uploadContextKey } from '../../../tokens/upload2.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index2.mjs';

const _hoisted_1 = ["onDrop", "onDragover"];
const __default__ = {
  name: "ElUploadDrag"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: uploadDraggerProps,
  emits: uploadDraggerEmits,
  setup(__props, { emit }) {
    const props = __props;
    const COMPONENT_NAME = "ElUploadDrag";
    const uploaderContext = inject(uploadContextKey);
    if (!uploaderContext) {
      throwError(COMPONENT_NAME, "usage: <el-upload><el-upload-dragger /></el-upload>");
    }
    const ns = useNamespace("upload");
    const dragover = ref(false);
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
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ns).b("dragger"), unref(ns).is("dragover", dragover.value)]),
        onDrop: withModifiers(onDrop, ["prevent"]),
        onDragover: withModifiers(onDragover, ["prevent"]),
        onDragleave: _cache[0] || (_cache[0] = withModifiers(($event) => dragover.value = false, ["prevent"]))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 42, _hoisted_1);
    };
  }
});
var UploadDragger = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/upload/src/upload-dragger.vue"]]);

export { UploadDragger as default };
//# sourceMappingURL=upload-dragger4.mjs.map
