import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  getUserByEmail(email: string): Observable<any> {
    return this.http.get(`http://localhost:3000/users?email=${email}`)
      // .pipe(map((res: Response) => res))
      .pipe(map((users: User[]) => users[0] ? users[0] : undefined));
  }

  createNewUser(user: User): Observable<any> {
    return this.http.post(`http://localhost:3000/users`, user);
  }

}
