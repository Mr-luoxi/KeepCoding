declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltipClass: {
        type: StringConstructor;
        default: string;
    };
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
    button: import("vue").Ref<any>;
    tooltip: import("vue").Ref<any>;
    tooltipVisible: import("vue").Ref<boolean>;
    showTooltip: import("vue").ComputedRef<boolean>;
    wrapperStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    formatValue: import("vue").ComputedRef<string | number>;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
    onButtonDown: (event: MouseEvent | TouchEvent) => void;
    onKeyDown: (event: KeyboardEvent) => void;
    setPosition: (newPosition: number) => Promise<void>;
    hovering: import("vue").Ref<boolean>;
    dragging: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltipClass: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: number;
    vertical: boolean;
    tooltipClass: string;
}>;
export default _default;
