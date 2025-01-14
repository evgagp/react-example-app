import { IUseFetchTodoProps, useFetchTodos } from './useFetchTodos';
import { useTodosActions } from './useTodosActions';
import { useTodosController } from './useTodosController';

export const useTodos = ({ autoFetch }: IUseFetchTodoProps = {}) => ({
  ...useFetchTodos({ autoFetch }),
  ...useTodosActions(),
  ...useTodosController(),
});
