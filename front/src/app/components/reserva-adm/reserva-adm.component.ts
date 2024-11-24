import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bloco, Horario, ReservaAdmService, Sala } from './reserva-adm.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reserva-adm',
  standalone: true,
  templateUrl: './reserva-adm.component.html',
  styleUrls: ['./reserva-adm.component.css'],
  imports: [CommonModule],
})
export class ReservaAdmComponent implements OnInit {


  constructor(
    private reservaAdmService: ReservaAdmService,
    private route: ActivatedRoute
  ) {}

  instituicaoId!: number;
  instituicaoNome!: string;

  blocos: Bloco[] = [];
  salas: Sala[] = [];
  horarios: Horario[] = [];

  blocoSelecionado?: Bloco;
  salaSelecionada?: Sala;

  ngOnInit(): void {
    // Obtém o ID e nome da instituição a partir do parâmetro de rota
    this.instituicaoId = Number(this.route.snapshot.paramMap.get('id'));

    if (isNaN(this.instituicaoId)) {
      console.error('ID inválido:', this.instituicaoId);
      return; // Ou redirecionar para uma página de erro ou retornar.
    }    

    this.instituicaoNome = this.route.snapshot.paramMap.get('nome') || 'Instituição';

    // Carrega os blocos
    this.carregarBlocos();
  }

  carregarBlocos(): void {
    this.reservaAdmService.getBlocos(this.instituicaoId).subscribe({
      next: (data) => {
        this.blocos = data;
        console.log('carregou', this.blocos);
      },
      error: (err) => console.error('Erro ao carregar blocos:', err),
    });
  }

  carregarSalas(blocoId: number): void {
    // const target = event.target as HTMLSelectElement; // Garantimos o tipo correto aqui
    // const blocoId = Number(target.value);
  
    // if (!blocoId) {
    //   console.warn('Nenhum bloco válido selecionado');
    //   return;
    // }
  
    this.blocoSelecionado = this.blocos.find(bloco => bloco.id === blocoId);
  
    if (this.blocoSelecionado) {
      this.reservaAdmService.getSalas(this.instituicaoId, blocoId).subscribe({
        next: (data) => {
          this.salas = data; // Atualiza as salas com os dados recebidos
        },
  
        error: (err) => console.error('Erro ao carregar salas:', err),
      });
    }
  }

  carregarHorarios(salaId: number): void {
    this.salaSelecionada = this.salas.find(sala => sala.id === salaId);
    this.reservaAdmService.getHorarios(this.instituicaoId, salaId).subscribe({
      next: (data) => {
        this.horarios = data.map(horario => ({
          id: horario.id,
          hora: horario.hora,
          instituicao: horario.instituicao
        }));
      },
      error: (err) => console.error('Erro ao carregar horários:', err),
    });
  }

  adicionarBloco(): void {
    const nome = prompt('Digite o nome do bloco:');
    const instituicaoId = this.instituicaoId;
    if (nome) {
      this.reservaAdmService.createBloco(this.instituicaoId, { instituicaoId, nome }).subscribe({
        next: (bloco) => {
          this.blocos.push(bloco);
          console.log('Bloco adicionado com sucesso:', bloco);
        },
        error: (err) => console.error('Erro ao adicionar bloco:', err),
      });
    }
  }

  adicionarSala(): void {
    const nome = prompt('Digite o nome da sala:');
    if (nome && this.blocoSelecionado) {
      const blocoId = this.blocos.find(bloco => bloco.id)?.id;
      if (blocoId) {
        this.reservaAdmService.createSala(this.instituicaoId, blocoId, { nome, blocoId }).subscribe({
          next: (sala) => {
            this.salas.push(sala);
            console.log('Sala adicionada com sucesso:', sala);
          },
          error: (err) => console.error('Erro ao adicionar sala:', err),
        });
      } else {
        console.error('Erro: Bloco selecionado não possui um ID válido.');
      }
    } else {
      console.error('Erro: Nome da sala ou bloco selecionado inválido.');
    }
  
  }

  adicionarHorario(): void {
    const hora = prompt('Digite o horário (HH:mm):');
    if (hora && this.salaSelecionada) {
      const instituicaoId = this.instituicaoId;
      this.reservaAdmService.createHorario(this.instituicaoId, { instituicaoId, hora }).subscribe({
        next: (horario) => {
          this.horarios.push({ id: horario.id, hora: horario.hora, instituicao: horario.instituicao });
          console.log('Horário adicionado com sucesso:', horario);
        },
        error: (err) => console.error('Erro ao adicionar horário:', err),
      });
    }
  }

  editarBloco(bloco: Bloco): void {
    const novoNome = prompt('Editar nome do bloco:', bloco.nome);
    if (novoNome) {
      this.reservaAdmService.updateBloco(this.instituicaoId, bloco.id, { nome: novoNome }).subscribe({
        next: (updatedBloco) => {
          bloco.nome = updatedBloco.nome;
          console.log('Bloco editado com sucesso:', updatedBloco);
        },
        error: (err) => console.error('Erro ao editar bloco:', err),
      });
    }
  }

  excluirBloco(id: number): void {
    if (confirm('Tem certeza que deseja excluir este bloco?')) {
      this.reservaAdmService.deleteBloco(this.instituicaoId, id).subscribe({
        next: () => {
          this.blocos = this.blocos.filter(bloco => bloco.id !== id);
          console.log('Bloco excluído com sucesso');
        },
        error: (err) => console.error('Erro ao excluir bloco:', err),
      });
    }
  }

  editarSala(sala: Sala): void {
    const blocoId = this.blocoSelecionado?.id;
    
    if(!blocoId) {
      console.error("Nenhum bloco selecionado");
      return;
    }

    const novoNome = prompt('Editar nome da sala:', sala.nome);
    if (novoNome) {
      this.reservaAdmService.updateSala(this.instituicaoId, sala.id, blocoId, { nome: novoNome }).subscribe({
        next: (updatedSala) => {
          sala.nome = updatedSala.nome;
          console.log('Sala editada com sucesso:', updatedSala);
        },
        error: (err) => console.error('Erro ao editar sala:', err),
      });
    }
  }

  excluirSala(id: number): void {
    const blocoId = this.blocoSelecionado?.id;
    
    if(!blocoId) {
      console.error("Nenhum bloco selecionado");
      return;
    }

    if (confirm('Tem certeza que deseja excluir esta sala?')) {
      this.reservaAdmService.deleteSala(this.instituicaoId, blocoId, id).subscribe({
        next: () => {
          this.salas = this.salas.filter(sala => sala.id !== id);
          console.log('Sala excluída com sucesso');
        },
        error: (err) => console.error('Erro ao excluir sala:', err),
      });
    }
  }

  editarHorario(horario: Horario): void {
    const novaHora = prompt('Editar horário:', horario.hora);
    if (novaHora) {
      this.reservaAdmService.updateHorario(this.instituicaoId, horario.id, { hora: novaHora }).subscribe({
        next: (updatedHorario) => {
          horario.hora = updatedHorario.hora;
          console.log('Horário editado com sucesso:', updatedHorario);
        },
        error: (err) => console.error('Erro ao editar horário:', err),
      });
    }
  }

  excluirHorario(id: number): void {
    if (confirm('Tem certeza que deseja excluir este horário?')) {
      this.reservaAdmService.deleteHorario(this.instituicaoId, id).subscribe({
        next: () => {
          this.horarios = this.horarios.filter(horario => horario.id !== id);
          console.log('Horário excluído com sucesso');
        },
        error: (err) => console.error('Erro ao excluir horário:', err),
      });
    }
  }
}
