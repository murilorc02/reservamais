import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Definindo as interfaces para os dados
export interface Instituicao {
  id: number;
  nome: string;
  horarios: Horario[];
  blocos: Bloco[];
}

export interface Bloco {
  id: number;
  nome: string;
  instituicao: Instituicao;
  salas: Sala[];
}

export interface Sala {
  id: number;
  nome: string;
  bloco: Bloco;
}

export interface Horario {
  id: number;
  hora: string;
  instituicao: Instituicao;
}

@Injectable({
  providedIn: 'root',
})
export class ReservaAdmService {
  private baseUrl = 'http://localhost:3000/instituicoes'; // URL base da API

  constructor(private http: HttpClient) {}

  // Criar Bloco
  createBloco(instituicaoId: number, bloco: { instituicaoId: number, nome: string }): Observable<Bloco> {
    return this.http.post<Bloco>(`${this.baseUrl}/${instituicaoId}/blocos`, bloco);
  }

  // Criar Sala
  createSala(instituicaoId: number, blocoId: number, sala: { nome: string, blocoId: number }): Observable<Sala> {
    return this.http.post<Sala>(`${this.baseUrl}/${instituicaoId}/blocos/${blocoId}/salas`, sala);
  }

  // Criar Horário
  createHorario(
    instituicaoId: number,
    horario: { instituicaoId: number, hora: string;}
  ): Observable<Horario> {
    return this.http.post<Horario>(`${this.baseUrl}/${instituicaoId}/horarios`, horario);
  }

  // Obter as Instituições
  getInstituicoes(): Observable<Instituicao[]> {
    return this.http.get<Instituicao[]>(`${this.baseUrl}`);
  }

  // Obter os Blocos de uma Instituição
  getBlocos(instituicaoId: number): Observable<Bloco[]> {
    return this.http.get<Bloco[]>(`${this.baseUrl}/${instituicaoId}/blocos`);
  }

  // Obter as Salas de um Bloco
  getSalas(instituicaoId: number, blocoId: number): Observable<Sala[]> {
    return this.http.get<Sala[]>(`${this.baseUrl}/${instituicaoId}/blocos/${blocoId}/salas`);
  }

  // Obter os Horários de uma Sala
  getHorarios(instituicaoId: number, salaId: number): Observable<Horario[]> {
    return this.http.get<Horario[]>(`${this.baseUrl}/${instituicaoId}/horarios`);
  }

  updateBloco(instituicaoId: number, blocoId: number, bloco: { nome: string }): Observable<Bloco> {
    return this.http.patch<Bloco>(`${this.baseUrl}/${instituicaoId}/blocos/${blocoId}`, bloco);
  }

  deleteBloco(instituicaoId: number, blocoId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${instituicaoId}/blocos/${blocoId}`);
  }

  updateSala(instituicaoId: number, blocoId: number, salaId: number, sala: { nome: string }): Observable<Sala> {
    return this.http.patch<Sala>(`${this.baseUrl}/${instituicaoId}/blocos/${blocoId}/salas/${salaId}`, sala);
  }

  deleteSala(instituicaoId: number, blocoId: number, salaId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${instituicaoId}/blocos/${blocoId}/salas/${salaId}`);
  }

  updateHorario(instituicaoId: number, horarioId: number, horario: { hora: string }): Observable<Horario> {
    return this.http.patch<Horario>(`${this.baseUrl}/${instituicaoId}/horarios/${horarioId}`, horario);
  }

  deleteHorario(instituicaoId: number, horarioId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${instituicaoId}/horarios/${horarioId}`);
  }

}
