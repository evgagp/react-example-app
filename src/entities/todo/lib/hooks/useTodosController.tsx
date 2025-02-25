import { useCallback, useDeferredValue, useEffect, useState } from 'react';
import { todosSelectAll } from '../../model/slice';
import { List } from '@/shared/models';
import { ITodosItem } from '../../model/types';
import { useAppSelector } from '@/shared/lib/hooks';

interface IQuery {
  query: string;
  reversed?: boolean;
}

export const useTodosController = () => {
  const [todos, setTodos] = useState<List<ITodosItem>>([]);
  const [query, setQuery] = useState<IQuery>({ query: '', reversed: true });
  const todosFromStore: List<ITodosItem> = useAppSelector(todosSelectAll);
  const todosIsEmpty: boolean = todosFromStore.length === 0;

  const deferredTodos = useDeferredValue(todos);

  useEffect(() => {
    handleFilterTodos();
  }, [query, todosFromStore]);

  useEffect(() => {
    if (todosIsEmpty) {
      setQuery(prev => ({ ...prev, query: '' }));
    }
  }, [todosIsEmpty]);

  const handleFilterTodos = useCallback(() => {
    if (!query) return;

    let filteredTodos = todosFromStore;

    const queryString = query.query.split(/[:]+/)[0];
    const stringParams: string[] = query.query
      .split(/[:]/gi)[1]
      ?.split(/[^\w]|[\s]|_/g)
      .filter(predicate => predicate !== '')
      .map(string => {
        return string.toLowerCase();
      });

    if (queryString) {
      filteredTodos = filteredTodos.filter(todo => todo.title.toLowerCase().includes(queryString.toLowerCase()));
    }

    if (stringParams?.find(predicate => predicate === 'reversed')) {
      filteredTodos = filteredTodos.toReversed();
    }

    if (stringParams?.find(predicate => predicate === 'completed')) {
      filteredTodos = filteredTodos.filter(todo => todo.completed === true);
    }

    if (stringParams?.find(predicate => predicate === 'uncompleted')) {
      filteredTodos = filteredTodos.filter(todo => todo.completed === false);
    }

    setTodos(filteredTodos);
  }, [todosFromStore, query]);

  return {
    todos: deferredTodos,
    todosIsEmpty,
    setQuery,
  };
};
