import { Injectable } from '@nestjs/common';
import { Sala } from './entities/sala.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SalasService {

  constructor(
    @InjectRepository(Sala)
    private SalaRepository: Repository<Sala>,
  ) {}
  
  createSala(sala: Sala): Promise<Sala> {
    return this.SalaRepository.save(sala);
  }

  findAll(): Promise<Sala[]> {
    return this.SalaRepository.find();
  }

  findOne(id: number): Promise<Sala> {
    return this.SalaRepository.findOneBy({ id });
  }

  async updateSala(id: number, sala: Sala): Promise<void> {
    await this.SalaRepository.update(id, sala);
  }

  async removeSala(id: number): Promise<void> {
    await this.SalaRepository.delete(id);
  }

}
