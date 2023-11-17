import { Cronograma } from './Cronograma';
export class Customer {
  id: number = 0;
  name: string = '';
  lastName: string = '';
  dni: string = '';
  email: string = '';
  username: string = '';
  password: string = '';

  cronograma: Cronograma[] = [];
}
