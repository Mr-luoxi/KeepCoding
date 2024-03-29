import { defineComponent, useSlots, shallowRef, computed, onBeforeUnmount, provide, toRef, openBlock, createElementBlock, unref, createBlock, createSlots, withCtx, mergeProps, renderSlot, createCommentVNode } from 'vue';
import '../../../tokens/index2.mjs';
import '../../../hooks/index2.mjs';
import UploadList from './upload-list4.mjs';
import UploadContent from './upload-content3.mjs';
import { useHandlers } from './use-handlers2.mjs';
import { uploadProps } from './upload4.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useDisabled } from '../../../hooks/use-common-props/index2.mjs';
import { uploadContextKey } from '../../../tokens/upload2.mjs';

const __default__ = {
  name: "ElUpload"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: uploadProps,
  setup(__props, { expose }) {
    const props = __props;
    const slots = useSlots();
    const disabled = useDisabled();
    const uploadRef = shallowRef();
    const {
      abort,
      submit,
      clearFiles,
      uploadFiles,
      handleStart,
      handleError,
      handleRemove,
      handleSuccess,
      handleProgress
    } = useHandlers(props, uploadRef);
    const isPictureCard = computed(() => props.listType === "picture-card");
    const uploadContentProps = computed(() => ({
      ...props,
      onStart: handleStart,
      onProgress: handleProgress,
      onSuccess: handleSuccess,
      onError: handleError,
      onRemove: handleRemove
    }));
    onBeforeUnmount(() => {
      uploadFiles.value.forEach(({ url }) => {
        if (url == null ? void 0 : url.startsWith("blob:"))
          URL.revokeObjectURL(url);
      });
    });
    provide(uploadContextKey, {
      accept: toRef(props, "accept")
    });
    expose({
      abort,
      submit,
      clearFiles,
      handleStart,
      handleRemove
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        unref(isPictureCard) && _ctx.showFileList ? (openBlock(), createBlock(UploadList, {
          key: 0,
          disabled: unref(disabled),
          "list-type": _ctx.listType,
          files: unref(uploadFiles),
          "handle-preview": _ctx.onPreview,
          onRemove: unref(handleRemove)
        }, createSlots({
          append: withCtx(() => [
            _ctx.listType === "picture-card" ? (openBlock(), createBlock(UploadContent, mergeProps({
              key: 0,
              ref_key: "uploadRef",
              ref: uploadRef
            }, unref(uploadContentProps)), {
              default: withCtx(() => [
                unref(slots).trigger ? renderSlot(_ctx.$slots, "trigger", { key: 0 }) : createCommentVNode("v-if", true),
                !unref(slots).trigger && unref(slots).default ? renderSlot(_ctx.$slots, "default", { key: 1 }) : createCommentVNode("v-if", true)
              ]),
              _: 3
            }, 16)) : createCommentVNode("v-if", true)
          ]),
          _: 2
        }, [
          _ctx.$slots.file ? {
            name: "default",
            fn: withCtx(({ file }) => [
              renderSlot(_ctx.$slots, "file", { file })
            ])
          } : void 0
        ]), 1032, ["disabled", "list-type", "files", "handle-preview", "onRemove"])) : createCommentVNode("v-if", true),
        _ctx.listType !== "picture-card" ? (openBlock(), createBlock(UploadContent, mergeProps({
          key: 1,
          ref_key: "uploadRef",
          ref: uploadRef
        }, unref(uploadContentProps)), {
          default: withCtx(() => [
            unref(slots).trigger ? renderSlot(_ctx.$slots, "trigger", { key: 0 }) : createCommentVNode("v-if", true),
            !unref(slots).trigger && unref(slots).default ? renderSlot(_ctx.$slots, "default", { key: 1 }) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 16)) : createCommentVNode("v-if", true),
        _ctx.$slots.trigger ? renderSlot(_ctx.$slots, "default", { key: 2 }) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "tip"),
        !unref(isPictureCard) && _ctx.showFileList ? (openBlock(), createBlock(UploadList, {
          key: 3,
          disabled: unref(disabled),
          "list-type": _ctx.listType,
          files: unref(uploadFiles),
          "handle-preview": _ctx.onPreview,
          onRemove: unref(handleRemove)
        }, createSlots({ _: 2 }, [
          _ctx.$slots.file ? {
            name: "default",
            fn: withCtx(({ file }) => [
              renderSlot(_ctx.$slots, "file", { file })
            ])
          } : void 0
        ]), 1032, ["disabled", "list-type", "files", "handle-preview", "onRemove"])) : createCommentVNode("v-if", true)
      ]);
    };
  }
});
var Upload = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/upload/src/upload.vue"]]);

export { Upload as default };
//# sourceMappingURL=upload3.mjs.map
