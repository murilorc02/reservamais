import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { NotFoundError } from 'rxjs';

@Injectable()
export class UsuarioService {

  private readonly usuarios : Usuario[] = [];
  private id:number = 1;

  create(createUsuarioDto: CreateUsuarioDto) {
    const newUsuario = {
      id: this.id,
      login: createUsuarioDto.login,
      senha: createUsuarioDto.senha,
      nome: createUsuarioDto.nome,
      cpf: createUsuarioDto.cpf,
      funcao: createUsuarioDto.funcao,
      regmatricula: createUsuarioDto.regmatricula,
      nascimento: createUsuarioDto.nascimento,
      telefone: createUsuarioDto.telefone,
      email: createUsuarioDto.email
    };
    this.id++;
    this.usuarios.push(newUsuario);
    return newUsuario;
  }

  findAll() {
    return this.usuarios;
  }

  findOne(id: number) {
    const usuario = this.usuarios.find(usuario => usuario.id == id);
    
    if(!usuario) {
      throw new NotFoundException("Usuário não encontrado");
    }

    return usuario;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const usuario = this.findOne(id);
    usuario.login = updateUsuarioDto.login;
    usuario.senha = updateUsuarioDto.senha;
    usuario.email = updateUsuarioDto.email;
    usuario.telefone = updateUsuarioDto.telefone;
    usuario.nome = updateUsuarioDto.nome;
    usuario.nascimento = updateUsuarioDto.nascimento;
    
    return usuario;
  }

  remove(id: number) {
    const usuario = this.findOne(id);

    const usuarioIndex = this.usuarios.findIndex((usuario) => usuario.id == id);

    this.usuarios.splice(usuarioIndex, 1);

    return this.usuarios;
  }
}