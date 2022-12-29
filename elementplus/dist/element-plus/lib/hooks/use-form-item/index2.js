'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../tokens/index2.js');
var form = require('../../tokens/form2.js');

const useFormItem = () => {
  const form$1 = vue.inject(form.formContextKey, void 0);
  const formItem = vue.inject(form.formItemContextKey, void 0);
  return {
    form: form$1,
    formItem
  };
};

exports.useFormItem = useFormItem;
//# sourceMappingURL=index2.js.map
