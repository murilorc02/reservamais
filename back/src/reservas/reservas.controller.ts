import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReservasService } from './reservas.service';
import { Reserva } from './entities/reserva.entity';

@Controller('reservas')
export class ReservasController {
  constructor(private readonly reservasService: ReservasService) {}

  @Post()
  create(@Body() createReserva: Reserva) {
    return this.reservasService.createReserva(createReserva);
  }

  @Get()
  findAll() {
    return this.reservasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReserva: Reserva) {
    return this.reservasService.updateReserva(+id, updateReserva);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservasService.removeReserva(+id);
  }
}
