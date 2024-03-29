declare const _default: import("vue").DefineComponent<{
    readonly closable: BooleanConstructor;
    readonly type: import("../../../utils").BuildPropReturn<StringConstructor, "", unknown, "" | "success" | "warning" | "info" | "danger", unknown>;
    readonly hit: BooleanConstructor;
    readonly disableTransitions: BooleanConstructor;
    readonly color: import("../../../utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly size: import("../../../utils").BuildPropReturn<StringConstructor, "", unknown, "" | "default" | "small" | "large", unknown>;
    readonly effect: import("../../../utils").BuildPropReturn<StringConstructor, "light", unknown, "plain" | "dark" | "light", unknown>;
    readonly round: BooleanConstructor;
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        readonly closable: BooleanConstructor;
        readonly type: import("../../../utils").BuildPropReturn<StringConstructor, "", unknown, "" | "success" | "warning" | "info" | "danger", unknown>;
        readonly hit: BooleanConstructor;
        readonly disableTransitions: BooleanConstructor;
        readonly color: import("../../../utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly size: import("../../../utils").BuildPropReturn<StringConstructor, "", unknown, "" | "default" | "small" | "large", unknown>;
        readonly effect: import("../../../utils").BuildPropReturn<StringConstructor, "light", unknown, "plain" | "dark" | "light", unknown>;
        readonly round: BooleanConstructor;
    }>> & {
        onClose?: ((evt: MouseEvent) => any) | undefined;
        onClick?: ((evt: MouseEvent) => any) | undefined;
    }>>;
    emit: ((event: "click", evt: MouseEvent) => void) & ((event: "close", evt: MouseEvent) => void);
    tagSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
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
    classes: import("vue").ComputedRef<string[]>;
    handleClose: (event: MouseEvent) => void;
    handleClick: (event: MouseEvent) => void;
    ElIcon: import("../../../utils").SFCWithInstall<import("vue").DefineComponent<{
        readonly size: import("../../../utils").BuildPropReturn<import("../../../utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
        readonly color: import("../../../utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
    }, {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly size: import("../../../utils").BuildPropReturn<import("../../../utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
            readonly color: import("../../../utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
        }>> & {
            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        }>>;
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
        style: import("vue").ComputedRef<import("vue").CSSProperties>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly size: import("../../../utils").BuildPropReturn<import("../../../utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
        readonly color: import("../../../utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
    }>>, {
        size: import("../../../utils").BuildPropType<import("../../../utils").PropWrapper<string | number>, unknown, unknown>;
        color: string;
    }>> & Record<string, any>;
    Close: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: (evt: MouseEvent) => boolean;
    click: (evt: MouseEvent) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly closable: BooleanConstructor;
    readonly type: import("../../../utils").BuildPropReturn<StringConstructor, "", unknown, "" | "success" | "warning" | "info" | "danger", unknown>;
    readonly hit: BooleanConstructor;
    readonly disableTransitions: BooleanConstructor;
    readonly color: import("../../../utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly size: import("../../../utils").BuildPropReturn<StringConstructor, "", unknown, "" | "default" | "small" | "large", unknown>;
    readonly effect: import("../../../utils").BuildPropReturn<StringConstructor, "light", unknown, "plain" | "dark" | "light", unknown>;
    readonly round: BooleanConstructor;
}>> & {
    onClose?: ((evt: MouseEvent) => any) | undefined;
    onClick?: ((evt: MouseEvent) => any) | undefined;
}, {
    type: import("../../../utils").BuildPropType<StringConstructor, "" | "success" | "warning" | "info" | "danger", unknown>;
    size: import("../../../utils").BuildPropType<StringConstructor, "" | "default" | "small" | "large", unknown>;
    round: boolean;
    color: string;
    closable: boolean;
    effect: import("../../../utils").BuildPropType<StringConstructor, "plain" | "dark" | "light", unknown>;
    hit: boolean;
    disableTransitions: boolean;
}>;
export default _default;
