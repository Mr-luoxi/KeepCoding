import ColorPicker from './src/index2.mjs';

ColorPicker.install = (app) => {
  app.component(ColorPicker.name, ColorPicker);
};
const _ColorPicker = ColorPicker;
const ElColorPicker = _ColorPicker;

export { ElColorPicker, _ColorPicker as default };
//# sourceMappingURL=index2.mjs.map
