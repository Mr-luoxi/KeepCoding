import type { SFCWithInstall } from 'element-plus/es/utils';
declare const _Slider: SFCWithInstall<import("vue").DefineComponent<{
    modelValue: {
        type: import("vue").PropType<number | number[]>;
        default: number;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    step: {
        type: NumberConstructor;
        default: number;
    };
    showInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    showInputControls: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<"" | "default" | "small" | "large">;
        validator: (val: string) => val is "" | "default" | "small" | "large";
    };
    inputSize: {
        type: import("vue").PropType<"" | "default" | "small" | "large">;
        validator: (val: string) => val is "" | "default" | "small" | "large";
    };
    showStops: {
        type: BooleanConstructor;
        default: boolean;
    };
    showTooltip: {
        type: BooleanConstructor;
        default: boolean;
    };
    formatTooltip: {
        type: import("vue").PropType<(val: number) => string | number>;
        default: undefined;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    range: {
        type: BooleanConstructor;
        default: boolean;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    debounce: {
        type: NumberConstructor;
        default: number;
    };
    label: {
        type: StringConstructor;
        default: undefined;
    };
    rangeStartLabel: {
        type: StringConstructor;
        default: undefined;
    };
    rangeEndLabel: {
        type: StringConstructor;
        default: undefined;
    };
    formatValueText: {
        type: import("vue").PropType<(val: number) => string>;
        default: undefined;
    };
    tooltipClass: {
        type: StringConstructor;
        default: undefined;
    };
    marks: ObjectConstructor;
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
    firstValue: import("vue").Ref<number>;
    secondValue: import("vue").Ref<number>;
    oldValue: import("vue").Ref<number>;
    dragging: import("vue").Ref<boolean>;
    sliderSize: import("vue").Ref<number>;
    slider: import("vue").ShallowRef<HTMLElement | undefined>;
    groupLabel: import("vue").ComputedRef<string>;
    firstButton: import("vue").Ref<import("./src/slider.type").ISliderButton | undefined>;
    firstButtonLabel: import("vue").ComputedRef<string>;
    firstValueText: import("vue").ComputedRef<string>;
    secondButton: import("vue").Ref<import("./src/slider.type").ISliderButton | undefined>;
    secondButtonLabel: import("vue").ComputedRef<string>;
    secondValueText: import("vue").ComputedRef<string>;
    sliderDisabled: import("vue").ComputedRef<boolean>;
    runwayStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    barStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    emitChange: () => Promise<void>;
    onSliderClick: (event: MouseEvent | TouchEvent) => void;
    onSliderWrapperPrevent: (event: TouchEvent) => void;
    onSliderDown: (event: MouseEvent | TouchEvent) => Promise<void>;
    getStopStyle: (position: number) => import("vue").CSSProperties;
    setFirstValue: (firstValue: number) => void;
    setSecondValue: (secondValue: number) => void;
    stops: import("vue").ComputedRef<number[]>;
    markList: import("vue").ComputedRef<import("./src/slider.type").Mark[]>;
    sliderWrapper: import("vue").Ref<HTMLElement | undefined>;
    sliderWrapperSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
    sliderInputSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
    sliderKls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "input")[], "update:modelValue" | "change" | "input", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<number | number[]>;
        default: number;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    step: {
        type: NumberConstructor;
        default: number;
    };
    showInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    showInputControls: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<"" | "default" | "small" | "large">;
        validator: (val: string) => val is "" | "default" | "small" | "large";
    };
    inputSize: {
        type: import("vue").PropType<"" | "default" | "small" | "large">;
        validator: (val: string) => val is "" | "default" | "small" | "large";
    };
    showStops: {
        type: BooleanConstructor;
        default: boolean;
    };
    showTooltip: {
        type: BooleanConstructor;
        default: boolean;
    };
    formatTooltip: {
        type: import("vue").PropType<(val: number) => string | number>;
        default: undefined;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    range: {
        type: BooleanConstructor;
        default: boolean;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    debounce: {
        type: NumberConstructor;
        default: number;
    };
    label: {
        type: StringConstructor;
        default: undefined;
    };
    rangeStartLabel: {
        type: StringConstructor;
        default: undefined;
    };
    rangeEndLabel: {
        type: StringConstructor;
        default: undefined;
    };
    formatValueText: {
        type: import("vue").PropType<(val: number) => string>;
        default: undefined;
    };
    tooltipClass: {
        type: StringConstructor;
        default: undefined;
    };
    marks: ObjectConstructor;
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    label: string;
    modelValue: number | number[];
    height: string;
    debounce: number;
    vertical: boolean;
    range: boolean;
    max: number;
    min: number;
    step: number;
    tooltipClass: string;
    showTooltip: boolean;
    showInput: boolean;
    showInputControls: boolean;
    showStops: boolean;
    formatTooltip: (val: number) => string | number;
    rangeStartLabel: string;
    rangeEndLabel: string;
    formatValueText: (val: number) => string;
}>>;
export default _Slider;
export declare const ElSlider: SFCWithInstall<import("vue").DefineComponent<{
    modelValue: {
        type: import("vue").PropType<number | number[]>;
        default: number;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    step: {
        type: NumberConstructor;
        default: number;
    };
    showInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    showInputControls: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<"" | "default" | "small" | "large">;
        validator: (val: string) => val is "" | "default" | "small" | "large";
    };
    inputSize: {
        type: import("vue").PropType<"" | "default" | "small" | "large">;
        validator: (val: string) => val is "" | "default" | "small" | "large";
    };
    showStops: {
        type: BooleanConstructor;
        default: boolean;
    };
    showTooltip: {
        type: BooleanConstructor;
        default: boolean;
    };
    formatTooltip: {
        type: import("vue").PropType<(val: number) => string | number>;
        default: undefined;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    range: {
        type: BooleanConstructor;
        default: boolean;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    debounce: {
        type: NumberConstructor;
        default: number;
    };
    label: {
        type: StringConstructor;
        default: undefined;
    };
    rangeStartLabel: {
        type: StringConstructor;
        default: undefined;
    };
    rangeEndLabel: {
        type: StringConstructor;
        default: undefined;
    };
    formatValueText: {
        type: import("vue").PropType<(val: number) => string>;
        default: undefined;
    };
    tooltipClass: {
        type: StringConstructor;
        default: undefined;
    };
    marks: ObjectConstructor;
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
    firstValue: import("vue").Ref<number>;
    secondValue: import("vue").Ref<number>;
    oldValue: import("vue").Ref<number>;
    dragging: import("vue").Ref<boolean>;
    sliderSize: import("vue").Ref<number>;
    slider: import("vue").ShallowRef<HTMLElement | undefined>;
    groupLabel: import("vue").ComputedRef<string>;
    firstButton: import("vue").Ref<import("./src/slider.type").ISliderButton | undefined>;
    firstButtonLabel: import("vue").ComputedRef<string>;
    firstValueText: import("vue").ComputedRef<string>;
    secondButton: import("vue").Ref<import("./src/slider.type").ISliderButton | undefined>;
    secondButtonLabel: import("vue").ComputedRef<string>;
    secondValueText: import("vue").ComputedRef<string>;
    sliderDisabled: import("vue").ComputedRef<boolean>;
    runwayStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    barStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    emitChange: () => Promise<void>;
    onSliderClick: (event: MouseEvent | TouchEvent) => void;
    onSliderWrapperPrevent: (event: TouchEvent) => void;
    onSliderDown: (event: MouseEvent | TouchEvent) => Promise<void>;
    getStopStyle: (position: number) => import("vue").CSSProperties;
    setFirstValue: (firstValue: number) => void;
    setSecondValue: (secondValue: number) => void;
    stops: import("vue").ComputedRef<number[]>;
    markList: import("vue").ComputedRef<import("./src/slider.type").Mark[]>;
    sliderWrapper: import("vue").Ref<HTMLElement | undefined>;
    sliderWrapperSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
    sliderInputSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
    sliderKls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "input")[], "update:modelValue" | "change" | "input", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<number | number[]>;
        default: number;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    step: {
        type: NumberConstructor;
        default: number;
    };
    showInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    showInputControls: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<"" | "default" | "small" | "large">;
        validator: (val: string) => val is "" | "default" | "small" | "large";
    };
    inputSize: {
        type: import("vue").PropType<"" | "default" | "small" | "large">;
        validator: (val: string) => val is "" | "default" | "small" | "large";
    };
    showStops: {
        type: BooleanConstructor;
        default: boolean;
    };
    showTooltip: {
        type: BooleanConstructor;
        default: boolean;
    };
    formatTooltip: {
        type: import("vue").PropType<(val: number) => string | number>;
        default: undefined;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    range: {
        type: BooleanConstructor;
        default: boolean;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    debounce: {
        type: NumberConstructor;
        default: number;
    };
    label: {
        type: StringConstructor;
        default: undefined;
    };
    rangeStartLabel: {
        type: StringConstructor;
        default: undefined;
    };
    rangeEndLabel: {
        type: StringConstructor;
        default: undefined;
    };
    formatValueText: {
        type: import("vue").PropType<(val: number) => string>;
        default: undefined;
    };
    tooltipClass: {
        type: StringConstructor;
        default: undefined;
    };
    marks: ObjectConstructor;
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    label: string;
    modelValue: number | number[];
    height: string;
    debounce: number;
    vertical: boolean;
    range: boolean;
    max: number;
    min: number;
    step: number;
    tooltipClass: string;
    showTooltip: boolean;
    showInput: boolean;
    showInputControls: boolean;
    showStops: boolean;
    formatTooltip: (val: number) => string | number;
    rangeStartLabel: string;
    rangeEndLabel: string;
    formatValueText: (val: number) => string;
}>>;
export * from './src/slider.type';
