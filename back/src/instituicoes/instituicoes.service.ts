import { Injectable } from '@nestjs/common';
import { Instituicao } from './entities/instituicao.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class InstituicoesService {

  constructor(
    @InjectRepository(Instituicao)
    private instituicaoRepository: Repository<Instituicao>,
  ) {}
  
  createInstituicao(instituicao: Instituicao): Promise<Instituicao> {
    return this.instituicaoRepository.save(instituicao);
  }

  findAll(): Promise<Instituicao[]> {
    return this.instituicaoRepository.find();
  }

  findOne(id: number): Promise<Instituicao> {
    return this.instituicaoRepository.findOneBy({ id });
  }

  async updateInstituicao(id: number, instituicao: Instituicao): Promise<void> {
    await this.instituicaoRepository.update(id, instituicao);
  }

  async removeInstituicao(id: number): Promise<void> {
    await this.instituicaoRepository.delete(id);
  }
  
}
