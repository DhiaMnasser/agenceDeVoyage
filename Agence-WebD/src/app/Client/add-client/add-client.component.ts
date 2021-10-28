import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/Client';
import { ClientService } from 'src/app/services/Client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  Client: Client = new Client();
  constructor(private ClientService: ClientService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveClient(){
    this.ClientService.createClient(this.Client).subscribe( data =>{
      console.log(data);
      this.goToClientList();
    },
    error => console.log(error));
  }

  goToClientList(){
    this.router.navigate(['/Clients']);
  }

  onSubmit(){
    console.log(this.Client);
    this.saveClient();
  }

}
