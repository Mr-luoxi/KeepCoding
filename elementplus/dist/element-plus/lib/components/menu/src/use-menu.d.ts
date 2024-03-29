import type { CSSProperties, ComponentInternalInstance, Ref } from 'vue';
export default function useMenu(instance: ComponentInternalInstance, currentIndex: Ref<string>): {
    parentMenu: import("vue").ComputedRef<ComponentInternalInstance>;
    paddingStyle: import("vue").ComputedRef<CSSProperties>;
    indexPath: import("vue").ComputedRef<string[]>;
};
