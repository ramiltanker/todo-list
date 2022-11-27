import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface NavbarItemType {
  path: string;
  text: string;
}

export const NavbarItemsList: NavbarItemType[] = [
  {
    path: RoutePath.projects,
    text: 'Проекты'
  }
];
