import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  apiUrl = 'http://localhost:3000/clients/';

  constructor(private httpclient: HttpClient) {}

  getAllClients(): Observable<Client[]> {
    return this.httpclient.get<Client[]>(this.apiUrl);
  }

  addClient(client: Client): Observable<Client> {
    return this.httpclient.post<Client>(this.apiUrl, client);
  }

  deleteClient(client: string | undefined): Observable<Client> {
    return this.httpclient.delete<Client>(`${this.apiUrl}${client}`);
  }

  getClientbyId(client: string | null) {
    return this.httpclient.get<Client>(`${this.apiUrl}${client}`);
  }

  UpdateClientsbYid(client:Client){
    const url = `${this.apiUrl}${client.id}`;
    return this.httpclient.put<Client>(url,client)
      
  }




}
