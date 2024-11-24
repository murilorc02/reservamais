import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlocosService } from './blocos.service';
import { Bloco } from './entities/bloco.entity';

@Controller('/instituicoes/:instituicaoId/blocos')
export class BlocosController {
  constructor(private readonly blocosService: BlocosService) {}

  @Post()
  create(@Param('instituicaoId') instituicaoId: string, @Body() createBloco: Bloco) {
    return this.blocosService.createBloco(+instituicaoId, createBloco);
  }

  @Get()
  findAll(@Param('instituicaoId') instituicaoId: string) {
    return this.blocosService.findAll(+instituicaoId);
  }

  @Get(':id')
  findOne(@Param('instituicaoId') instituicaoId: string, @Param('id') id: string) {
    return this.blocosService.findOne(+instituicaoId, +id);
  }

  @Patch(':id')
  update(
    @Param('instituicaoId') instituicaoId: string,
    @Param('id') id: string,
    @Body() updateBloco: Bloco,
  ) {
    return this.blocosService.updateBloco(+instituicaoId, +id, updateBloco);
  }

  @Delete(':id')
  remove(@Param('instituicaoId') instituicaoId: string, @Param('id') id: string) {
    return this.blocosService.removeBloco(+instituicaoId, +id);
  }
}