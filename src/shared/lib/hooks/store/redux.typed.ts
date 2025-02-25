import { useStore, useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore = useStore.withTypes<AppStore>();
export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
  rejectValue?: string | null;
  extra?: { s: string; n: number };
}>();
