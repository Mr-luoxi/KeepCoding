import type { CSSProperties, ExtractPropTypes } from 'vue';
import type { SortOrder } from './constants';
import type { Column, ColumnCommonParams, DataGetter, KeyType, RowCommonParams, SortBy } from './types';
/**
 * Param types
 */
export declare type ColumnSortParams<T> = {
    column: Column<T>;
    key: KeyType;
    order: SortOrder;
};
/**
 * Renderer/Getter types
 */
export declare type ExtraCellPropGetter<T> = (params: ColumnCommonParams<T> & RowCommonParams<T>) => any;
export declare type ExtractHeaderPropGetter<T> = (params: {
    columns: Column<T>[];
    headerIndex: number;
}) => any;
export declare type ExtractHeaderCellPropGetter<T> = (params: ColumnCommonParams<T> & {
    headerIndex: number;
}) => any;
export declare type ExtractRowPropGetter<T> = (params: {
    columns: Column<T>[];
} & RowCommonParams<T>) => any;
export declare type HeaderClassNameGetter<T> = (params: {
    columns: Column<T>[];
    headerIndex: number;
}) => string;
export declare type RowClassNameGetter<T> = (params: {
    columns: Column<T>[];
} & RowCommonParams<T>) => string;
/**
 * Handler types
 */
export declare type ColumnSortHandler<T> = (params: ColumnSortParams<T>) => void;
export declare type ColumnResizeHandler<T> = (column: Column<T>, width: number) => void;
export declare const tableV2Props: {
    readonly cache: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 2, false, never, never>;
    readonly estimatedRowHeight: {
        readonly default: undefined;
        readonly type: import("vue").PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __elPropsReservedKey: true;
    };
    readonly rowKey: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<KeyType>, "id", unknown, unknown, unknown>;
    readonly cellProps: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<any>, unknown, unknown, unknown, unknown>;
    readonly headerClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | HeaderClassNameGetter<any>>, unknown, unknown, unknown, unknown>;
    readonly headerProps: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<any>, unknown, unknown, unknown, unknown>;
    readonly headerCellProps: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<any>, unknown, unknown, unknown, unknown>;
    readonly headerHeight: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<number | number[]>, 50, unknown, unknown, unknown>;
    readonly footerHeight: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly rowClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | RowClassNameGetter<any>>, unknown, unknown, unknown, unknown>;
    readonly rowProps: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<any>, unknown, unknown, unknown, unknown>;
    readonly rowHeight: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 50, unknown, unknown, unknown>;
    readonly columns: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./common").AnyColumn[]>, unknown, true, unknown, unknown>;
    readonly data: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<any[]>, unknown, true, unknown, unknown>;
    readonly dataGetter: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<DataGetter<any>>, unknown, unknown, unknown, unknown>;
    readonly dataKey: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "id", unknown, unknown, unknown>;
    readonly fixedData: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<any[]>, unknown, unknown, unknown, unknown>;
    readonly expandColumnKey: StringConstructor;
    readonly expandedRowKeys: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<KeyType[]>, () => never[], unknown, unknown, unknown>;
    readonly defaultExpandedRowKeys: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<KeyType[]>, () => never[], unknown, unknown, unknown>;
    readonly class: StringConstructor;
    readonly disabled: BooleanConstructor;
    readonly fixed: BooleanConstructor;
    readonly style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<CSSProperties>, unknown, unknown, unknown, unknown>;
    readonly width: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly height: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly maxHeight: NumberConstructor;
    readonly useIsScrolling: BooleanConstructor;
    readonly indentSize: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
    readonly iconSize: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
    readonly hScrollbarSize: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 6, unknown, unknown, unknown>;
    readonly vScrollbarSize: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 6, unknown, unknown, unknown>;
    readonly scrollbarAlwaysOn: BooleanConstructor;
    readonly sortBy: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<SortBy>, () => {
        key: KeyType;
        order: SortOrder;
    }, unknown, unknown, unknown>;
    readonly sortState: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Record<KeyType, SortOrder>>, undefined, unknown, unknown, unknown>;
    readonly onColumnSort: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<ColumnSortHandler<any>>, unknown, unknown, unknown, unknown>;
    readonly onExpandedRowsChange: FunctionConstructor;
    readonly onEndReached: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(distance: number) => void>, unknown, unknown, unknown, unknown>;
    readonly onRowExpand: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./row").RowExpandHandler<any>>, unknown, unknown, unknown, unknown>;
    readonly onScroll: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(...args: any[]) => void>, unknown, unknown, unknown, unknown>;
    readonly onRowRendered: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(params: import("./grid").onRowRenderedParams) => void>, unknown, unknown, unknown, unknown>;
    readonly rowEventHandlers: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./row").RowEventHandlers<any>>, unknown, unknown, unknown, unknown>;
};
export declare type TableV2Props = ExtractPropTypes<typeof tableV2Props>;
