import installer from './defaults';
export * from 'element-plus/es/components';
export * from 'element-plus/es/constants';
export * from 'element-plus/es/directives';
export * from 'element-plus/es/hooks';
export * from 'element-plus/es/tokens';
export { makeInstaller } from './make-installer';
export declare const install: (app: import("vue").App<any>, options?: Partial<import("vue").ExtractPropTypes<{
    readonly a11y: import("./utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly locale: import("./utils").BuildPropReturn<import("./utils").PropWrapper<import("./locale").Language>, unknown, unknown, unknown, unknown>;
    readonly size: import("./utils").BuildPropReturn<StringConstructor, "", unknown, "" | "default" | "small" | "large", unknown>;
    readonly button: import("./utils").BuildPropReturn<import("./utils").PropWrapper<import("element-plus/es/components").ButtonConfigContext>, unknown, unknown, unknown, unknown>;
    readonly experimentalFeatures: import("./utils").BuildPropReturn<import("./utils").PropWrapper<import("element-plus/es/tokens").ExperimentalFeatures>, unknown, unknown, unknown, unknown>;
    readonly keyboardNavigation: import("./utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly message: import("./utils").BuildPropReturn<import("./utils").PropWrapper<import("element-plus/es/components").MessageConfigContext>, unknown, unknown, unknown, unknown>;
    readonly zIndex: import("./utils").BuildPropReturn<NumberConstructor, unknown, unknown, unknown, unknown>;
    readonly namespace: import("./utils").BuildPropReturn<StringConstructor, "el", unknown, unknown, unknown>;
}>> | undefined) => void;
export declare const version: string;
export default installer;
export { default as dayjs } from 'dayjs';
