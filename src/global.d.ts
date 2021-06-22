declare interface RoleModel {
  id: number;
  name: string;
  roleCode: string;
  description: string;
  [propName: string]: any
}

declare interface MenuModel{
  id: string;
  parentPath: string;
  path: string;
  name: string;
  redirect?: string;
  badge?: string | number;
  badgeNum?: number;
  cacheable?: boolean;
  hidden?: boolean;
  icon?: string;
  affix?: boolean
}