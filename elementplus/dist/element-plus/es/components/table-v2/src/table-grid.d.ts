import type { UnwrapRef } from 'vue';
import type { GridDefaultSlotParams, GridScrollOptions, ResetAfterIndex } from 'element-plus/es/components/virtual-list';
import type { TableV2GridProps } from './grid';
declare const TableGrid: import("vue").DefineComponent<{
    readonly columns: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./common").AnyColumn[]>, unknown, true, unknown, unknown>;
    readonly data: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<any[]>, unknown, true, unknown, unknown>;
    readonly fixedData: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<any[]>, unknown, unknown, unknown, unknown>;
    readonly estimatedRowHeight: {
        readonly default: undefined;
        readonly type: import("vue").PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __elPropsReservedKey: true;
    };
    readonly width: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly height: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly headerWidth: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly headerHeight: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<number | number[]>, 50, unknown, unknown, unknown>;
    readonly bodyWidth: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly rowHeight: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly cache: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 2, false, never, never>;
    readonly useIsScrolling: BooleanConstructor;
    readonly scrollbarAlwaysOn: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly scrollbarStartGap: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly scrollbarEndGap: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 2, unknown, unknown, unknown>;
    readonly class: StringConstructor;
    readonly style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").CSSProperties>, unknown, unknown, unknown, unknown>;
    readonly containerStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").CSSProperties>, unknown, unknown, unknown, unknown>;
    readonly getRowHeight: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus/es/components/virtual-list").ItemSize>, unknown, true, unknown, unknown>;
    readonly rowKey: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./types").KeyType>, "id", unknown, unknown, unknown>;
    readonly onRowsRendered: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(params: import("./grid").onRowRenderedParams) => void>, unknown, unknown, unknown, unknown>;
    readonly onScroll: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(...args: any[]) => void>, unknown, unknown, unknown, unknown>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly columns: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./common").AnyColumn[]>, unknown, true, unknown, unknown>;
    readonly data: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<any[]>, unknown, true, unknown, unknown>;
    readonly fixedData: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<any[]>, unknown, unknown, unknown, unknown>;
    readonly estimatedRowHeight: {
        readonly default: undefined;
        readonly type: import("vue").PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __elPropsReservedKey: true;
    };
    readonly width: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly height: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly headerWidth: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly headerHeight: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<number | number[]>, 50, unknown, unknown, unknown>;
    readonly bodyWidth: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly rowHeight: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly cache: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 2, false, never, never>;
    readonly useIsScrolling: BooleanConstructor;
    readonly scrollbarAlwaysOn: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly scrollbarStartGap: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly scrollbarEndGap: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 2, unknown, unknown, unknown>;
    readonly class: StringConstructor;
    readonly style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").CSSProperties>, unknown, unknown, unknown, unknown>;
    readonly containerStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").CSSProperties>, unknown, unknown, unknown, unknown>;
    readonly getRowHeight: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus/es/components/virtual-list").ItemSize>, unknown, true, unknown, unknown>;
    readonly rowKey: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./types").KeyType>, "id", unknown, unknown, unknown>;
    readonly onRowsRendered: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(params: import("./grid").onRowRenderedParams) => void>, unknown, unknown, unknown, unknown>;
    readonly onScroll: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(...args: any[]) => void>, unknown, unknown, unknown, unknown>;
}>>, {
    onScroll: (...args: any[]) => void;
    style: import("vue").CSSProperties;
    containerStyle: import("vue").CSSProperties;
    scrollbarAlwaysOn: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    rowKey: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("./types").KeyType>, unknown, unknown>;
    useIsScrolling: boolean;
    cache: number;
    estimatedRowHeight: number;
    scrollbarStartGap: number;
    scrollbarEndGap: number;
    headerHeight: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<number | number[]>, unknown, unknown>;
    onRowsRendered: (params: import("./grid").onRowRenderedParams) => void;
    fixedData: any[];
}>;
export default TableGrid;
export declare type TableGridRowSlotParams = {
    columns: TableV2GridProps['columns'];
    rowData: any;
} & GridDefaultSlotParams;
export declare type TableGridInstance = InstanceType<typeof TableGrid> & UnwrapRef<{
    forceUpdate: () => void;
    /**
     * @description fetch total height
     */
    totalHeight: number;
    /**
     * @description scrollTo a position
     * @param { number | ScrollToOptions } arg1
     * @param { number } arg2
     */
    scrollTo(leftOrOptions: number | GridScrollOptions, top?: number): void;
    /**
     * @description scroll vertically to position y
     */
    scrollToTop(scrollTop: number): void;
    /**
     * @description reset rendered state after row index
     * @param { number } rowIndex
     * @param { boolean } forceUpdate
     */
    resetAfterRowIndex: ResetAfterIndex;
}>;
