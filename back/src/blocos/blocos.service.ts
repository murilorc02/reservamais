import { Injectable } from '@nestjs/common';
import { CreateBlocoDto } from './dto/create-bloco.dto';
import { UpdateBlocoDto } from './dto/update-bloco.dto';
import { Bloco } from './entities/bloco.entity';

@Injectable()
export class BlocosService {

  private readonly blocos : Bloco[] = [];
  private id = 1;

  create(createBlocoDto: CreateBlocoDto) {
    const newBloco = {
      id: this.id,
      nome: createBlocoDto.nome
    }
    this.id++;
    this.blocos.push(newBloco);
    return newBloco;
  }

  findAll() {
    return this.blocos;
  }

  findOne(id: number) {
    const bloco = this.blocos.find(blocos => blocos.id == id);
    return bloco;
  }

  update(id: number, updateBlocoDto: UpdateBlocoDto) {
    const bloco = this.findOne(id);
    bloco.nome = updateBlocoDto.nome;
    
    return bloco;
  }

  remove(id: number) {
    const bloco = this.findOne(id);
    const blocoIndex = this.blocos.findIndex((bloco) => bloco.id == id);
    this.blocos.splice(blocoIndex, 1);

    return this.blocos;
  }
}
