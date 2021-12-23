import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { AdminComponent } from './admin/admin/admin.component';
import { CadUsuarioComponent } from './guest/cad-usuario/cad-usuario.component';
import { ProdutosComponent } from './guest/produtos/produtos.component';
import { UsuariosComponent } from './admin/usuarios/usuarios.component';
import { CarrinhoComponent } from './guest/carrinho/carrinho.component';

const routes: Routes = [
  {path:'produtos', component: ProdutosComponent},
  {path:'usuarios', component: UsuariosComponent},
  {path:'usuarios/new', component: CadUsuarioComponent}, 
  {path: 'admin', component: AdminComponent},
  {path:'admin/new', component: AdminFormComponent},
  {path:'carrinho', component: CarrinhoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
