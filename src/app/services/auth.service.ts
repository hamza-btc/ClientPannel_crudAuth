import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  isAuthenticated: boolean=false;

  login(username: string , password:string) {
    if (username === "hamza" && password ==="123") {
      this.isAuthenticated = true;
    return true;
    } else {
     return false;
    }
   }

   isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

   
   logout() {
      this.router.navigate(['login']);
   }

}
