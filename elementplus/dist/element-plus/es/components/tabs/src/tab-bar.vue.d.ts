import type { CSSProperties } from 'vue';
declare const _default: import("vue").DefineComponent<{
    readonly tabs: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<{
        uid: number;
        slots: {
            [x: string]: import("vue").Slot | undefined;
        };
        props: {
            readonly disabled: boolean;
            readonly name: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly label: string;
            readonly closable: boolean;
            readonly lazy: boolean;
        };
        paneName: string | number | undefined;
        active: boolean;
        index: string | undefined;
        isClosable: boolean;
    }[]>, () => [], unknown, unknown, unknown>;
}, {
    COMPONENT_NAME: string;
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        readonly tabs: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<{
            uid: number;
            slots: {
                [x: string]: import("vue").Slot | undefined;
            };
            props: {
                readonly disabled: boolean;
                readonly name: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly label: string;
                readonly closable: boolean;
                readonly lazy: boolean;
            };
            paneName: string | number | undefined;
            active: boolean;
            index: string | undefined;
            isClosable: boolean;
        }[]>, () => [], unknown, unknown, unknown>;
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
    }>>;
    instance: import("vue").ComponentInternalInstance;
    rootTabs: import("element-plus/es/tokens").TabsRootContext;
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
    barRef: import("vue").Ref<HTMLDivElement | undefined>;
    barStyle: import("vue").Ref<CSSProperties | undefined>;
    getBarStyle: () => CSSProperties;
    update: () => CSSProperties;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly tabs: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<{
        uid: number;
        slots: {
            [x: string]: import("vue").Slot | undefined;
        };
        props: {
            readonly disabled: boolean;
            readonly name: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly label: string;
            readonly closable: boolean;
            readonly lazy: boolean;
        };
        paneName: string | number | undefined;
        active: boolean;
        index: string | undefined;
        isClosable: boolean;
    }[]>, () => [], unknown, unknown, unknown>;
}>>, {
    tabs: {
        uid: number;
        slots: {
            [x: string]: import("vue").Slot | undefined;
        };
        props: {
            readonly disabled: boolean;
            readonly name: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly label: string;
            readonly closable: boolean;
            readonly lazy: boolean;
        };
        paneName: string | number | undefined;
        active: boolean;
        index: string | undefined;
        isClosable: boolean;
    }[];
}>;
export default _default;
