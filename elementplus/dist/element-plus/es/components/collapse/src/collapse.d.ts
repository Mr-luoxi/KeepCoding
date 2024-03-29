import type { ExtractPropTypes } from 'vue';
import type Collapse from './collapse.vue';
import type { Arrayable } from 'element-plus/es/utils';
export declare type CollapseActiveName = string | number;
export declare type CollapseModelValue = Arrayable<CollapseActiveName>;
export declare const emitChangeFn: (value: CollapseModelValue) => "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
export declare const collapseProps: {
    readonly accordion: BooleanConstructor;
    readonly modelValue: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<CollapseModelValue>, () => [], unknown, unknown, unknown>;
};
export declare type CollapseProps = ExtractPropTypes<typeof collapseProps>;
export declare const collapseEmits: {
    "update:modelValue": (value: CollapseModelValue) => "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
    change: (value: CollapseModelValue) => "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
};
export declare type CollapseEmits = typeof collapseEmits;
export declare type CollapseInstance = InstanceType<typeof Collapse>;
