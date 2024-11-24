import { Injectable, NotFoundException } from '@nestjs/common';
import { Horario } from './entities/horario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HorariosService {
  constructor(
    @InjectRepository(Horario)
    private horarioRepository: Repository<Horario>,
  ) {}

  async createHorario(instituicaoId: number, horario: Horario): Promise<Horario> {
    horario.instituicao = { id: instituicaoId } as any;
    return this.horarioRepository.save(horario);
  }

  async findAll(instituicaoId: number): Promise<Horario[]> {
    return this.horarioRepository.find({
      where: { instituicao: { id: instituicaoId } },
      relations: ['instituicao'],
    });
  }

  // Busca um horário específico de uma instituicao
  async findOne(instituicaoId: number, id: number): Promise<Horario> {
    const horario = await this.horarioRepository.findOne({
      where: { id, instituicao: { id: instituicaoId } },
      relations: ['instituicao'],
    });
    if (!horario) {
      throw new NotFoundException('Horário não encontrado para esta instituicao.');
    }
    return horario;
  }

  // Atualiza um horário de uma instituicao
  async updateHorario(instituicaoId: number, id: number, horario: Horario): Promise<Horario> {
    const existingHorario = await this.findOne(instituicaoId, id); // Garante que o horário pertence à instituicao
    Object.assign(existingHorario, horario); // Atualiza os campos necessários
    return this.horarioRepository.save(existingHorario); // Salva as alterações
  }

  async removeHorario(instituicaoId: number, id: number): Promise<void> {
    const horario = await this.horarioRepository.findOne({
      where: { id, instituicao: { id: instituicaoId } },
    });
    if (!horario) {
      throw new NotFoundException('Horário não encontrado.');
    }
    await this.horarioRepository.remove(horario);
  }
}
