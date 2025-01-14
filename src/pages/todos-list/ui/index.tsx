import { useTodos } from '@/entities/todo';
import { TodosControl } from '@/widgets/todos-controls';
import { useState } from 'react';
import AddTodoModalFrom from './AddTodosModalForm';
import List from './List';
import Search from './Search';

export const TodosListPage: React.FC = () => {
  const { todos, setQuery } = useTodos();
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleToggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <>
      <Search handleSetQuery={setQuery} />
      <TodosControl handleToggleModal={handleToggleModal} />
      <AddTodoModalFrom handleSetShowModal={setShowModal} isOpen={showModal} />
      <List todos={todos} />
    </>
  );
};
