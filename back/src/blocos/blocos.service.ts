import { Injectable, NotFoundException } from '@nestjs/common';
import { Bloco } from './entities/bloco.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Instituicao } from 'src/instituicoes/entities/instituicao.entity';

@Injectable()
export class BlocosService {
  constructor(
    @InjectRepository(Bloco)
    private blocoRepository: Repository<Bloco>,
    @InjectRepository(Instituicao)
    private instituicaoRepository: Repository<Instituicao>,
  ) {}

  // Criação de um bloco associado a uma instituição
  async createBloco(instituicaoId: number, bloco: Bloco): Promise<Bloco> {
    const instituicao = await this.instituicaoRepository.findOneBy({ id: instituicaoId });
    if (!instituicao) {
      throw new NotFoundException('Instituição não encontrada.');
    }
    bloco.instituicao = instituicao; // Associa o bloco à instituição
    return this.blocoRepository.save(bloco);
  }

  // Retorna todos os blocos de uma instituição
  async findAll(instituicaoId: number): Promise<Bloco[]> {
    return this.blocoRepository.find({
      where: { instituicao: { id: instituicaoId } }, // Filtra pelo id da instituição
      relations: ['instituicao'], // Garante o carregamento do relacionamento
    });
  }

  // Busca um bloco específico de uma instituição
  async findOne(instituicaoId: number, id: number): Promise<Bloco> {
    const bloco = await this.blocoRepository.findOne({
      where: { id, instituicao: { id: instituicaoId } },
      relations: ['instituicao'], // Garante o carregamento do relacionamento
    });
    if (!bloco) {
      throw new NotFoundException('Bloco não encontrado para esta instituição.');
    }
    return bloco;
  }

  // Atualiza um bloco específico de uma instituição
  async updateBloco(instituicaoId: number, id: number, bloco: Bloco): Promise<Bloco> {
    const existingBloco = await this.findOne(instituicaoId, id); // Garante que o bloco pertence à instituição
    Object.assign(existingBloco, bloco); // Atualiza os campos necessários
    return this.blocoRepository.save(existingBloco); // Salva as alterações no banco
  }

  // Remove um bloco específico de uma instituição
  async removeBloco(instituicaoId: number, id: number): Promise<void> {
    const bloco = await this.findOne(instituicaoId, id); // Garante que o bloco pertence à instituição
    await this.blocoRepository.remove(bloco);
  }
}
