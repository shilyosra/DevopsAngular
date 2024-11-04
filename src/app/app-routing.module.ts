import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateFoyerComponent } from './update-foyer/update-foyer.component';

const routes: Routes = [
  { path: 'update-foyer/:id', component: UpdateFoyerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
