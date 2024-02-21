import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registeredUsers: { email: string, password: string }[] = [];
  private loggedInUser: { email: string, password: string } | null = null;

  register(email: string, password: string): void {
    this.registeredUsers.push({ email, password });
  }

  login(email: string, password: string): boolean {
    const user = this.registeredUsers.find(u => u.email === email && u.password === password);
    if (user) {
      this.loggedInUser = user;
      return true;
    }
    return false;
  }
  getLoggedInUserEmail(): string | null {
    return this.loggedInUser ? this.loggedInUser.email : null;
  }
  isLoggedIn(): boolean {
    return !!this.loggedInUser;
  }

  logout(): void {
    this.loggedInUser = null;
  }
}
