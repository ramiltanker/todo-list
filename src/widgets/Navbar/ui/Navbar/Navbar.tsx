import { FC } from 'react';
import styles from './Navbar.module.scss';
import classNames from 'classnames';
import { NavbarItemsList } from '../../model/types/items';
import { NavbarItem } from '../NavbarItem/NavbarItem';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <header className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.container}>
        <nav className={styles.navigation}>
          <ul className={styles.list}>
            {NavbarItemsList.map((item) => {
              return (
                <li key={item.path}>
                  <NavbarItem item={item} />
                </li>
              );
            })}
          </ul>
        </nav>
        <ThemeSwitcher className={styles.theme}/>
      </div>
    </header>
  );
};

export { Navbar };
