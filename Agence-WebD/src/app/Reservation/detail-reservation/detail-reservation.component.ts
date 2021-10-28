import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from 'src/app/models/Reservation';
import { ReservationService } from 'src/app/services/Reservation.service';

@Component({
  selector: 'app-detail-reservation',
  templateUrl: './detail-reservation.component.html',
  styleUrls: ['./detail-reservation.component.css']
})
export class DetailReservationComponent implements OnInit {

  id: number
  Reservation: Reservation
  constructor(private route: ActivatedRoute, private ReservationService: ReservationService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.Reservation = new Reservation();
    this.ReservationService.getReservationById(this.id).subscribe( data => {
      this.Reservation = data;
    });
  }

}
