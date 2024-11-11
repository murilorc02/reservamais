import { Injectable } from '@nestjs/common';
import { CreateInstituicaoDto } from './dto/create-instituicao.dto';
import { UpdateInstituicaoDto } from './dto/update-instituicao.dto';
import { Instituicao } from './entities/instituicao.entity';

@Injectable()
export class InstituicoesService {

  private readonly instituicoes : Instituicao [] = [];
  private id = 1;

  create(createInstituicoeDto: CreateInstituicaoDto) {
    const newInstituicao = {
      id: this.id,
      nome: createInstituicoeDto.nome
    }
    this.id++;
    this.instituicoes.push(newInstituicao);

    return newInstituicao;
  }

  findAll() {
    return this.instituicoes;
  }

  findOne(id: number) {
    const instituicao = this.instituicoes.find(instituicao => instituicao.id == id);
    return instituicao;
  }

  update(id: number, updateInstituicaoDto: UpdateInstituicaoDto) {
    const instituicao = this.findOne(id);
    instituicao.nome = updateInstituicaoDto.nome;
    return instituicao;
  }

  remove(id: number) {
    const instituicao = this.findOne(id);
    const instituicaoIndex = this.instituicoes.findIndex((instituicao) => instituicao.id == id);
    this.instituicoes.splice(instituicaoIndex, 1);

    return this.findAll;
  }
}
