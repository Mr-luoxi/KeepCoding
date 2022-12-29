import { inject } from 'vue';
import '../../tokens/index2.mjs';
import { formContextKey, formItemContextKey } from '../../tokens/form2.mjs';

const useFormItem = () => {
  const form = inject(formContextKey, void 0);
  const formItem = inject(formItemContextKey, void 0);
  return {
    form,
    formItem
  };
};

export { useFormItem };
//# sourceMappingURL=index2.mjs.map
