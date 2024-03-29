import type { ExtractPropTypes } from 'vue';
export declare const radioButtonProps: {
    readonly name: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, never, false, "" | "default" | "small" | "large", never>;
    readonly disabled: BooleanConstructor;
    readonly label: import("element-plus/es/utils").BuildPropReturn<(BooleanConstructor | StringConstructor | NumberConstructor)[], string, unknown, unknown, unknown>;
};
export declare type RadioButtonProps = ExtractPropTypes<typeof radioButtonProps>;
