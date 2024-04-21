import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss'],
})
export class ListClientComponent implements OnInit {
  clients: Client[] = [];
  constructor(private clientService: ClientService) {}
  ngOnInit(): void {
    this.clientService
      .getAllClients()
      .subscribe((data) => (this.clients = data));
  }

  deleteClient(clientId: string | undefined) {
    this.clientService
      .deleteClient(clientId)
      .subscribe(
        () =>
          (this.clients = this.clients.filter((data) => data.id !== clientId))
      );
  }
}
