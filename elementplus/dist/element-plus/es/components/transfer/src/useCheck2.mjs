import { getCurrentInstance, computed, watch } from 'vue';

const CHECKED_CHANGE_EVENT = "checked-change";
const useCheckProps = {
  data: {
    type: Array,
    default() {
      return [];
    }
  },
  optionRender: Function,
  placeholder: String,
  title: String,
  filterable: Boolean,
  format: Object,
  filterMethod: Function,
  defaultChecked: Array,
  props: Object
};
const useCheck = (props, panelState) => {
  const { emit } = getCurrentInstance();
  const labelProp = computed(() => props.props.label || "label");
  const keyProp = computed(() => props.props.key || "key");
  const disabledProp = computed(() => props.props.disabled || "disabled");
  const filteredData = computed(() => {
    return props.data.filter((item) => {
      if (typeof props.filterMethod === "function") {
        return props.filterMethod(panelState.query, item);
      } else {
        const label = item[labelProp.value] || item[keyProp.value].toString();
        return label.toLowerCase().includes(panelState.query.toLowerCase());
      }
    });
  });
  const checkableData = computed(() => {
    return filteredData.value.filter((item) => !item[disabledProp.value]);
  });
  const checkedSummary = computed(() => {
    const checkedLength = panelState.checked.length;
    const dataLength = props.data.length;
    const { noChecked, hasChecked } = props.format;
    if (noChecked && hasChecked) {
      return checkedLength > 0 ? hasChecked.replace(/\${checked}/g, checkedLength.toString()).replace(/\${total}/g, dataLength.toString()) : noChecked.replace(/\${total}/g, dataLength.toString());
    } else {
      return `${checkedLength}/${dataLength}`;
    }
  });
  const isIndeterminate = computed(() => {
    const checkedLength = panelState.checked.length;
    return checkedLength > 0 && checkedLength < checkableData.value.length;
  });
  const updateAllChecked = () => {
    const checkableDataKeys = checkableData.value.map((item) => item[keyProp.value]);
    panelState.allChecked = checkableDataKeys.length > 0 && checkableDataKeys.every((item) => panelState.checked.includes(item));
  };
  const handleAllCheckedChange = (value) => {
    panelState.checked = value ? checkableData.value.map((item) => item[keyProp.value]) : [];
  };
  watch(() => panelState.checked, (val, oldVal) => {
    updateAllChecked();
    if (panelState.checkChangeByUser) {
      const movedKeys = val.concat(oldVal).filter((v) => !val.includes(v) || !oldVal.includes(v));
      emit(CHECKED_CHANGE_EVENT, val, movedKeys);
    } else {
      emit(CHECKED_CHANGE_EVENT, val);
      panelState.checkChangeByUser = true;
    }
  });
  watch(checkableData, () => {
    updateAllChecked();
  });
  watch(() => props.data, () => {
    const checked = [];
    const filteredDataKeys = filteredData.value.map((item) => item[keyProp.value]);
    panelState.checked.forEach((item) => {
      if (filteredDataKeys.includes(item)) {
        checked.push(item);
      }
    });
    panelState.checkChangeByUser = false;
    panelState.checked = checked;
  });
  watch(() => props.defaultChecked, (val, oldVal) => {
    if (oldVal && val.length === oldVal.length && val.every((item) => oldVal.includes(item)))
      return;
    const checked = [];
    const checkableDataKeys = checkableData.value.map((item) => item[keyProp.value]);
    val.forEach((item) => {
      if (checkableDataKeys.includes(item)) {
        checked.push(item);
      }
    });
    panelState.checkChangeByUser = false;
    panelState.checked = checked;
  }, {
    immediate: true
  });
  return {
    labelProp,
    keyProp,
    disabledProp,
    filteredData,
    checkableData,
    checkedSummary,
    isIndeterminate,
    updateAllChecked,
    handleAllCheckedChange
  };
};

export { CHECKED_CHANGE_EVENT, useCheck, useCheckProps };
//# sourceMappingURL=useCheck2.mjs.map
