import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Facture } from 'src/app/models/Facture';
import { FactureService } from 'src/app/services/Facture.service';

@Component({
  selector: 'app-update-facture',
  templateUrl: './update-facture.component.html',
  styleUrls: ['./update-facture.component.css']
})
export class UpdateFactureComponent implements OnInit {

  id: number;
  Facture: Facture = new Facture();
  constructor(private FactureService: FactureService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.FactureService.getFactureById(this.id).subscribe(data => {
      this.Facture = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.FactureService.updateFacture(this.id, this.Facture).subscribe( data =>{
      this.goToFactureList();
    }
    , error => console.log(error));
  }

  goToFactureList(){
    this.router.navigate(['/Factures']);
  }

}
