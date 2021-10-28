import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../models/Reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  constructor(private httpClient: HttpClient) { }

  getReservationList(): Observable<Reservation[]>{
    return this.httpClient.get<Reservation[]>(`http://localhost:8762/reservation-service/api/reservation/list`);
  }

  createReservation(Reservation: Reservation): Observable<Object>{
    return this.httpClient.post(`http://localhost:8762/reservation-service/api/reservation/add`, Reservation);
  }

  getReservationById(id: number): Observable<Reservation>{
    return this.httpClient.get<Reservation>(`http://localhost:8762/reservation-service/api/reservation/get/${id}`);
  }

  updateReservation(id: number, Reservation: Reservation): Observable<Object>{
    return this.httpClient.put(`http://localhost:8762/reservation-service/api/reservation/edit/${id}`, Reservation);
  }

  deleteReservation(id: number): Observable<Object>{
    return this.httpClient.delete(`http://localhost:8762/reservation-service/api/reservation/delete/${id}`);
  }

}
