import { useTodos } from '@/entities/todo';
import { Button } from '@/shared/ui/';
import './Controls.scss';
import { memo } from 'react';

interface ITodosControlProps {
  handleToggleModal: () => void;
}

export const TodosControl: React.FunctionComponent<ITodosControlProps> = memo(({ handleToggleModal }) => {
  const { removeLastTodosItem, removeTodos, fetchTodos, todosIsEmpty } = useTodos();

  return (
    <div className="container">
      <div className={'todos-control'}>
        <Button className="todos-button" variant="primary" onClick={fetchTodos}>
          Fetch data
        </Button>

        <Button className="todos-button" variant="danger" onClick={removeLastTodosItem} disabled={todosIsEmpty}>
          Remove last
        </Button>

        <Button className="todos-button" variant="warning" onClick={removeTodos} disabled={todosIsEmpty}>
          Clear
        </Button>

        <Button className="todos-button" variant="secondary" onClick={handleToggleModal}>
          Add new
        </Button>
      </div>
    </div>
  );
});
