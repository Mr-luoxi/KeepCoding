import { inject, computed, unref } from 'vue';
import { isClient } from '@vueuse/core';
import '../../utils/index2.mjs';
import { debugWarn } from '../../utils/error2.mjs';

const defaultIdInjection = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
};
const ID_INJECTION_KEY = Symbol("elIdInjection");
const useId = (deterministicId) => {
  const idInjection = inject(ID_INJECTION_KEY, defaultIdInjection);
  if (!isClient && idInjection === defaultIdInjection) {
    debugWarn("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  }
  const idRef = computed(() => unref(deterministicId) || `el-id-${idInjection.prefix}-${idInjection.current++}`);
  return idRef;
};

export { ID_INJECTION_KEY, useId };
//# sourceMappingURL=index2.mjs.map
