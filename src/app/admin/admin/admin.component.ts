import { Component, OnInit } from '@angular/core';

import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  produtos: any = [];
  
  dados: any;
  id:number = 0;
  constructor(private admService: AdminService) { }

  ngOnInit(): void {
    
  this.retornarTodos();
  }
  onClickApagar(dados: any) {
    console.log(dados)
    this.admService.deletar(dados.idProduto)
      .subscribe(
        ()=> {
          let index = this.produtos.findIndex( (obj:any) =>  dados.idProduto == obj.idProduto );
          this.produtos.splice(index,1);
          alert(`Produto ${dados.idProduto} deletado com sucesso` );
        }
      );
  }
  retornarTodos(){
    this.admService.getAll()
    .subscribe(
        (dados: any)=>{
          this.produtos = dados;
        
        }
      );
  }
}
