import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Facture } from 'src/app/models/Facture';
import { FactureService } from 'src/app/services/Facture.service';

@Component({
  selector: 'app-add-facture',
  templateUrl: './add-facture.component.html',
  styleUrls: ['./add-facture.component.css']
})
export class AddFactureComponent implements OnInit {

  Facture: Facture = new Facture();
  constructor(private FactureService: FactureService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveFacture(){
    this.FactureService.createFacture(this.Facture).subscribe( data =>{
      console.log(data);
      this.goToFactureList();
    },
    error => console.log(error));
  }

  goToFactureList(){
    this.router.navigate(['/Factures']);
  }

  onSubmit(){
    console.log(this.Facture);
    this.saveFacture();
  }

}
