import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { ProdutosComponent } from './produtos/produtos.component';
import { SharedModule } from '../shared/shared.module';
import { CadUsuarioComponent } from './cad-usuario/cad-usuario.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';



@NgModule({
  declarations: [
    ProdutosComponent,
    CadUsuarioComponent,
    CarrinhoComponent,
  
  ],
  imports: [
    CommonModule,
    GuestRoutingModule,
    SharedModule
  ],
  exports:[
    ProdutosComponent,
   
  ]
})
export class GuestModule { }  
