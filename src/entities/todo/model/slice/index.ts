import { createSlice } from '@reduxjs/toolkit';

import * as selectors from './selectors';
import reducers from '../../api/reducers';
import extraReducers from '../../api/extraReducers';
import { ITodoState } from '../types';

const initialState = {
  list: [],
  status: 'idle',
  error: null,
} as ITodoState;

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  selectors,
  reducers,
  extraReducers,
});

export const { todosSelectAll, todosSelectById, todosSelectStatus } = todosSlice.selectors;

export const { todosAdded, todosRemovedAll, todosRemovedById, todosRemovedLast, todosCompletedById } =
  todosSlice.actions;

export default todosSlice;
