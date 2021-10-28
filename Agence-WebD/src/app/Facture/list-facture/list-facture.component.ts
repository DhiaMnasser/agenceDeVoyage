import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Facture } from 'src/app/models/Facture';
import { FactureService } from 'src/app/services/Facture.service';

@Component({
  selector: 'app-list-facture',
  templateUrl: './list-facture.component.html',
  styleUrls: ['./list-facture.component.css']
})
export class ListFactureComponent implements OnInit {

  Factures: Facture[];

  constructor(private FactureService: FactureService,
    private router: Router) { }

  ngOnInit(): void {
    this.getFactures();
  }

  private getFactures(){
    this.FactureService.getFactureList().subscribe(data => {
      this.Factures = data;
      console.log(data)
    });
  }

  FactureDetails(id: number){
    this.router.navigate(['detail/Facture', id]);
  }

  updateFacture(id: number){
    this.router.navigate(['update/Facture', id]);
  }

  deleteFacture(id: number){
    this.FactureService.deleteFacture(id).subscribe( data => {
      console.log(data);
      this.getFactures();
      //this.router.navigate(['Factures']);

    })
  }

}
