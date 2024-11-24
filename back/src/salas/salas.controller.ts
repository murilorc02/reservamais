import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalasService } from './salas.service';
import { Sala } from './entities/sala.entity';

@Controller('/instituicoes/:instituicaoId/blocos/:blocoId/salas')
export class SalasController {
  constructor(private readonly salasService: SalasService) {}

  @Post()
  create(
    @Param('instituicaoId') instituicaoId: number,
    @Param('blocoId') blocoId: number,
    @Body() createSala: Sala,
  ) {
    return this.salasService.createSala(instituicaoId, blocoId, createSala);
  }

  @Get()
  findAll(@Param('instituicaoId') instituicaoId: number, @Param('blocoId') blocoId: number) {
    return this.salasService.findAll(instituicaoId, blocoId);
  }

  @Get(':id')
  findOne(@Param('instituicaoId') instituicaoId: number, @Param('blocoId') blocoId: number, @Param('id') id: number) {
    return this.salasService.findOne(instituicaoId, blocoId, id);
  }

  @Patch(':id')
  update(
    @Param('instituicaoId') instituicaoId: number,
    @Param('blocoId') blocoId: number,
    @Param('id') id: number,
    @Body() updateSala: Sala,
  ) {
    return this.salasService.updateSala(instituicaoId, blocoId, id, updateSala);
  }

  @Delete(':id')
  remove(@Param('instituicaoId') instituicaoId: number, @Param('blocoId') blocoId: number, @Param('id') id: number) {
    return this.salasService.removeSala(instituicaoId, blocoId, id);
  }
}
