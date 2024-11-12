import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InstituicoesService } from './instituicoes.service';
import { Instituicao } from './entities/instituicao.entity';

@Controller('instituicoes')
export class InstituicoesController {
  constructor(private readonly instituicoesService: InstituicoesService) {}

  @Post()
  create(@Body() createInstituicao: Instituicao) {
    return this.instituicoesService.createInstituicao(createInstituicao);
  }

  @Get()
  findAll() {
    return this.instituicoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.instituicoesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInstituicao: Instituicao) {
    return this.instituicoesService.updateInstituicao(+id, updateInstituicao);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.instituicoesService.removeInstituicao(+id);
  }
}
