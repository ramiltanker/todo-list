import { FC, memo } from 'react';
import styles from './Icon.module.scss';
import classNames from 'classnames';

export enum IconThemes {
  PRIMARY_COLOR = 'primary',
  INVERTED_PRIMARY_COLOR = 'inverted'
}

interface IconProps {
  className?: string;
  SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  theme?: IconThemes;
}

const Icon = memo(({ className, SVG, theme = IconThemes.PRIMARY_COLOR }: IconProps) => {
  return <SVG className={classNames(styles.icon, {}, [styles[theme], className])} />;
});

export { Icon };
