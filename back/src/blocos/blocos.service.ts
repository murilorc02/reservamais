import { Injectable } from '@nestjs/common';
import { Bloco } from './entities/bloco.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BlocosService {

  constructor(
    @InjectRepository(Bloco)
    private blocoRepository: Repository<Bloco>,
  ) {}
  
  createBloco(bloco: Bloco): Promise<Bloco> {
    return this.blocoRepository.save(bloco);
  }

  findAll(): Promise<Bloco[]> {
    return this.blocoRepository.find();
  }

  findOne(id: number): Promise<Bloco> {
    return this.blocoRepository.findOneBy({ id });
  }

  async updateBloco(id: number, bloco: Bloco): Promise<void> {
    await this.blocoRepository.update(id, bloco);
  }

  async removeBloco(id: number): Promise<void> {
    await this.blocoRepository.delete(id);
  }
  
}