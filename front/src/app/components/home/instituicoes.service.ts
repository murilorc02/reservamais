import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Instituicao {
  id?: number;
  nome: string;
}

@Injectable({
  providedIn: 'root'
})
export class InstituicoesService {

  private apiUrl = 'http://localhost:3000/instituicoes'

  constructor(private http: HttpClient) {}

  createInstituicao(instituicao: Instituicao): Observable<Instituicao> {
    return this.http.post<Instituicao>(this.apiUrl, instituicao);
  }

  // Método para obter todas as instituições
  findAll(): Observable<Instituicao[]> {
    return this.http.get<Instituicao[]>(this.apiUrl);
  }

  updateInstituicao(instituicao: { id: number; nome: string }): Observable<Instituicao> {
    return this.http.patch<Instituicao>(`${this.apiUrl}/${instituicao.id}`, instituicao);
  }  

  removeInstituicao(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
