import type { ExtractPropTypes } from 'vue';
import type { ExperimentalFeatures } from 'element-plus/es/tokens';
import type { Language } from 'element-plus/es/locale';
import type { ButtonConfigContext } from 'element-plus/es/components/button';
import type { MessageConfigContext } from 'element-plus/es/components/message';
export declare const messageConfig: MessageConfigContext;
export declare const configProviderProps: {
    readonly a11y: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly locale: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Language>, unknown, unknown, unknown, unknown>;
    readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, "" | "default" | "small" | "large", unknown>;
    readonly button: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<ButtonConfigContext>, unknown, unknown, unknown, unknown>;
    readonly experimentalFeatures: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<ExperimentalFeatures>, unknown, unknown, unknown, unknown>;
    readonly keyboardNavigation: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly message: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<MessageConfigContext>, unknown, unknown, unknown, unknown>;
    readonly zIndex: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, unknown, unknown, unknown>;
    readonly namespace: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el", unknown, unknown, unknown>;
};
declare const _default: import("vue").DefineComponent<{
    readonly a11y: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly locale: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Language>, unknown, unknown, unknown, unknown>;
    readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, "" | "default" | "small" | "large", unknown>;
    readonly button: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<ButtonConfigContext>, unknown, unknown, unknown, unknown>;
    readonly experimentalFeatures: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<ExperimentalFeatures>, unknown, unknown, unknown, unknown>;
    readonly keyboardNavigation: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly message: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<MessageConfigContext>, unknown, unknown, unknown, unknown>;
    readonly zIndex: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, unknown, unknown, unknown>;
    readonly namespace: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el", unknown, unknown, unknown>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly a11y: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly locale: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Language>, unknown, unknown, unknown, unknown>;
    readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, "" | "default" | "small" | "large", unknown>;
    readonly button: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<ButtonConfigContext>, unknown, unknown, unknown, unknown>;
    readonly experimentalFeatures: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<ExperimentalFeatures>, unknown, unknown, unknown, unknown>;
    readonly keyboardNavigation: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly message: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<MessageConfigContext>, unknown, unknown, unknown, unknown>;
    readonly zIndex: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, unknown, unknown, unknown>;
    readonly namespace: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el", unknown, unknown, unknown>;
}>>, {
    button: ButtonConfigContext;
    size: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "small" | "large", unknown>;
    a11y: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    locale: Language;
    experimentalFeatures: ExperimentalFeatures;
    keyboardNavigation: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    message: MessageConfigContext;
    zIndex: number;
    namespace: string;
}>;
export default _default;
export declare type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>;
