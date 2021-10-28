import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(private httpClient: HttpClient) { }

  getClientList(): Observable<Client[]>{
    return this.httpClient.get<Client[]>(`http://localhost:8762/client-service/api/client/list`);
  }

  createClient(Client: Client): Observable<Object>{
    return this.httpClient.post(`http://localhost:8762/client-service/api/client/add`, Client);
  }

  getClientById(id: number): Observable<Client>{
    return this.httpClient.get<Client>(`http://localhost:8762/client-service/api/client/get/${id}`);
  }

  updateClient(id: number, Client: Client): Observable<Object>{
    return this.httpClient.put(`http://localhost:8762/client-service/api/client/edit/${id}`, Client);
  }

  deleteClient(id: number): Observable<Object>{
    return this.httpClient.delete(`http://localhost:8762/client-service/api/client/delete/${id}`);
  }

}
