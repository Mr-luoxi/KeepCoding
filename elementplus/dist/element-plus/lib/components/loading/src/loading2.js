'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../utils/index2.js');
var style = require('../../../utils/dom/style2.js');

function createLoadingComponent(options) {
  let afterLeaveTimer;
  const afterLeaveFlag = vue.ref(false);
  const data = vue.reactive({
    ...options,
    originalPosition: "",
    originalOverflow: "",
    visible: false
  });
  function setText(text) {
    data.text = text;
  }
  function destroySelf() {
    const target = data.parent;
    if (!target.vLoadingAddClassList) {
      let loadingNumber = target.getAttribute("loading-number");
      loadingNumber = Number.parseInt(loadingNumber) - 1;
      if (!loadingNumber) {
        style.removeClass(target, "el-loading-parent--relative");
        target.removeAttribute("loading-number");
      } else {
        target.setAttribute("loading-number", loadingNumber.toString());
      }
      style.removeClass(target, "el-loading-parent--hidden");
    }
    remvoeElLoadingChild();
    loadingInstance.unmount();
  }
  function remvoeElLoadingChild() {
    var _a, _b;
    (_b = (_a = vm.$el) == null ? void 0 : _a.parentNode) == null ? void 0 : _b.removeChild(vm.$el);
  }
  function close() {
    var _a;
    if (options.beforeClose && !options.beforeClose())
      return;
    const target = data.parent;
    target.vLoadingAddClassList = void 0;
    afterLeaveFlag.value = true;
    clearTimeout(afterLeaveTimer);
    afterLeaveTimer = window.setTimeout(() => {
      if (afterLeaveFlag.value) {
        afterLeaveFlag.value = false;
        destroySelf();
      }
    }, 400);
    data.visible = false;
    (_a = options.closed) == null ? void 0 : _a.call(options);
  }
  function handleAfterLeave() {
    if (!afterLeaveFlag.value)
      return;
    afterLeaveFlag.value = false;
    destroySelf();
  }
  const elLoadingComponent = {
    name: "ElLoading",
    setup() {
      return () => {
        const svg = data.spinner || data.svg;
        const spinner = vue.h("svg", {
          class: "circular",
          viewBox: data.svgViewBox ? data.svgViewBox : "25 25 50 50",
          ...svg ? { innerHTML: svg } : {}
        }, [
          vue.h("circle", {
            class: "path",
            cx: "50",
            cy: "50",
            r: "20",
            fill: "none"
          })
        ]);
        const spinnerText = data.text ? vue.h("p", { class: "el-loading-text" }, [data.text]) : void 0;
        return vue.h(vue.Transition, {
          name: "el-loading-fade",
          onAfterLeave: handleAfterLeave
        }, {
          default: vue.withCtx(() => [
            vue.withDirectives(vue.createVNode("div", {
              style: {
                backgroundColor: data.background || ""
              },
              class: [
                "el-loading-mask",
                data.customClass,
                data.fullscreen ? "is-fullscreen" : ""
              ]
            }, [
              vue.h("div", {
                class: "el-loading-spinner"
              }, [spinner, spinnerText])
            ]), [[vue.vShow, data.visible]])
          ])
        });
      };
    }
  };
  const loadingInstance = vue.createApp(elLoadingComponent);
  const vm = loadingInstance.mount(document.createElement("div"));
  return {
    ...vue.toRefs(data),
    setText,
    remvoeElLoadingChild,
    close,
    handleAfterLeave,
    vm,
    get $el() {
      return vm.$el;
    }
  };
}

exports.createLoadingComponent = createLoadingComponent;
//# sourceMappingURL=loading2.js.map
