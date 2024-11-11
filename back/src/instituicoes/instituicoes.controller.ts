import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InstituicoesService } from './instituicoes.service';
import { CreateInstituicaoDto } from './dto/create-instituicao.dto';
import { UpdateInstituicaoDto } from './dto/update-instituicao.dto';

@Controller('instituicoes')
export class InstituicoesController {
  constructor(private readonly instituicoesService: InstituicoesService) {}

  @Post()
  create(@Body() createInstituicoeDto: CreateInstituicaoDto) {
    return this.instituicoesService.create(createInstituicoeDto);
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
  update(@Param('id') id: string, @Body() updateInstituicoeDto: UpdateInstituicaoDto) {
    return this.instituicoesService.update(+id, updateInstituicoeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.instituicoesService.remove(+id);
  }
}
