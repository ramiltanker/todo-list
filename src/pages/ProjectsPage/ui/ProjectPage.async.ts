import { lazy } from 'react';

const ProfilePageAsync = lazy(async () => await import('./ProjectsPage'));

export { ProfilePageAsync as ProjectsPage };
