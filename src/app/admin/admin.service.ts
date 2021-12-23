import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
 
  constructor(private http: HttpClient) { }
  getAll() {
   

     return this.http.get('https://api.fabrizioborelli.com.br/ecommerce/produtos');
    
           
  }

  save(body: any){
    return this.http.post('https://api.fabrizioborelli.com.br/ecommerce/produtos', body)
  }

  update(idProduto: number, body: any){
    return this.http.patch(`https://api.fabrizioborelli.com.br/ecommerce/produtos/${idProduto}`, body)
  }

  getOne(idProduto: number) {
    return this.http.get(`https://api.fabrizioborelli.com.br/ecommerce/produtos/${idProduto}`);
  }
  deletar(idProduto: number) {
    return this.http.delete(`https://api.fabrizioborelli.com.br/ecommerce/produtos/${idProduto}`);
  }
    getAllUsuarios(){
      return this.http.get( 'https://api.fabrizioborelli.com.br/ecommerce/usuarios/')
    }
    saveuser(body: any) {
      return this.http.post(
        'https://api.fabrizioborelli.com.br/ecommerce/usuarios/', body);
    }
    updateuser(id:number, body:any){
      return this.http.patch(`https://api.fabrizioborelli.com.br/ecommerce/usuarios/${id}`, body)
    }
    deletaruser(id:number){
      return this.http.delete(`https://api.fabrizioborelli.com.br/ecommerce/usuarios/${id}`)
    }
    getOneuser(id:number){
      return this.http.get(`https://api.fabrizioborelli.com.br/ecommerce/usuarios/${id}`)
    }
  }
