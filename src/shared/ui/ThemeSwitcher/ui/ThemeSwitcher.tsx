import { FC, memo } from 'react';
import { ReactComponent as LightIcon } from '../../../assets/icons/light-theme-icon.svg';
import { ReactComponent as DarkIcon } from '../../../assets/icons/dark-theme-icon.svg';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { useTheme } from 'app/providers/ThemeProvider';
import { Button, ButtonTheme } from '../../Button/Button';
import styles from './ThemeSwitcher.module.scss';
import classNames from 'classnames';
import { Icon, IconThemes } from 'shared/ui/Icon/Icon';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = memo(({ className = '' }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button theme={ButtonTheme.CLEAR} onClick={toggleTheme} className={classNames(styles.button, {}, [className])}>
      {theme === Theme.DARK ? (
        <Icon SVG={DarkIcon} className={styles.dark} theme={IconThemes.INVERTED_PRIMARY_COLOR} />
      ) : (
        <Icon SVG={LightIcon} className={styles.light} theme={IconThemes.INVERTED_PRIMARY_COLOR} />
      )}
    </Button>
  );
});

export { ThemeSwitcher };
