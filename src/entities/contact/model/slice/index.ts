import { createSlice } from '@reduxjs/toolkit';
import reducers from '../../api/reducers';
import { IContactsState } from '../types';

const initialState = {
  list: [],
  status: 'idle',
  error: null,
} as IContactsState;

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers,
});
