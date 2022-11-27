import { Suspense } from 'react';
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from './providers/router';

const App = () => {
  return (
    <div className="app">
      <Suspense fallback="loading">
        <Navbar />
        <AppRouter />
      </Suspense>
    </div>
  );
};

export default App;
