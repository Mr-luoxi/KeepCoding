'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../tokens/index2.js');
require('../../../hooks/index2.js');
var uploadList = require('./upload-list4.js');
var uploadContent = require('./upload-content3.js');
var useHandlers = require('./use-handlers2.js');
var upload = require('./upload4.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../hooks/use-common-props/index2.js');
var upload$1 = require('../../../tokens/upload2.js');

const __default__ = {
  name: "ElUpload"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: upload.uploadProps,
  setup(__props, { expose }) {
    const props = __props;
    const slots = vue.useSlots();
    const disabled = index.useDisabled();
    const uploadRef = vue.shallowRef();
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
    } = useHandlers.useHandlers(props, uploadRef);
    const isPictureCard = vue.computed(() => props.listType === "picture-card");
    const uploadContentProps = vue.computed(() => ({
      ...props,
      onStart: handleStart,
      onProgress: handleProgress,
      onSuccess: handleSuccess,
      onError: handleError,
      onRemove: handleRemove
    }));
    vue.onBeforeUnmount(() => {
      uploadFiles.value.forEach(({ url }) => {
        if (url == null ? void 0 : url.startsWith("blob:"))
          URL.revokeObjectURL(url);
      });
    });
    vue.provide(upload$1.uploadContextKey, {
      accept: vue.toRef(props, "accept")
    });
    expose({
      abort,
      submit,
      clearFiles,
      handleStart,
      handleRemove
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", null, [
        vue.unref(isPictureCard) && _ctx.showFileList ? (vue.openBlock(), vue.createBlock(uploadList["default"], {
          key: 0,
          disabled: vue.unref(disabled),
          "list-type": _ctx.listType,
          files: vue.unref(uploadFiles),
          "handle-preview": _ctx.onPreview,
          onRemove: vue.unref(handleRemove)
        }, vue.createSlots({
          append: vue.withCtx(() => [
            _ctx.listType === "picture-card" ? (vue.openBlock(), vue.createBlock(uploadContent["default"], vue.mergeProps({
              key: 0,
              ref_key: "uploadRef",
              ref: uploadRef
            }, vue.unref(uploadContentProps)), {
              default: vue.withCtx(() => [
                vue.unref(slots).trigger ? vue.renderSlot(_ctx.$slots, "trigger", { key: 0 }) : vue.createCommentVNode("v-if", true),
                !vue.unref(slots).trigger && vue.unref(slots).default ? vue.renderSlot(_ctx.$slots, "default", { key: 1 }) : vue.createCommentVNode("v-if", true)
              ]),
              _: 3
            }, 16)) : vue.createCommentVNode("v-if", true)
          ]),
          _: 2
        }, [
          _ctx.$slots.file ? {
            name: "default",
            fn: vue.withCtx(({ file }) => [
              vue.renderSlot(_ctx.$slots, "file", { file })
            ])
          } : void 0
        ]), 1032, ["disabled", "list-type", "files", "handle-preview", "onRemove"])) : vue.createCommentVNode("v-if", true),
        _ctx.listType !== "picture-card" ? (vue.openBlock(), vue.createBlock(uploadContent["default"], vue.mergeProps({
          key: 1,
          ref_key: "uploadRef",
          ref: uploadRef
        }, vue.unref(uploadContentProps)), {
          default: vue.withCtx(() => [
            vue.unref(slots).trigger ? vue.renderSlot(_ctx.$slots, "trigger", { key: 0 }) : vue.createCommentVNode("v-if", true),
            !vue.unref(slots).trigger && vue.unref(slots).default ? vue.renderSlot(_ctx.$slots, "default", { key: 1 }) : vue.createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 16)) : vue.createCommentVNode("v-if", true),
        _ctx.$slots.trigger ? vue.renderSlot(_ctx.$slots, "default", { key: 2 }) : vue.createCommentVNode("v-if", true),
        vue.renderSlot(_ctx.$slots, "tip"),
        !vue.unref(isPictureCard) && _ctx.showFileList ? (vue.openBlock(), vue.createBlock(uploadList["default"], {
          key: 3,
          disabled: vue.unref(disabled),
          "list-type": _ctx.listType,
          files: vue.unref(uploadFiles),
          "handle-preview": _ctx.onPreview,
          onRemove: vue.unref(handleRemove)
        }, vue.createSlots({ _: 2 }, [
          _ctx.$slots.file ? {
            name: "default",
            fn: vue.withCtx(({ file }) => [
              vue.renderSlot(_ctx.$slots, "file", { file })
            ])
          } : void 0
        ]), 1032, ["disabled", "list-type", "files", "handle-preview", "onRemove"])) : vue.createCommentVNode("v-if", true)
      ]);
    };
  }
});
var Upload = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/Users/luoxi/Downloads/1-\u57F9\u8BAD\u51C6\u5907\u6587\u6863/element-plus-dev/packages/components/upload/src/upload.vue"]]);

exports["default"] = Upload;
//# sourceMappingURL=upload3.js.map
