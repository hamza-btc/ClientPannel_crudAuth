import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router, private autheService: AuthService) {}
  errMsg: string = '';
  authForm = new FormGroup({
    email: new FormControl<string>(''),
    password: new FormControl<string>(''),
  });

  login() {
    const emailValue = this.authForm.get('email')?.value as string;
    const passwordValue = this.authForm.get('password')?.value as string;

    let res = this.autheService.login(emailValue, passwordValue);
    console.log('resss de login', res);
    if (res === true) {
      this.router.navigate(['/clients']);
    }
    if (res === false) {
      this.errMsg = 'ERROR veullez entrer name : hamza mdb:123';
    }
  }
}
