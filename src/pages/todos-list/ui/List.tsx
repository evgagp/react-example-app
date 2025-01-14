import { memo } from 'react';
import { ITodosItem, useTodos } from '@/entities/todo';
import OnError from './OnError';
import Skeleton from 'react-loading-skeleton';
import TodosItem from './Item';

const TodosList: React.FC<{ todos: ITodosItem[] }> = memo(({ todos }) => {
  const { isPending } = useTodos({ autoFetch: true });

  return (
    <div className="container">
      <OnError />
      {isPending && <Skeleton height={'40px'} highlightColor="#050719" baseColor="#201e6d" count={50} />}
      {todos.map((item: ITodosItem) => (
        <TodosItem key={item.id} item={item} />
      ))}
    </div>
  );
});

export default TodosList;
