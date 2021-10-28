import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/models/Client';
import { ClientService } from 'src/app/services/Client.service';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.css']
})
export class DetailClientComponent implements OnInit {

  id: number
  Client: Client
  constructor(private route: ActivatedRoute, private ClientService: ClientService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.Client = new Client();
    this.ClientService.getClientById(this.id).subscribe( data => {
      this.Client = data;
    });
  }

}
