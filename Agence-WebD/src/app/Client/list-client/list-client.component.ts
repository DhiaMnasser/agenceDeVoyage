import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/Client';
import { ClientService } from 'src/app/services/Client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  Clients: Client[];

  constructor(private ClientService: ClientService,
    private router: Router) { }

  ngOnInit(): void {
    this.getClients();
  }

  private getClients(){
    this.ClientService.getClientList().subscribe(data => {
      this.Clients = data;
      console.log(data)
    });
  }

  ClientDetails(id: number){
    this.router.navigate(['detail/Client', id]);
  }

  updateClient(id: number){
    this.router.navigate(['update/Client', id]);
  }

  deleteClient(id: number){
    this.ClientService.deleteClient(id).subscribe( data => {
      console.log(data);
      this.getClients();
      //this.router.navigate(['Clients']);

    })
  }

}
