import { Injectable } from '@angular/core';
import { user } from '../user/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUser() {
    return user
  }

  constructor() { }
}
