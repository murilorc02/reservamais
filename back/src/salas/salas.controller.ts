import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalasService } from './salas.service';
import { Sala } from './entities/sala.entity';

@Controller('salas')
export class SalasController {
  constructor(private readonly salasService: SalasService) {}

  @Post()
  create(@Body() createSala: Sala) {
    return this.salasService.createSala(createSala);
  }

  @Get()
  findAll() {
    return this.salasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSala: Sala) {
    return this.salasService.updateSala(+id, updateSala);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salasService.removeSala(+id);
  }
}
