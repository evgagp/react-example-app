import { Footer } from '@/widgets/footer';
import { Navbar } from '@/widgets/navbar';
import { Suspense } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

export const UserLayout = () => {
  return (
    <SkeletonTheme enableAnimation={true}>
      <div className="user-layout">
        <Navbar />

        <main className="main">
          <Suspense fallback={'Loading...'}>
            <Outlet />
          </Suspense>
        </main>

        <Footer />

        <ToastContainer limit={3} newestOnTop={true} theme="colored" />
      </div>
    </SkeletonTheme>
  );
};

export default UserLayout;
