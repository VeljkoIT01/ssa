import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly url = 'http://localhost:3000/users'
  constructor() { }

  async getAllUsers(): Promise<User[]> {
    const data = await fetch(this.url);
    return await data.json();
  }
}
