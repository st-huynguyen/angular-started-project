import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { ENDPOINT } from './endpoint';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  endpoint = ENDPOINT.USER;
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.endpoint}.json`).pipe(
      map((res) => {
        const result = [];
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            result.push({ ...res[key], id: key });
          }
        }
        return result;
      })
    );
  }

  getUser(userId: string): Observable<User> {
    return this.http.get<User>(`${this.endpoint}/${userId}.json`);
  }

  createUser(userData: User) {
    return this.http.post<{ name: string }>(`${this.endpoint}.json`, userData);
  }

  updateUser(userId: string, userData: User) {
    return this.http.put<User>(`${this.endpoint}/${userId}.json`, userData);
  }

  deleteUser(userId: string) {
    return this.http.delete(`${this.endpoint}/${userId}.json`);
  }
}
