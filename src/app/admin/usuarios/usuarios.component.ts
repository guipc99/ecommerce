import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EnderecoService } from 'src/app/shared/endereco.service';
import { GuestService } from '../../guest/guest.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  usuarios: any = [];
  endereco: any = [];

  constructor(
    private userService: GuestService,
    private endService: EnderecoService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.userService.getAllUsuarios().subscribe((dados) => {
      this.usuarios = dados;
      console.log(this.usuarios);
    });
    this.getAllEnd();
  }
  onApagarClick(usuarios: any) {
    console.log(usuarios);

    this.userService
      .deletar(usuarios.id)
    
      .subscribe(() => {
        
        let index = this.usuarios.findIndex(
          (obj: any) => usuarios.id == obj.id
        );
        console.log(index);
        this.usuarios.splice(index, 1);
        alert(`Usuario ${usuarios.id} deletado com sucesso!`);

        
      });
  }
  getAllEnd() {
    this.userService.getEndereco().subscribe((dados) => {
      this.endereco = dados;
    });
  }
}
