import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsDetailsComponent } from './rooms-details/rooms-details.component';
import { roomsRoutingModule } from './rooms-routing';
import { RoomPaymentComponent } from './room-payment/room-payment.component';



@NgModule({
  declarations: [
    RoomsComponent,
    RoomsDetailsComponent,
    RoomPaymentComponent
  ],
  imports: [
    CommonModule,
    roomsRoutingModule
  ],
  exports:[
    RoomsComponent,
    RoomsDetailsComponent
  ]
})
export class RoomsModule { }
