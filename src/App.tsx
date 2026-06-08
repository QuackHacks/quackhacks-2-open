import React, { useEffect, useState } from 'react';

import MainPage from './pages/main';
import PhotosPage from './pages/photos';
import NavBar from './components/navbar';

const App: React.FC = () => {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('quackhacks:navigate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('quackhacks:navigate', handleLocationChange);
    };
  }, []);

  const page = pathname === '/photos' ? <PhotosPage /> : <MainPage />;

  return (
    <>
      <NavBar />
      {page}
    </>
  );
};

export default App;
