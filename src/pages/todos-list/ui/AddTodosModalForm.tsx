import './AddTodosModalForm.scss';
import { useTodos } from '@/entities/todo';
import { callToast } from '@/shared/lib';
import { Button, Input, Modal } from '@/shared/ui';
import { ChangeEvent, FC, MouseEvent, SyntheticEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface IAddTodoModalFromProps {
  isOpen: boolean;
  handleSetShowModal: (status: boolean) => void;
}

const AddTodoModalFrom: FC<IAddTodoModalFromProps> = ({ isOpen, handleSetShowModal }) => {
  const { addTodos } = useTodos();
  const [inputTodosDescriptionValue, setInputTodosDescriptionValue] = useState<string>('');

  const handleCloseModal = (event: MouseEvent<HTMLDivElement>) => {
    const isCurrentTarget = event.target === event.currentTarget;
    isCurrentTarget && handleSetShowModal(false);
  };

  const handleTodosDescriptionValueInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputTodosDescriptionValue(event.target.value);
  };

  const handleSubmitAddTodo = (event: SyntheticEvent<HTMLFormElement>) => {
    event.persist();
    event.preventDefault();
    toast.clearWaitingQueue();

    addTodos(inputTodosDescriptionValue)
      .then(() => {
        callToast(`Task is added`, {
          theme: 'colored',
          style: {
            background: '#307337',
            color: 'white',
          },
        });
      })
      .then(() => {
        handleSetShowModal(false);
        setInputTodosDescriptionValue('');
      })
      .catch(() => {
        callToast('Error: Form is empty!', {
          theme: 'colored',
          style: {
            background: '#cb2626',
            color: 'white',
          },
        });
      });
  };

  useEffect(() => {
    setInputTodosDescriptionValue('');
  }, [isOpen]);

  return (
    <>
      <Modal key={'create-todos-modal'} isOpen={isOpen} onClose={handleCloseModal}>
        <form className="add-task-form" onSubmit={handleSubmitAddTodo}>
          <div>
            <label className="add-task-form__label" htmlFor="new-task-description">
              Description
            </label>
          </div>
          <Input
            className="add-task-form__input"
            id="new-task-description"
            autoFocus={true}
            name="task-name"
            value={inputTodosDescriptionValue}
            onInput={handleTodosDescriptionValueInput}
            placeholder="Task description..."
          />

          <Button variant="success" type="submit">
            Submit
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default AddTodoModalFrom;
