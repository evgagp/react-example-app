import clsx from 'clsx';
import { useTheme } from '@/entities/theme';
import { createBrowserRouter, RouterProvider } from 'react-router';

import { RootPage } from '@/pages/root';
import { UserLayout } from '@/app/layouts';
import { TodosListPage } from '@/pages/todos-list';

export const AppRouter = () => {
  const { theme } = useTheme();

  const userRoutes = [
    {
      element: <UserLayout />,
      children: [route('/', <RootPage />), route('/todos', <TodosListPage />)],
    },
  ];

  const router = createBrowserRouter(userRoutes);

  return (
    <div className={clsx('app', theme)}>
      <RouterProvider router={router} />
    </div>
  );
};

const route = (path: string, element: React.ReactElement) => ({
  path,
  element,
});

export default AppRouter;
