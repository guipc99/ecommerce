import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GuestService {
  getAll() {
    return this.http.get(
      'https://api.fabrizioborelli.com.br/ecommerce/produtos/'
    );
  }
  getAllUsuarios(){
    return this.http.get( 'https://api.fabrizioborelli.com.br/ecommerce/usuarios/')
  }
  save(body: any) {
    return this.http.post(
      'https://api.fabrizioborelli.com.br/ecommerce/usuarios/', body);
  }
  update(id:number, body:any){
    return this.http.patch(`https://api.fabrizioborelli.com.br/ecommerce/usuarios/${id}`, body)
  }
  deletar(id:number){
    return this.http.delete(`https://api.fabrizioborelli.com.br/ecommerce/usuarios/${id}`)
  }
  getOne(id:number){
    return this.http.get(`https://api.fabrizioborelli.com.br/ecommerce/usuarios/${id}`)
  }
  getEndereco(){
    return this.http.get( 'https://api.fabrizioborelli.com.br/ecommerce/enderecos/')
  }
  constructor(private http: HttpClient) {}
}
