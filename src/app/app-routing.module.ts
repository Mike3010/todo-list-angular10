import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { ItemEditorComponent } from './item-editor/item-editor.component';

const routes: Routes = [
  {path: 'list', component: ListComponent},
  {path: 'item/:id', component: ItemComponent},
  {path: 'editor', component: ItemEditorComponent},
  {path: 'editor/:id', component: ItemEditorComponent},
  {path: '**', redirectTo: '/list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
