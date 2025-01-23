import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

constructor(private http: HttpClient) { }

  url = 'http://localhost:8080/api/usuario';

  async gerarSenha(formData: any) {
    return this.http.post<Usuario[]>(`${this.url}/gerarSenha`, formData)
  }

}
