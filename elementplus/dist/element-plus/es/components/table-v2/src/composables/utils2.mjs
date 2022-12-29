const calcColumnStyle = (column, fixedColumn) => {
  var _a;
  const flex = {
    flexGrow: 0,
    flexShrink: 0
  };
  if (column.fixed) {
    flex.flexShrink = 1;
  }
  const style = {
    ...(_a = column.style) != null ? _a : {},
    ...flex,
    flexBasis: "auto",
    width: column.width
  };
  if (!fixedColumn) {
    if (column.maxWidth)
      style.maxWidth = column.maxWidth;
    if (column.minWidth)
      style.maxWidth = column.minWidth;
  }
  return style;
};

export { calcColumnStyle };
//# sourceMappingURL=utils2.mjs.map
