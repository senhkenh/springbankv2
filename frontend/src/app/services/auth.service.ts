import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_KEY = 'current_user';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password }).pipe(
      tap(response => {
        if (response.success) {
          localStorage.setItem(this.USER_KEY, username);
        }
      })
    );
  }

  register(username: string, email: string, password: string, phoneNumber: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, { 
      username, 
      email, 
      password, 
      phoneNumber 
    });
  }

  logout(): void {
    localStorage.removeItem(this.USER_KEY);
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.USER_KEY) !== null;
  }

  getCurrentUser(): string | null {
    return localStorage.getItem(this.USER_KEY);
  }
}
