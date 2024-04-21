import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private authService: AuthService,private router : Router) {

  }
  authForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl(""),
  })


    register() {
      // this.authService.login(this.authForm.value)
      //     .then(() => {
            
      //       this.toastr.success("Welcome o your new Account", "Success", {
      //         positionClass: 'toast-bottom-left'
      //       })
  
            this.router.navigate(['/clients'])
    }
    

}
