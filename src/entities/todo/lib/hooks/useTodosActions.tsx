import { useCallback } from 'react';
import {
  todosAdded,
  todosCompletedById,
  todosRemovedAll,
  todosRemovedById,
  todosRemovedLast,
  todosSelectAll,
} from '../../model/slice';
import { useAppDispatch, useAppSelector } from '@/shared/store';

interface INewTodos {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export const useTodosActions = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(todosSelectAll);
  const isTodosEmpty: boolean = todos.length === 0;

  const removeLastTodosItem = useCallback(() => {
    if (isTodosEmpty === false) dispatch(todosRemovedLast());
  }, [todos, isTodosEmpty]);

  const removeTodosById = useCallback(
    (id: number) => {
      if (id) dispatch(todosRemovedById(id));
    },
    [todos],
  );

  const removeTodos = useCallback(() => {
    if (isTodosEmpty === false) dispatch(todosRemovedAll());
  }, [todos, isTodosEmpty]);

  const completeTodosById = useCallback(
    (id: number) => {
      dispatch(todosCompletedById(id));
    },
    [todos],
  );

  const addTodos = useCallback(
    (description: string): Promise<any> => {
      return new Promise((resolve, reject) => {
        if (description === '') {
          reject('Description is empty');
          return;
        }

        const lastItemId: number = todos[todos.length - 1]?.id ?? 0;

        const newTodos: INewTodos = {
          id: lastItemId ? lastItemId + 1 : 1,
          userId: 1,
          title: description,
          completed: false,
        };

        dispatch(todosAdded(newTodos));
        resolve(newTodos);
      });
    },
    [todos],
  );

  return {
    addTodos,
    removeTodos,
    removeTodosById,
    removeLastTodosItem,
    completeTodosById,
  };
};
