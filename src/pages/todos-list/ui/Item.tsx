import { ITodosItem, TodosElement } from '@/entities/todo';
import { useTodos } from '@/entities/todo';
import { Button, Input } from '@/shared/ui';
import './Item.scss';
import { memo } from 'react';

const TodosItem: React.FC<{ item: ITodosItem }> = memo(({ item }) => {
  const { removeTodosById, completeTodosById } = useTodos();

  return (
    <div className="todos-item" key={item.id}>
      <div className="todos-item-row">
        <div className="todos-checkbox">
          <Input
            id={'todos-item-' + item.id}
            type="checkbox"
            checked={item.completed}
            onChange={() => completeTodosById(item.id)}
          />
        </div>

        <label htmlFor={'todos-item-' + item.id} className="todos-text">
          <TodosElement todo={item} />
        </label>
      </div>

      <Button variant={'danger'} onClick={() => removeTodosById(item.id)}>
        Remove
      </Button>
    </div>
  );
});

export default TodosItem;
