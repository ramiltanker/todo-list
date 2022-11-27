import { FC } from 'react';
import styles from './ProjectsPage.module.scss';
import classNames from 'classnames';

interface ProjectsPageProps {
  className?: string;
}

const ProjectsPage: FC<ProjectsPageProps> = ({ className }) => {
  return <div className={classNames(styles.projectsPage, {}, [className])}></div>;
};

export default ProjectsPage;
