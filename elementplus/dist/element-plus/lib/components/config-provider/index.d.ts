export declare const ElConfigProvider: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
    readonly a11y: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly locale: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("../../locale").Language>, unknown, unknown, unknown, unknown>;
    readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, "" | "default" | "small" | "large", unknown>;
    readonly button: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("..").ButtonConfigContext>, unknown, unknown, unknown, unknown>;
    readonly experimentalFeatures: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("../..").ExperimentalFeatures>, unknown, unknown, unknown, unknown>;
    readonly keyboardNavigation: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly message: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("..").MessageConfigContext>, unknown, unknown, unknown, unknown>;
    readonly zIndex: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, unknown, unknown, unknown>;
    readonly namespace: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el", unknown, unknown, unknown>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly a11y: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly locale: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("../../locale").Language>, unknown, unknown, unknown, unknown>;
    readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, "" | "default" | "small" | "large", unknown>;
    readonly button: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("..").ButtonConfigContext>, unknown, unknown, unknown, unknown>;
    readonly experimentalFeatures: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("../..").ExperimentalFeatures>, unknown, unknown, unknown, unknown>;
    readonly keyboardNavigation: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly message: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("..").MessageConfigContext>, unknown, unknown, unknown, unknown>;
    readonly zIndex: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, unknown, unknown, unknown>;
    readonly namespace: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el", unknown, unknown, unknown>;
}>>, {
    button: import("..").ButtonConfigContext;
    size: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "small" | "large", unknown>;
    a11y: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    locale: import("../../locale").Language;
    experimentalFeatures: import("../..").ExperimentalFeatures;
    keyboardNavigation: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    message: import("..").MessageConfigContext;
    zIndex: number;
    namespace: string;
}>> & Record<string, any>;
export default ElConfigProvider;
export * from './src/config-provider';
