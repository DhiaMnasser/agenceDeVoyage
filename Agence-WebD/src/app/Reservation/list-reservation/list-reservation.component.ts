import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/models/Reservation';
import { ReservationService } from 'src/app/services/Reservation.service';

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css']
})
export class ListReservationComponent implements OnInit {

  Reservations: Reservation[];

  constructor(private ReservationService: ReservationService,
    private router: Router) { }

  ngOnInit(): void {
    this.getReservations();
  }

  private getReservations(){
    this.ReservationService.getReservationList().subscribe(data => {
      this.Reservations = data;
      console.log(data)
    });
  }

  ReservationDetails(id: number){
    this.router.navigate(['detail/Reservation', id]);
  }

  updateReservation(id: number){
    this.router.navigate(['update/Reservation', id]);
  }

  deleteReservation(id: number){
    this.ReservationService.deleteReservation(id).subscribe( data => {
      console.log(data);
      this.getReservations();
      //this.router.navigate(['Reservations']);

    })
  }

}
