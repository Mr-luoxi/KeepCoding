export declare const ElResult: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
    readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly subTitle: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly icon: import("element-plus/es/utils").BuildPropReturn<unknown, "info", unknown, "success" | "warning" | "info" | "error", unknown>;
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
    resultIcon: import("vue").ComputedRef<{
        class: "icon-success" | "icon-warning" | "icon-error" | "icon-info";
        component: import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly title: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly subTitle: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly icon: import("element-plus/es/utils").BuildPropReturn<unknown, "info", unknown, "success" | "warning" | "info" | "error", unknown>;
}>>, {
    icon: import("element-plus/es/utils").BuildPropType<unknown, "success" | "warning" | "info" | "error", unknown>;
    title: string;
    subTitle: string;
}>> & Record<string, any>;
export default ElResult;
export * from './src/result';
