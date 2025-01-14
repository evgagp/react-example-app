import { memo } from 'react';
import { ITodosItem } from '@/entities/todo';

interface ITodosElementProps {
  todo: ITodosItem;
}

export const TodosElement: React.FC<ITodosElementProps> = memo(({ todo }) => todo.title);
