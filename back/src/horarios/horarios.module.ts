import { Module } from '@nestjs/common';
import { HorariosService } from './horarios.service';
import { HorariosController } from './horarios.controller';
import { Horario } from './entities/horario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Horario])],
  controllers: [HorariosController],
  providers: [HorariosService],
})
export class HorariosModule {}
