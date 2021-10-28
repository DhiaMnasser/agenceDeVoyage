import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from 'src/app/models/Reservation';
import { ReservationService } from 'src/app/services/Reservation.service';

@Component({
  selector: 'app-reservation-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.css']
})
export class UpdateReservationComponent implements OnInit {

  id: number;
  Reservation: Reservation = new Reservation();
  constructor(private ReservationService: ReservationService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.ReservationService.getReservationById(this.id).subscribe(data => {
      this.Reservation = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.ReservationService.updateReservation(this.id, this.Reservation).subscribe( data =>{
      this.goToReservationList();
    }
    , error => console.log(error));
  }

  goToReservationList(){
    this.router.navigate(['/Reservations']);
  }

}
