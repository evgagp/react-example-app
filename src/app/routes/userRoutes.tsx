import { RootPage } from '@/pages/root';
import { UserLayout } from '../layouts';
import { TodosListPage } from '@/pages/todos-list';
import { route } from './model/route';

export const userRoutes = [
  {
    element: <UserLayout />,
    children: [route('/', <RootPage />), route('/todos', <TodosListPage />)],
  },
];
