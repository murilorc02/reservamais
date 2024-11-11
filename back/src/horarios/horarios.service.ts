import { Injectable } from '@nestjs/common';
import { CreateHorarioDto } from './dto/create-horario.dto';
import { UpdateHorarioDto } from './dto/update-horario.dto';
import { Horario } from './entities/horario.entity';

@Injectable()
export class HorariosService {
  private readonly horarios : Horario[] = [];
  private id = 1;

  create(createHorarioDto: CreateHorarioDto) {
    const newHorario = {
      id: this.id,
      hora: createHorarioDto.hora,
      data: createHorarioDto.data,
      disponivel: createHorarioDto.disponivel
    }
    this.id++;

    this.horarios.push(newHorario);

    return newHorario;
  }

  findAll() {
    return this.horarios;
  }

  findOne(id: number) {
    const horario = this.horarios.find(horario => horario.id == id);
    return horario;
  }

  update(id: number, updateHorarioDto: UpdateHorarioDto) {
    const horario = this.findOne(id);
    horario.hora = updateHorarioDto.hora;
    horario.data = updateHorarioDto.data;
    horario.disponivel = updateHorarioDto.disponivel;

    return horario;
  }

  remove(id: number) {
    const horario = this.findOne(id);
    const horarioIndex = this.horarios.findIndex((horario) => horario.id == id);
    this.horarios.splice(horarioIndex, 1);

    return this.horarios;
  }
}
