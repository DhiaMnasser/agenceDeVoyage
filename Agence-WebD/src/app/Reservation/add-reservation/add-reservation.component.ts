import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/models/Reservation';
import { ReservationService } from 'src/app/services/Reservation.service';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {

  Reservation: Reservation = new Reservation();
  constructor(private ReservationService: ReservationService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveReservation(){
    this.ReservationService.createReservation(this.Reservation).subscribe( data =>{
      console.log(data);
      this.goToReservationList();
    },
    error => console.log(error));
  }

  goToReservationList(){
    this.router.navigate(['/Reservations']);
  }

  onSubmit(){
    console.log(this.Reservation);
    this.saveReservation();
  }

}
