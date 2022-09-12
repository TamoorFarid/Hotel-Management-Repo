import { RoomPaymentComponent } from './room-payment/room-payment.component';
import { RoomsDetailsComponent } from './rooms-details/rooms-details.component';
import { RoomsComponent } from './rooms/rooms.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";



const roomsRoute:Routes=[
{path:'rooms',component:RoomsComponent},
{path:'rooms/:id',component:RoomsDetailsComponent},
{path:'room-payment',component:RoomPaymentComponent}
]
@NgModule({
  imports:[RouterModule.forChild(roomsRoute)],
  exports:[RouterModule]
})
export class roomsRoutingModule{}
