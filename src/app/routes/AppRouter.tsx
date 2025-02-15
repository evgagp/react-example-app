import clsx from 'clsx';
import { useTheme } from '@/entities/theme';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { userRoutes } from './userRoutes';

export const AppRouter = () => {
  const { theme } = useTheme();
  const router = createBrowserRouter(userRoutes);

  return (
    <div className={clsx('app', theme)}>
      <RouterProvider router={router} />
    </div>
  );
};
