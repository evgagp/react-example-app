import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import { reducer } from './reducers';

const listenerMiddleware = createListenerMiddleware();

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(listenerMiddleware.middleware).concat(),
});

export default store;
