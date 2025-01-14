import axios from 'axios';


import { todosSelectStatus } from '../model/slice';
import { ITodosItem } from '../model/types';
import { List } from '@/shared/models';
import { createAppAsyncThunk } from '@/shared/store';


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
  }
);
