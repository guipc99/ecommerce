import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadUsuarioComponent } from './cad-usuario/cad-usuario.component';
import { ProdutosComponent } from './produtos/produtos.component';


const routes: Routes = [
  {path:'produtos', component: ProdutosComponent},
 
  {path: 'usuarios/new/:id', component: CadUsuarioComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
