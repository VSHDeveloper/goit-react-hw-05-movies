import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import Loading from './Loading/Loading';

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
