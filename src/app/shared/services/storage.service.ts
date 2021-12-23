import { Injectable, Provider } from '@angular/core';
import { ItemVendaModel } from '../models/item-venda.model';
import { ProdutoModel } from '../models/produto.model';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  CARRINHO_KEY = 'carrinho';
  /**Responsável por gerenciar o carrinho da aplicação */
  constructor() {}

  getCarrinho() : ItemVendaModel[] {
    let carrinho = localStorage.getItem(this.CARRINHO_KEY);

    if (carrinho != null) {
      return JSON.parse(carrinho);  
    } else {
      return [];
    } 
  }
  setCarrinho(carrinho : ItemVendaModel[]) {

    if(carrinho != null){
      localStorage.setItem('carrinho', JSON.stringify(carrinho))
    }else{
      localStorage.removeItem('carrinho');
    }

    }                     //um item seria um produto + qtde
    addItemCarrinho(produto: ProdutoModel, quantidade:number){
      let item = new ItemVendaModel();

      item.produto = produto;
      item.quantidade = quantidade;
          //pegar item do localStorage
      let carrinho = this.getCarrinho();
          //push adiciona um item no fim do array 
      carrinho.push(item);

      this.setCarrinho(carrinho);

  }
}
