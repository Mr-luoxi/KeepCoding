/*
 * @Author: luo xi
 * @Date: 2022-11-25 10:43:08
 * @LastEditTime: 2022-11-25 11:06:09
 * @LastEditors: luo xi
 * @Description:
 * @FilePath: /KeepCoding/pnpmvue/packages/hooks/useNamespace.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { computed, unref } from "vue";

// 定义组件命名前缀
const defaultNamespace = "iep";

// 定义组建状态变量
const prefixState = "is-";

// 返回bem 规范的css 命令函数
/**
 * @description:
 * @param {*} namespace 命名空间 defaultName
 * @param {*} block 组件名称 块 dialog
 * @param {*} blockSuffix 组件前缀 -header
 * @param {*} element 组件元素 -header
 * @param {*} modifier 组件 修饰符
 * @return {*}
 */
const _bem = (namespace, block, blockSuffix, element, modifier) => {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) cls += `-${blockSuffix}`;
  if (element) cls += `__${element}`;
  if (modifier) cls += `--${modifier}`;
  return cls;
};

export const useNamespace = (block) => {
  const namespace = computed(() => defaultNamespace);
  // iep-dialog-layer
  const b = (blockSuffix) => _bem(unref(namespace), block, blockSuffix, "", "");
  // iep-dialog__header
  const e = (element) => _bem(unref(namespace), block, "", element, "");
  // iep-dialog__header--primary
  const m = (modifier) => _bem(unref(namespace), block, "", "", modifier);
  // iep-dialog-header__close
  const be = (blockSuffix, element) =>
    _bem(unref(namespace), block, blockSuffix, element, "");
  // iep-dialog-footer--small
  const bm = (blockSuffix, modifier) =>
    _bem(unref(namespace), block, blockSuffix, modifier, "");
  // el-dialog-footer__btn--primary
  const bem = (blockSuffix, element, modifier) =>
    _bem(unref(namespace), block, blockSuffix, element, modifier);
  const is = (name,...args) => {
    const state = args.length >= 1 ? args[0] : true;
    return name && state ? `${prefixState}${name}` : ''
  }
  return {
    b,
    e,
    m,
    bm,
    be,
    bem,
    is
  };
};
