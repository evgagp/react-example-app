import { ITodoState } from '../types';

export const todosSelectAll = (state: ITodoState) => state.list;

export const todosSelectById = (previousState: ITodoState, id: number) =>
  previousState.list.find(item => item.id === id);

export const todosSelectStatus = (previousState: ITodoState) => ({
  status: previousState.status,
  error: previousState.error,
});
