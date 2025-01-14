import { PayloadAction } from '@reduxjs/toolkit';
import { ITodosItem, ITodoState } from '../model/types';

const todosAdded = (state: ITodoState, action: PayloadAction<ITodosItem>) => {
  state.list.push(action.payload);
};

const todosRemovedLast = (state: ITodoState) => {
  state.list.pop();
};

const todosCompletedById = (state: ITodoState, action: PayloadAction<number>) => {
  state.list.forEach((item: ITodosItem) => {
    if (item.id === action.payload) {
      item.completed = !item.completed;
    }
  });
};

const todosRemovedAll = (state: ITodoState) => {
  state.list = [];
};

const todosRemovedById = (state: ITodoState, action: PayloadAction<number>) => {
  state.list = state.list.filter((item: ITodosItem) => item.id !== action.payload);
};

export default {
  todosAdded,
  todosRemovedAll,
  todosRemovedById,
  todosRemovedLast,
  todosCompletedById,
};
