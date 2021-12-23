import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminFormComponent } from '../admin-form/admin-form.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:'admin', component: AdminComponent},
  {path:'admin/new', component:AdminFormComponent},
  {path:'admin/:idProduto', component:AdminFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
