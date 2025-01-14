import { useCallback, useEffect } from 'react';
import { fetchTodosList } from '../../api/thunks';
import { useAppDispatch, useAppSelector } from '@/shared/store';

export interface IUseFetchTodoProps {
  autoFetch?: boolean | undefined | null;
}

interface IUseReturnFetchTodos {
  errorMsg: any;
  isError: boolean;
  isPending: boolean;
  fetchTodos: () => void;
}

export const useFetchTodos = ({ autoFetch = false }: IUseFetchTodoProps = {}) => {
  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector(state => state.todos);

  const errorMsg = error ? error.message : '';
  const isError = status === 'rejected' || error;
  const isPending = status === 'pending';

  const fetchTodos = useCallback(() => {
    dispatch(fetchTodosList());
  }, []);

  useEffect(() => {
    let ignoreCurrentEffect = false;

    if (status === 'idle' && !ignoreCurrentEffect && autoFetch) {
      fetchTodos();
    }

    return () => {
      ignoreCurrentEffect = true;
    };
  }, []);

  return {
    errorMsg,
    isError,
    isPending,
    fetchTodos,
  } as IUseReturnFetchTodos;
};
