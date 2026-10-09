import type { ComponentType, SVGProps } from 'react';


export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;


export interface NavItem {
  id: string;
  label: string;
  icon: IconComponent;
}


export interface User {
  fullName: string;
  status: string;
}


export type ValueIconName = 'male';


export interface ProfileField {
  label: string;
  value: string;
  unit?: string; // optional, e.g. "EUR"
  icon?: ValueIconName; // optional icon in front of the value
}


export type FieldGroup = ProfileField[];


export interface ProfileSection {
  id: string;
  title: string;
  groups: FieldGroup[];
}

/** One column of the page holds one or more sections. */
export type ProfileColumn = ProfileSection[];
