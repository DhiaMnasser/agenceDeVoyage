import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Facture } from '../models/Facture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  constructor(private httpClient: HttpClient) { }

  getFactureList(): Observable<Facture[]>{
    return this.httpClient.get<Facture[]>(`http://localhost:8762/facture-service/api/facture/list`);
  }

  createFacture(Facture: Facture): Observable<Object>{
    return this.httpClient.post(`http://localhost:8762/facture-service/api/facture/add`, Facture);
  }

  getFactureById(id: number): Observable<Facture>{
    return this.httpClient.get<Facture>(`http://localhost:8762/facture-service/api/facture/get/${id}`);
  }

  updateFacture(id: number, Facture: Facture): Observable<Object>{
    return this.httpClient.put(`http://localhost:8762/facture-service/api/facture/edit/${id}`, Facture);
  }

  deleteFacture(id: number): Observable<Object>{
    return this.httpClient.delete(`http://localhost:8762/facture-service/api/facture/delete/${id}`);
  }

}
