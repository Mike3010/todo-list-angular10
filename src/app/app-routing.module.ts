import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  {path: 'list', component: ListComponent},
  {path: 'item/:id', component: ItemComponent},
  {path: '**', redirectTo: '/list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
