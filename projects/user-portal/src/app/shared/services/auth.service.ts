import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor() {
  }

  // getBearerToken(username: string, password: string): Observable<AuthResponse> {
  //   const url = `${this.apiHelper.url}/auth/token`;
  //   return this.http.post<AuthResponse>(url, new AuthRequest(username, password));
  // }
  //
  // getAdminBearerToken(userId: number): Observable<AuthResponse> {
  //   const url = `${this.apiHelper.url}/auth/token/admin/${userId}`;
  //   return this.http.get<AuthResponse>(url);
  // }

  login() {
    this.isAuthenticated = true;
  }

  logout() {
    this.isAuthenticated = false;
    window.localStorage.clear();
  }

  isloggetIn(): boolean {
    return this.isAuthenticated;
  }
}
