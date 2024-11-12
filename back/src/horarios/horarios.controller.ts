import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HorariosService } from './horarios.service';
import { Horario } from './entities/horario.entity';

@Controller('horarios')
export class HorariosController {
  constructor(private readonly horariosService: HorariosService) {}

  @Post()
  create(@Body() createHorario: Horario) {
    return this.horariosService.createHorario(createHorario);
  }

  @Get()
  findAll() {
    return this.horariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.horariosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHorario: Horario) {
    return this.horariosService.updateHorario(+id, updateHorario);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.horariosService.removeHorario(+id);
  }
}
