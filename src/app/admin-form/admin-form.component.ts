import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin/admin.service';
import { CategoriaService } from '../shared/services/categorias.service';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css'],
})
export class AdminFormComponent implements OnInit {
  id: number = 0;
  categoriasSelect: any = [];

  meuForm: FormGroup = new FormGroup({
    nome: new FormControl(),
    preco: new FormControl(),
    descricao: new FormControl(),
    categorias: new FormControl(),
    imagens: new FormControl(),
  });

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit(): void {
    console.log(this.activatedRoute);

    this.activatedRoute.params.subscribe((parametros: any) => {
      console.log(parametros);
      //Edita
      if (parametros.idProduto) {
        this.id = parametros.idProduto;
        this.adminService.getOne(this.id).subscribe((resposta: any) => {
          console.log(resposta);
          resposta.categorias = resposta.categorias[0].idCategoria;
          this.meuForm.patchValue(resposta);
        });
      }
    });
    this.getAllCategorias();
  }

  onSubmit() {
    let index = this.categoriasSelect.findIndex(
      (x: any) => x.idCategoria == this.meuForm.value.categorias
    );

    console.log(index);
    console.log([this.categoriasSelect[index]]);
    this.meuForm.value.imagens = [];
    this.meuForm.value.categorias = [this.categoriasSelect[index]];

    if (this.id > 0) {
      this.adminService.update(this.id, this.meuForm.value).subscribe({
        next: (produto) => {
          alert('Produto atualizado com sucesso!');
          console.log(produto);
        },
      });
    } else {
      console.log(this.meuForm.value);

      this.adminService.save(this.meuForm.value).subscribe({
        next: (produto) => {
          alert('Produto cadastrado com sucesso!');
          console.log(produto);
        },
      });
    }
  }
  private getAllCategorias() {
    this.categoriaService.getAll().subscribe({
      next: (categorias: any) => {
        this.categoriasSelect = categorias;
      },
    });
  }
}
