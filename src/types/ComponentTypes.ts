import type { FunctionalComponent, HTMLAttributes, VNodeProps } from 'vue';

export interface PillButtonType {
  content?: string | number;
  type?: string;
}

export interface NavigationItem {
  name: string;
  routeName: string;
  icon: FunctionalComponent<HTMLAttributes & VNodeProps>;
}
