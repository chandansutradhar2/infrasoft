import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usr!: User;
  onUserChange: EventEmitter<User> = new EventEmitter();

  setUser(usr: User) {
    this.usr = usr;
    this.onUserChange.emit(this.usr);
  }

  getUser(): User {
    return this.usr;
  }

  logout() {
    Object.assign(this.usr, null);
  }

  constructor(private http: HttpClient) {}

  checkEmailExists(email: string) {
    return this.http.get('http://localhost:3000/user/exists?email=' + email);
  }
}
