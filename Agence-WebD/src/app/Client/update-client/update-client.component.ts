import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/Client';
import { ClientService } from 'src/app/services/Client.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  id: number;
  Client: Client = new Client();
  constructor(private ClientService: ClientService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.ClientService.getClientById(this.id).subscribe(data => {
      this.Client = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.ClientService.updateClient(this.id, this.Client).subscribe( data =>{
      this.goToClientList();
    }
    , error => console.log(error));
  }

  goToClientList(){
    this.router.navigate(['/Clients']);
  }

}
