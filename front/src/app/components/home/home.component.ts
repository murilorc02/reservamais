import { Component } from '@angular/core';
import { InstituicoesService } from './instituicoes.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  title = 'Página inicial';
  novaInstituicaoNome = '';
  instituicoes: {id?: number, nome: string} [] = [];

  constructor(private instituicoesService: InstituicoesService, private router: Router) {
  }

  ngOnInit() {    
    this.carregarInstituicoes();
  }

  carregarInstituicoes() {
    this.instituicoesService.findAll().subscribe({
      next: (data) => {
        this.instituicoes = data;
      },
      error: (error) => {
        console.error('Erro ao carregar instituições', error);
      }
    })
  }

  adicionarInstituicao() {

    if (this.novaInstituicaoNome.trim()) {
      const instituicao = { nome: this.novaInstituicaoNome };
      
      this.instituicoesService.createInstituicao(instituicao).subscribe({
        next: (response) => {
          console.log('Instituição criada com sucesso:', response);
          this.instituicoes.push(response);
          this.novaInstituicaoNome = '';
        },
        error: (err) => {
          console.error('Erro ao adicionar instituição:', err);
        }
      });
    } else {
      console.log('Nome da instituição não pode ser vazio');
    }
  }

  removerInstituicao(id: number) {
    this.instituicoesService.removeInstituicao(id).subscribe({
      next: () => {
        // Remove a instituição da lista local após a exclusão no back-end
        this.instituicoes = this.instituicoes.filter(instituicao => instituicao.id !== id);
        console.log('Instituição removida com sucesso');
      },
      error: (err) => {
        console.error('Erro ao remover instituição:', err);
      }
    });
  }

  atualizarInstituicao(instituicao: { id?: number; nome: string }) {
    if (instituicao.id) { // Só chama o serviço se o ID existir
      this.instituicoesService.updateInstituicao({ 
        id: instituicao.id, 
        nome: instituicao.nome 
      }).subscribe({
        next: () => {
          console.log('Instituição atualizada com sucesso:', instituicao.nome);
        },
        error: (err) => {
          console.error('Erro ao atualizar instituição:', err);
        },
      });
    } else {
      console.warn('Instituição sem ID não pode ser atualizada:', instituicao.nome);
    }
  }  

  irParaReservaAdm(id: number) {
    this.router.navigate([`/reserva-adm/${id}`]); 
  }

}