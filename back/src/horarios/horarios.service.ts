import { Injectable } from '@nestjs/common';
import { Horario } from './entities/horario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HorariosService {
  constructor(
    @InjectRepository(Horario)
    private horarioRepository: Repository<Horario>,
  ) {}
  
  createHorario(horario: Horario): Promise<Horario> {
    return this.horarioRepository.save(horario);
  }

  findAll(): Promise<Horario[]> {
    return this.horarioRepository.find();
  }

  findOne(id: number): Promise<Horario> {
    return this.horarioRepository.findOneBy({ id });
  }

  async updateHorario(id: number, horario: Horario): Promise<void> {
    await this.horarioRepository.update(id, horario);
  }

  async removeHorario(id: number): Promise<void> {
    await this.horarioRepository.delete(id);
  }

}
