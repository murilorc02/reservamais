import { Injectable } from '@nestjs/common';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';
import { Sala } from './entities/sala.entity';

@Injectable()
export class SalasService {

  private readonly salas : Sala[] = [];
  private id = 1;

  create(createSalaDto: CreateSalaDto) {
    const newSala = {
      id: this.id,
      nome: createSalaDto.nome
    }
    
    this.id++;

    this.salas.push(newSala);
    
    return newSala;
  }

  findAll() {
    return this.salas;
  }

  findOne(id: number) {
    const sala = this.salas.find(sala => sala.id == id);
    return sala;
  }

  update(id: number, updateSalaDto: UpdateSalaDto) {
    const sala = this.findOne(id);
    sala.nome = updateSalaDto.nome;
    return;
  }

  remove(id: number) {
    const sala = this.findOne(id);
    const salaIndex = this.salas.findIndex((sala) => sala.id == id);
    this.salas.splice(salaIndex, 1);
    return this.salas;
  }
}
