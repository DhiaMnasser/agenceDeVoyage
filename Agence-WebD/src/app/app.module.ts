import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http"
import { RouterModule, Routes } from "@angular/router";
import {AddClientComponent} from "./Client/add-client/add-client.component";
import {DetailClientComponent} from "./Client/detail-client/detail-client.component";
import {ListClientComponent} from "./Client/list-client/list-client.component";
import {UpdateClientComponent} from "./Client/update-client/update-client.component";
import {AddFactureComponent} from "./Facture/add-facture/add-facture.component";
import {DetailFactureComponent} from "./Facture/detail-facture/detail-facture.component";
import {ListFactureComponent} from "./Facture/list-facture/list-facture.component";
import {UpdateFactureComponent} from "./Facture/update-facture/update-facture.component";
import {AddReservationComponent} from "./Reservation/add-reservation/add-reservation.component";
import {ListReservationComponent} from "./Reservation/list-reservation/list-reservation.component";
import {DetailReservationComponent} from "./Reservation/detail-reservation/detail-reservation.component";
import {UpdateReservationComponent} from "./Reservation/update-reservation/update-reservation.component";

const routes: Routes = [
  { path: '', component: ListClientComponent },
  { path: 'add/Client', component: AddClientComponent },
  { path: 'Clients', component: ListClientComponent },
  { path: 'detail/Client/:id', component: DetailClientComponent },
  { path: 'update/Client/:id', component: UpdateClientComponent },

  { path: '', component: ListFactureComponent },
  { path: 'add/Facture', component: AddFactureComponent },
  { path: 'Factures', component: ListFactureComponent },
  { path: 'detail/Facture/:id', component: DetailFactureComponent },
  { path: 'update/Facture/:id', component: UpdateFactureComponent },

  { path: '', component: ListReservationComponent },
  { path: 'add/Reservation', component: AddReservationComponent },
  { path: 'Reservations', component: ListReservationComponent },
  { path: 'detail/Reservation/:id', component: DetailReservationComponent },
  { path: 'update/Reservation/:id', component: UpdateReservationComponent },
];

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    AddClientComponent,
    DetailClientComponent,
    ListClientComponent,
    UpdateClientComponent,
    AddFactureComponent,
    DetailFactureComponent,
    ListFactureComponent,
    UpdateFactureComponent,
    AddReservationComponent,
    ListReservationComponent,
    DetailReservationComponent,
    UpdateReservationComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
