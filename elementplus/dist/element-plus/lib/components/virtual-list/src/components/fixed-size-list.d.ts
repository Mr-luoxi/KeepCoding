declare const FixedSizeList: import("vue").DefineComponent<{
    readonly className: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly containerElement: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | Element>, "div", unknown, unknown, unknown>;
    readonly data: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<any[]>, () => [], unknown, unknown, unknown>;
    readonly direction: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "ltr", false, "ltr" | "rtl", never>;
    readonly height: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], unknown, true, unknown, unknown>;
    readonly innerElement: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, ObjectConstructor], "div", unknown, unknown, unknown>;
    readonly style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
    readonly useIsScrolling: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly width: import("element-plus/es/utils").BuildPropReturn<readonly [NumberConstructor, StringConstructor], unknown, false, unknown, unknown>;
    readonly perfMode: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly scrollbarAlwaysOn: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly cache: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 2, false, never, never>;
    readonly estimatedItemSize: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, never, false, never, never>;
    readonly layout: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "vertical", false, "horizontal" | "vertical", never>;
    readonly initScrollOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, false, never, never>;
    readonly total: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, never, true, never, never>;
    readonly itemSize: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<number | import("../types").ItemSize>, never, true, never, never>;
}, {
    ns: {
        namespace: import("vue").ComputedRef<string>;
        b: (blockSuffix?: string) => string;
        e: (element?: string | undefined) => string;
        m: (modifier?: string | undefined) => string;
        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
        em: (element?: string | undefined, modifier?: string | undefined) => string;
        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
        is: {
            (name: string, state: boolean | undefined): string;
            (name: string): string;
        };
        cssVar: (object: Record<string, string>) => Record<string, string>;
        cssVarName: (name: string) => string;
        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
        cssVarBlockName: (name: string) => string;
    };
    clientSize: import("vue").ComputedRef<string | number | undefined>;
    estimatedTotalSize: import("vue").ComputedRef<number>;
    windowStyle: import("vue").ComputedRef<(string | import("vue").CSSProperties | import("vue").StyleValue[] | {
        [x: string]: string;
        position: string;
        WebkitOverflowScrolling: string;
        willChange: string;
    } | undefined)[]>;
    windowRef: import("vue").Ref<HTMLElement | undefined>;
    innerRef: import("vue").Ref<HTMLElement | undefined>;
    innerStyle: import("vue").ComputedRef<{
        height: string;
        pointerEvents: string | undefined;
        width: string;
    }>;
    itemsToRender: import("vue").ComputedRef<number[]>;
    scrollbarRef: import("vue").Ref<any>;
    states: import("vue").Ref<{
        isScrolling: boolean;
        scrollDir: string;
        scrollOffset: number;
        updateRequested: boolean;
        isScrollbarDragging: boolean;
        scrollbarAlwaysOn: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    }>;
    getItemStyle: (idx: number) => import("vue").CSSProperties;
    onScroll: (e: Event) => void;
    onScrollbarScroll: (distanceToGo: number, totalSteps: number) => void;
    onWheel: (e: WheelEvent) => void;
    scrollTo: (offset: number) => void;
    scrollToItem: (idx: number, alignment?: import("../types").Alignment) => void;
    resetScrollTop: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("scroll" | "itemRendered")[], "scroll" | "itemRendered", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly className: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly containerElement: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | Element>, "div", unknown, unknown, unknown>;
    readonly data: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<any[]>, () => [], unknown, unknown, unknown>;
    readonly direction: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "ltr", false, "ltr" | "rtl", never>;
    readonly height: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], unknown, true, unknown, unknown>;
    readonly innerElement: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, ObjectConstructor], "div", unknown, unknown, unknown>;
    readonly style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
    readonly useIsScrolling: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly width: import("element-plus/es/utils").BuildPropReturn<readonly [NumberConstructor, StringConstructor], unknown, false, unknown, unknown>;
    readonly perfMode: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly scrollbarAlwaysOn: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly cache: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 2, false, never, never>;
    readonly estimatedItemSize: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, never, false, never, never>;
    readonly layout: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "vertical", false, "horizontal" | "vertical", never>;
    readonly initScrollOffset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, false, never, never>;
    readonly total: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, never, true, never, never>;
    readonly itemSize: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<number | import("../types").ItemSize>, never, true, never, never>;
}>> & {
    onScroll?: ((...args: any[]) => any) | undefined;
    onItemRendered?: ((...args: any[]) => any) | undefined;
}, {
    data: any[];
    width: import("element-plus/es/utils").BuildPropType<readonly [NumberConstructor, StringConstructor], unknown, unknown>;
    style: import("vue").StyleValue;
    className: string;
    direction: import("element-plus/es/utils").BuildPropType<StringConstructor, "ltr" | "rtl", never>;
    layout: import("element-plus/es/utils").BuildPropType<StringConstructor, "horizontal" | "vertical", never>;
    scrollbarAlwaysOn: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    perfMode: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    containerElement: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | Element>, unknown, unknown>;
    innerElement: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, ObjectConstructor], unknown, unknown>;
    useIsScrolling: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    cache: number;
    estimatedItemSize: number;
    initScrollOffset: number;
}>;
export default FixedSizeList;
