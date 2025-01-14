import { IStatus } from '@/shared/models';
import { List } from '@/shared/models';

export interface IContactsItem {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAdress;
  phone: string;
  website: string;
  company: ICompany;
}

interface IAdress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

interface IGeo {
  lat: number;
  lng: number;
}

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IContactsState extends IStatus {
  list: List<IContactsItem>;
}
