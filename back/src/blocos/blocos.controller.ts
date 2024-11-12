import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlocosService } from './blocos.service';
import { Bloco } from './entities/bloco.entity';

@Controller('blocos')
export class BlocosController {
  constructor(private readonly blocosService: BlocosService) {}

  @Post()
  create(@Body() createBloco: Bloco) {
    return this.blocosService.createBloco(createBloco);
  }

  @Get()
  findAll() {
    return this.blocosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blocosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBloco: Bloco) {
    return this.blocosService.updateBloco(+id, updateBloco);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blocosService.removeBloco(+id);
  }
}
