export class User {
  constructor(data: Partial<User>) {
    Object.assign(this, data);
  }

  id: number = 0;
  name: string = '';
}
