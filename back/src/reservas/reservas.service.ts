import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reserva } from './entities/reserva.entity';
import { Repository } from 'typeorm';


@Injectable()
export class ReservasService {
  constructor(
    @InjectRepository(Reserva)
    private reservaRepository: Repository<Reserva>,
  ) {}
  
  createReserva(reserva: Reserva): Promise<Reserva> {
    return this.reservaRepository.save(reserva);
  }

  findAll(): Promise<Reserva[]> {
    return this.reservaRepository.find();
  }

  findOne(id: number): Promise<Reserva> {
    return this.reservaRepository.findOneBy({ id });
  }

  async updateReserva(id: number, reserva: Reserva): Promise<void> {
    await this.reservaRepository.update(id, reserva);
  }

  async removeReserva(id: number): Promise<void> {
    await this.reservaRepository.delete(id);
  }
}
