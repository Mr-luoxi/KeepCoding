import type { Ref } from 'vue';
import type { TableV2Props } from '../table';
import type { TableGridInstance } from '../table-grid';
export declare type ScrollPos = {
    scrollLeft: number;
    scrollTop: number;
};
declare type GridInstanceRef = Ref<TableGridInstance | undefined>;
declare type UseScrollBarProps = {
    mainTableRef: GridInstanceRef;
    leftTableRef: GridInstanceRef;
    rightTableRef: GridInstanceRef;
    onMaybeEndReached: () => void;
};
export declare const useScrollbar: (props: TableV2Props, { mainTableRef, leftTableRef, rightTableRef, onMaybeEndReached, }: UseScrollBarProps) => {
    scrollPos: Ref<{
        scrollLeft: number;
        scrollTop: number;
    }>;
    scrollTo: (params: ScrollPos) => void;
    scrollToLeft: (scrollLeft: number) => void;
    scrollToTop: (scrollTop: number) => void;
    onScroll: (params: ScrollPos) => void;
    onVerticalScroll: ({ scrollTop }: ScrollPos) => void;
};
export {};
