import { RootPage } from '@/pages/root';
import { UserLayout } from '@/app/layouts';
import { TodosListPage } from '@/pages/todos-list';
import { route } from './model/route';

export const userRoutes = [
  {
    element: <UserLayout />,
    children: [route('/', <RootPage />), route('/todos', <TodosListPage />)],
  },
];
