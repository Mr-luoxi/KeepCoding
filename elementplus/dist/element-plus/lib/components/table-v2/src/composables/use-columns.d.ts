import type { CSSProperties, Ref } from 'vue';
import type { TableV2Props } from '../table';
import type { AnyColumns, Column, KeyType } from '../types';
declare function useColumns(props: TableV2Props, columns: Ref<AnyColumns>, fixed: Ref<boolean>): {
    columns: Ref<AnyColumns>;
    columnsStyles: import("vue").ComputedRef<Record<KeyType, CSSProperties>>;
    columnsTotalWidth: import("vue").ComputedRef<number>;
    fixedColumnsOnLeft: import("vue").ComputedRef<Column<any>[]>;
    fixedColumnsOnRight: import("vue").ComputedRef<Column<any>[]>;
    hasFixedColumns: import("vue").ComputedRef<number>;
    mainColumns: import("vue").ComputedRef<AnyColumns>;
    normalColumns: import("vue").ComputedRef<Column<any>[]>;
    visibleColumns: import("vue").ComputedRef<Column<any>[]>;
    getColumn: (key: KeyType) => Column<any> | undefined;
    getColumnStyle: (key: KeyType) => CSSProperties;
    updateColumnWidth: (column: Column<any>, width: number) => void;
    onColumnSorted: (e: MouseEvent) => void;
};
export { useColumns };
export declare type UseColumnsReturn = ReturnType<typeof useColumns>;
