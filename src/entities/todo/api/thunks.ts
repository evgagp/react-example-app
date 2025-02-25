import axios from 'axios';
import { createAppAsyncThunk } from '@/shared/lib/hooks';
import { todosSelectStatus } from '../model/slice';
import { ITodosItem } from '../model/types';
import { List } from '@/shared/models';

export const fetchTodosList = createAppAsyncThunk(
  'todos/fetch',
  async () => {
    const response = await axios.get<List<ITodosItem>>('https://jsonplaceholder.typicode.com/todos');

    return response.data;
  },
  {
    condition(_arg, thunkApi) {
      const status = todosSelectStatus(thunkApi.getState());

      if (status.status !== 'idle' && status.status !== 'success') {
        return false;
      }
    },
  },
);
