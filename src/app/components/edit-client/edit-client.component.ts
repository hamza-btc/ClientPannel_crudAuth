import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss'],
})
export class EditClientComponent implements OnInit {
  id: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clientService: ClientService,
    private toastr: ToastrService,
  ) {}

  clientForm = new FormGroup({
    id: new FormControl('', Validators.required),
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    lastName: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    balance: new FormControl(0, Validators.pattern('[0-9]*')),
  });

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('idddd de client', id);
    this.clientService.getClientbyId(id)
      .subscribe((res: Client) => this.clientForm.patchValue(res))
    // this.route.params.subscribe(params => {
    //   this.id = params.id;
    //   this.clientService.getOne(params.id)
    //       .subscribe((res: Client) => this.clientForm.patchValue(res))
    // });
    //  this.updateClient(id)
  }

  updateClient(client : any) {
    console.log('client data',client);
     this.clientService.UpdateClientsbYid(client).subscribe(data => console.log('data update',data));
     this.toastr.info('Client est modifié avec succès', 'Modifier', {
      positionClass: 'toast-bottom-left'
    })
     this.router.navigate(['/clients'])
  }
}
