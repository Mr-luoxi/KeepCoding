import type { CSSProperties, ExtractPropTypes } from 'vue';
import type { FixedDirection, KeyType, RowCommonParams } from './types';
export declare type RowExpandParams<T> = {
    expanded: boolean;
    rowKey: KeyType;
} & RowCommonParams<T>;
export declare type RowHoverParams<T> = {
    event: MouseEvent;
    hovered: boolean;
    rowKey: KeyType;
} & RowCommonParams<T>;
export declare type RowEventHandlerParams<T> = {
    rowKey: KeyType;
    event: Event;
} & RowCommonParams<T>;
export declare type RowHeightChangedParams = {
    rowKey: KeyType;
    height: number;
    rowIndex: number;
};
export declare type RowExpandHandler<T> = (params: RowExpandParams<T>) => void;
export declare type RowHoverHandler<T> = (params: RowHoverParams<T>) => void;
export declare type RowEventHandler<T> = (params: RowEventHandlerParams<T>) => void;
export declare type RowHeightChangeHandler = (row: RowHeightChangedParams, fixedDirection: boolean | FixedDirection | undefined) => void;
export declare type RowEventHandlers<T> = {
    onClick?: RowEventHandler<T>;
    onContextmenu?: RowEventHandler<T>;
    onDblclick?: RowEventHandler<T>;
    onMouseenter?: RowEventHandler<T>;
    onMouseleave?: RowEventHandler<T>;
};
export declare const tableV2RowProps: {
    readonly class: StringConstructor;
    readonly columns: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./common").AnyColumn[]>, unknown, true, unknown, unknown>;
    readonly columnsStyles: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Record<KeyType, CSSProperties>>, unknown, true, unknown, unknown>;
    readonly depth: NumberConstructor;
    readonly expandColumnKey: StringConstructor;
    readonly estimatedRowHeight: {
        readonly default: undefined;
        readonly type: import("vue").PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __elPropsReservedKey: true;
    };
    readonly isScrolling: BooleanConstructor;
    readonly onRowExpand: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<RowExpandHandler<any>>, unknown, unknown, unknown, unknown>;
    readonly onRowHover: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<RowHoverHandler<any>>, unknown, unknown, unknown, unknown>;
    readonly onRowHeightChange: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<RowHeightChangeHandler>, unknown, unknown, unknown, unknown>;
    readonly rowData: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<any>, unknown, true, unknown, unknown>;
    readonly rowEventHandlers: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<RowEventHandlers<any>>, unknown, unknown, unknown, unknown>;
    readonly rowIndex: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly rowKey: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<KeyType>, "id", unknown, unknown, unknown>;
    readonly style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<CSSProperties>, unknown, unknown, unknown, unknown>;
};
export declare type TableV2RowProps = ExtractPropTypes<typeof tableV2RowProps>;
