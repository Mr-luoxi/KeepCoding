import type { MaybeRef } from '@vueuse/core';
import type { App, Ref } from 'vue';
import type { ConfigProviderContext } from 'element-plus/es/tokens';
export declare function useGlobalConfig<K extends keyof ConfigProviderContext, D extends ConfigProviderContext[K]>(key: K, defaultValue?: D): Ref<Exclude<ConfigProviderContext[K], undefined> | D>;
export declare function useGlobalConfig(): Ref<ConfigProviderContext>;
export declare const provideGlobalConfig: (config: MaybeRef<ConfigProviderContext>, app?: App<any> | undefined, global?: boolean) => import("vue").ComputedRef<Partial<import("vue").ExtractPropTypes<{
    readonly a11y: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly locale: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("../../locale").Language>, unknown, unknown, unknown, unknown>;
    readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, "" | "default" | "small" | "large", unknown>;
    readonly button: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("../..").ButtonConfigContext>, unknown, unknown, unknown, unknown>;
    readonly experimentalFeatures: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus/es/tokens").ExperimentalFeatures>, unknown, unknown, unknown, unknown>;
    readonly keyboardNavigation: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly message: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("../..").MessageConfigContext>, unknown, unknown, unknown, unknown>;
    readonly zIndex: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, unknown, unknown, unknown>;
    readonly namespace: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el", unknown, unknown, unknown>;
}>>> | undefined;
