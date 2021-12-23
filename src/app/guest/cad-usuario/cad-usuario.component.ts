import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { GuestService } from '../guest.service';

@Component({
  selector: 'app-cad-usuario',
  templateUrl: './cad-usuario.component.html',
  styleUrls: ['./cad-usuario.component.css'],
})
export class CadUsuarioComponent implements OnInit {
  id: number = 0;
  perfisSelected: any = [];
  endSelect: any = [];

  meuFormuser: FormGroup = new FormGroup({
    nome: new FormControl(),
    email: new FormControl(),
    nascimento: new FormControl(),
    senha: new FormControl(),
    confirmarsenha: new FormControl(),
    telefone: new FormControl(),
    celular: new FormControl(),
    cpf: new FormControl(),
    perfis: new FormControl(),
    idEndereco: new FormControl(),
    dataDeNascimento: new FormControl(),

    endereco: new FormGroup({
      cep: new FormControl(),
      logradouro: new FormControl(),
      numero: new FormControl(),
      complemento: new FormControl(),
      cidade: new FormControl(),
      bairro: new FormControl(),
      estado: new FormControl(),
    }),
  });
  constructor(
    private userService: GuestService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.activatedRoute);

    this.activatedRoute.params.subscribe((parametros: any) => {
      console.log(parametros);
      //Edita
      if (parametros.id) {
        this.id = parametros.id;

        this.userService.getOne(this.id).subscribe((resposta: any) => {
          console.log(resposta);

          this.meuFormuser.patchValue(resposta);
        });
      }
    });
  }

  onSubmit() {
    console.log(this.meuFormuser.value);

    this.userService.save(this.meuFormuser.value);

    if (this.id > 0) {
      this.meuFormuser.value.perfis = null;

      this.userService
        .update(this.id, this.meuFormuser.value)
        .subscribe((dados) => {
          console.log(dados);
          alert(` Atualizado com sucesso!`);
          this.meuFormuser.reset();
          this.router.navigate(['/usuarios']);
        });
    } else {
      this.userService
        .save(this.meuFormuser.value)
        .subscribe((resposta: any) => {
          alert(`Usuário cadastrado com sucesso!`);
          console.log(resposta);
          this.meuFormuser.reset();
          this.router.navigate(['/usuarios']);
        });
    }
  }
}
