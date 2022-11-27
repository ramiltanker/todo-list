import { memo } from 'react';
import styles from './NavbarItem.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { NavbarItemType } from '../../model/types/items';
import classNames from 'classnames';

interface NavbarItemProps {
  item: NavbarItemType;
}

const NavbarItem = memo(({ item }: NavbarItemProps) => {
  return (
    <AppLink to={item.path} className={classNames(styles.item)} theme={AppLinkTheme.PRIMARY_INVERTED}>
      <span className={styles.link}>{item.text}</span>
    </AppLink>
  );
});

export { NavbarItem };
