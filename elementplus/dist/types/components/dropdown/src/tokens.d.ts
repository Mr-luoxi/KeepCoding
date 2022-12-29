import type { InjectionKey, Ref } from 'vue';
export declare type ElDropdownInjectionContext = {
    contentRef: Ref<HTMLElement | null>;
    isUsingKeyboard: Ref<boolean>;
    onItemLeave: (e: PointerEvent) => void;
    onItemEnter: (e: PointerEvent) => void;
};
export declare const DROPDOWN_INJECTION_KEY: InjectionKey<ElDropdownInjectionContext>;
