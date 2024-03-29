'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var core = require('@vueuse/core');
require('../../utils/index2.js');
var error = require('../../utils/error2.js');

const defaultIdInjection = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
};
const ID_INJECTION_KEY = Symbol("elIdInjection");
const useId = (deterministicId) => {
  const idInjection = vue.inject(ID_INJECTION_KEY, defaultIdInjection);
  if (!core.isClient && idInjection === defaultIdInjection) {
    error.debugWarn("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  }
  const idRef = vue.computed(() => vue.unref(deterministicId) || `el-id-${idInjection.prefix}-${idInjection.current++}`);
  return idRef;
};

exports.ID_INJECTION_KEY = ID_INJECTION_KEY;
exports.useId = useId;
//# sourceMappingURL=index2.js.map
