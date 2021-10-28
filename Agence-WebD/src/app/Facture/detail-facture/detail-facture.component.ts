import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Facture } from 'src/app/models/Facture';
import { FactureService } from 'src/app/services/Facture.service';

@Component({
  selector: 'app-detail-facture',
  templateUrl: './detail-facture.component.html',
  styleUrls: ['./detail-facture.component.css']
})
export class DetailFactureComponent implements OnInit {

  id: number
  Facture: Facture
  constructor(private route: ActivatedRoute, private FactureService: FactureService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.Facture = new Facture();
    this.FactureService.getFactureById(this.id).subscribe( data => {
      this.Facture = data;
    });
  }

}
