import type { ExtractPropTypes } from 'vue';
export declare type ColSizeObject = {
    span?: number;
    offset?: number;
    pull?: number;
    push?: number;
};
export declare type ColSize = number | ColSizeObject;
export declare const colProps: {
    readonly tag: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "div", unknown, unknown, unknown>;
    readonly span: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 24, unknown, unknown, unknown>;
    readonly offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly pull: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly push: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly xs: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<ColSize>, () => import("element-plus/es/utils").Mutable<{}>, unknown, unknown, unknown>;
    readonly sm: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<ColSize>, () => import("element-plus/es/utils").Mutable<{}>, unknown, unknown, unknown>;
    readonly md: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<ColSize>, () => import("element-plus/es/utils").Mutable<{}>, unknown, unknown, unknown>;
    readonly lg: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<ColSize>, () => import("element-plus/es/utils").Mutable<{}>, unknown, unknown, unknown>;
    readonly xl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<ColSize>, () => import("element-plus/es/utils").Mutable<{}>, unknown, unknown, unknown>;
};
export declare type ColProps = ExtractPropTypes<typeof colProps>;
declare const _default: import("vue").DefineComponent<{
    readonly tag: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "div", unknown, unknown, unknown>;
    readonly span: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 24, unknown, unknown, unknown>;
    readonly offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly pull: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly push: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly xs: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<ColSize>, () => import("element-plus/es/utils").Mutable<{}>, unknown, unknown, unknown>;
    readonly sm: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<ColSize>, () => import("element-plus/es/utils").Mutable<{}>, unknown, unknown, unknown>;
    readonly md: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<ColSize>, () => import("element-plus/es/utils").Mutable<{}>, unknown, unknown, unknown>;
    readonly lg: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<ColSize>, () => import("element-plus/es/utils").Mutable<{}>, unknown, unknown, unknown>;
    readonly xl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<ColSize>, () => import("element-plus/es/utils").Mutable<{}>, unknown, unknown, unknown>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly tag: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "div", unknown, unknown, unknown>;
    readonly span: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 24, unknown, unknown, unknown>;
    readonly offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly pull: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly push: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly xs: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<ColSize>, () => import("element-plus/es/utils").Mutable<{}>, unknown, unknown, unknown>;
    readonly sm: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<ColSize>, () => import("element-plus/es/utils").Mutable<{}>, unknown, unknown, unknown>;
    readonly md: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<ColSize>, () => import("element-plus/es/utils").Mutable<{}>, unknown, unknown, unknown>;
    readonly lg: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<ColSize>, () => import("element-plus/es/utils").Mutable<{}>, unknown, unknown, unknown>;
    readonly xl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<ColSize>, () => import("element-plus/es/utils").Mutable<{}>, unknown, unknown, unknown>;
}>>, {
    push: number;
    offset: number;
    tag: string;
    span: number;
    pull: number;
    xs: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<ColSize>, unknown, unknown>;
    sm: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<ColSize>, unknown, unknown>;
    md: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<ColSize>, unknown, unknown>;
    lg: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<ColSize>, unknown, unknown>;
    xl: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<ColSize>, unknown, unknown>;
}>;
export default _default;
