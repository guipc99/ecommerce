import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  

  constructor(private http: HttpClient) {
    
   }
   getEndereco(){
    return this.http.get(`https://api.fabrizioborelli.com.br/ecommerce/enderecos`);
  }
  deletarendereco(idEndereco: any){
    return this.http.delete(`https://api.fabrizioborelli.com.br/ecommerce/enderecos/${idEndereco}`)
  }
}
