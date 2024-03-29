import type { Ref } from 'vue';
import type { TableV2Props } from '../table';
import type { RowExpandParams, RowHeightChangedParams, RowHoverParams } from '../row';
import type { FixedDirection, KeyType } from '../types';
import type { onRowRenderedParams } from '../grid';
import type { TableGridInstance } from '../table-grid';
declare type GridInstanceRef = Ref<TableGridInstance | undefined>;
declare type UseRowProps = {
    mainTableRef: GridInstanceRef;
    leftTableRef: GridInstanceRef;
    rightTableRef: GridInstanceRef;
    onMaybeEndReached: () => void;
};
export declare const useRow: (props: TableV2Props, { mainTableRef, leftTableRef, rightTableRef, onMaybeEndReached }: UseRowProps) => {
    hoveringRowKey: import("vue").ShallowRef<KeyType | null>;
    expandedRowKeys: Ref<KeyType[]>;
    lastRenderedRowIndex: Ref<number>;
    isDynamic: import("vue").ComputedRef<boolean>;
    isResetting: import("vue").ShallowRef<boolean>;
    rowHeights: Ref<{
        [x: string]: number;
        [x: number]: number;
        [x: symbol]: number;
    }>;
    resetAfterIndex: (index: number, forceUpdate?: boolean) => void;
    onRowExpanded: ({ expanded, rowData, rowIndex, rowKey, }: RowExpandParams<any>) => void;
    onRowHovered: ({ hovered, rowKey }: RowHoverParams<any>) => void;
    onRowsRendered: (params: onRowRenderedParams) => void;
    onRowHeightChange: ({ rowKey, height, rowIndex }: RowHeightChangedParams, fixedDir: FixedDirection) => void;
};
export declare type UseRowReturn = ReturnType<typeof useRow>;
export {};
