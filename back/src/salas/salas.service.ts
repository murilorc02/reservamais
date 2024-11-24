import { Injectable, NotFoundException } from '@nestjs/common';
import { Sala } from './entities/sala.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SalasService {
  constructor(
    @InjectRepository(Sala)
    private salaRepository: Repository<Sala>,
  ) {}

  async createSala(instituicaoId: number, blocoId: number, sala: Sala): Promise<Sala> {
    sala.bloco = { id: blocoId, instituicao: { id: instituicaoId } } as any; // Associa sala ao bloco e instituição
    return this.salaRepository.save(sala);
  }

  async findAll(instituicaoId: number, blocoId: number): Promise<Sala[]> {
    return this.salaRepository.find({
      where: { bloco: { id: blocoId, instituicao: { id: instituicaoId } } },
      relations: ['bloco', 'bloco.instituicao'],
    });
  }

  async findOne(instituicaoId: number, blocoId: number, id: number): Promise<Sala> {
    const sala = await this.salaRepository.findOne({
      where: { id, bloco: { id: blocoId, instituicao: { id: instituicaoId } } },
      relations: ['bloco', 'bloco.instituicao'],
    });
    if (!sala) {
      throw new NotFoundException('Sala não encontrada.');
    }
    return sala;
  }

  async updateSala(instituicaoId: number, blocoId: number, id: number, sala: Sala): Promise<Sala> {
    const existingSala = await this.findOne(instituicaoId, blocoId, id);
    Object.assign(existingSala, sala);
    return this.salaRepository.save(existingSala);
  }

  async removeSala(instituicaoId: number, blocoId: number, id: number): Promise<void> {
    const sala = await this.findOne(instituicaoId, blocoId, id);
    await this.salaRepository.remove(sala);
  }
}
