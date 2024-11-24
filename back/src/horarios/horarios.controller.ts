import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HorariosService } from './horarios.service';
import { Horario } from './entities/horario.entity';

@Controller('instituicoes/:instituicaoId/horarios')
export class HorariosController {
  constructor(private readonly horariosService: HorariosService) {}

  @Post()
  create(@Param('instituicaoId') instituicaoId: number, @Body() createHorario: Horario) {
    return this.horariosService.createHorario(instituicaoId, createHorario);
  }

  @Get()
  findAll(@Param('instituicaoId') instituicaoId: number) {
    return this.horariosService.findAll(instituicaoId);
  }

  @Get(':id')
  findOne(@Param('instituicaoId') instituicaoId: number, @Param('id') id: number) {
    return this.horariosService.findOne(instituicaoId, id);
  }

  @Patch(':id')
  update(
    @Param('instituicaoId') instituicaoId: number,
    @Param('id') id: number,
    @Body() updateHorario: Horario,
  ) {
    return this.horariosService.updateHorario(instituicaoId, id, updateHorario);
  }

  @Delete(':id')
  remove(@Param('instituicaoId') instituicaoId: number, @Param('id') id: number) {
    return this.horariosService.removeHorario(instituicaoId, id);
  }
}
