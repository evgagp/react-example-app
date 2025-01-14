import { List } from '@/shared/models';
import { ITodosItem, ITodoState } from '../model/types';
import { PayloadAction } from '@reduxjs/toolkit';
import { fetchTodosList } from './thunks';

const extraReducers = (builder: any) => {
  builder.addCase(fetchTodosList.pending, (state: ITodoState) => {
    state.status = 'pending';
  });

  builder.addCase(fetchTodosList.fulfilled, (state: ITodoState, action: PayloadAction<List<ITodosItem>>) => {
    state.list = action.payload;
    state.status = 'success';
  });

  builder.addCase(fetchTodosList.rejected, (state: ITodoState, action: any) => {
    state.status = 'rejected';
    state.error = action.error.message ?? 'Unknown Error';
  });
};

export default extraReducers;
