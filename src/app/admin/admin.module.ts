import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AdminService } from './admin.service';
import { AdminFormComponent } from '../admin-form/admin-form.component';
import { SharedModule } from '../shared/shared.module';
import { UsuariosComponent } from './usuarios/usuarios.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminFormComponent,
    UsuariosComponent
    
   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,

    
  ], 
  exports: [
    AdminComponent,
    
  ]
})
export class AdminModule { }
