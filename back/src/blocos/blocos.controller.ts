import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlocosService } from './blocos.service';
import { CreateBlocoDto } from './dto/create-bloco.dto';
import { UpdateBlocoDto } from './dto/update-bloco.dto';

@Controller('blocos')
export class BlocosController {
  constructor(private readonly blocosService: BlocosService) {}

  @Post()
  create(@Body() createBlocoDto: CreateBlocoDto) {
    return this.blocosService.create(createBlocoDto);
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
  update(@Param('id') id: string, @Body() updateBlocoDto: UpdateBlocoDto) {
    return this.blocosService.update(+id, updateBlocoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blocosService.remove(+id);
  }
}
