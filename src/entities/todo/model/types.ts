import { IStatus, List } from '@/shared/models';

export interface ITodosItem {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export interface ITodoState extends IStatus {
  list: List<ITodosItem>;
}
