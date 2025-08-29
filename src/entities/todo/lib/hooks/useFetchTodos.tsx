import { useCallback, useEffect, useRef } from 'react';
import { fetchTodosList } from '../../api/thunks';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';

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
  const isIgnoreFetchEffect = useRef(false);

  const errorMsg = error?.message ?? '';
  const isError = status === 'rejected' || error;
  const isPending = status === 'pending';

  const fetchTodos = useCallback(() => {
    dispatch(fetchTodosList());
  }, []);

  useEffect(() => {
    if (isIgnoreFetchEffect.current) return;
    if (status === 'idle' && autoFetch) fetchTodos();

    return () => {
      isIgnoreFetchEffect.current = true;
    };
  }, []);

  return {
    errorMsg,
    isError,
    isPending,
    fetchTodos,
  } as IUseReturnFetchTodos;
};
