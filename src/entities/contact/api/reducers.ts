import { PayloadAction } from '@reduxjs/toolkit';
import { IContactsItem, IContactsState } from '../model/types';

const contactsAdded = (state: IContactsState, action: PayloadAction<IContactsItem>) => {
  state.list.push(action.payload);
};

const contactsRemovedLastItem = (state: IContactsState) => {
  state.list.pop();
};

const contactsRemovedAll = (state: IContactsState) => {
  state.list = [];
};

const contactsRemovedItemById = (state: IContactsState, action: PayloadAction<number>) => {
  state.list = state.list.filter((item: IContactsItem) => item.id !== action.payload);
};

export default {
  contactsAdded,
  contactsRemovedAll,
  contactsRemovedItemById,
  contactsRemovedLastItem,
};
