// import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss'],
})
export class AddClientComponent {
  clientForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    lastName: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    balance: new FormControl(0, Validators.pattern('[0-9]*')),
  });

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {}

  persistClient(data: any) {
    if (this.clientForm.invalid) {
      this.toastr.error("le formulaire n'est pas valide. Veuillez remplir tous les champs correctement.", 'Error', {
        positionClass: 'toast-bottom-center',
      });
      return;
    }

    this.clientService.addClient(data).subscribe( () =>{
        this.toastr.success('Le client a été créé avec succès', 'Succès', {
          positionClass: 'toast-bottom-center',
        });
        this.router.navigateByUrl('/clients');
    });
  }
}
