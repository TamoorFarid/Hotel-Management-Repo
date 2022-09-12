import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'Rooms',loadChildren:()=>import ('./Rooms/rooms.module').then(m=> m.RoomsModule)},
  {path:'Buffet',loadChildren:()=>import ('./Buffet/buffet.module').then(m=> m.BuffetModule)},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
