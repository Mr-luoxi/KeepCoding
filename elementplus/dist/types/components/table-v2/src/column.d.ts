import type { CSSProperties, Component, ExtractPropTypes } from 'vue';
import type { Alignment, CellRenderer, CellRendererParams, HeaderCellRenderer, HeaderCellRendererParams } from './types';
export declare const tableV2ColumnProps: {
    readonly align: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Alignment>, "left", unknown, unknown, unknown>;
    readonly class: StringConstructor;
    readonly fixed: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | import("./constants").FixedDir>, false, unknown, unknown, unknown>;
    readonly headerClass: StringConstructor;
    readonly hidden: BooleanConstructor;
    readonly resizable: BooleanConstructor;
    readonly style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<CSSProperties>, unknown, unknown, unknown, unknown>;
    readonly sortable: BooleanConstructor;
    readonly title: StringConstructor;
    readonly maxWidth: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, undefined, unknown, unknown, unknown>;
    readonly minWidth: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, undefined, unknown, unknown, unknown>;
    readonly width: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly cellRenderer: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<CellRenderer<any> | Component<CellRendererParams<any>, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown, unknown, unknown>;
    readonly headerRenderer: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HeaderCellRenderer<any> | Component<HeaderCellRendererParams<any>, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown, unknown, unknown>;
};
export declare type TableV2ColumnProps = ExtractPropTypes<typeof tableV2ColumnProps>;
