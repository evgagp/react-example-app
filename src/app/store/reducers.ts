import { todosSlice } from '@/entities/todo';
import { contactsSlice } from '@/entities/contact';

export const reducer = {
  todos: todosSlice.reducer,
  contacts: contactsSlice.reducer,
};
