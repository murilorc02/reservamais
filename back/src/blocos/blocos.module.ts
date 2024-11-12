import { Module } from '@nestjs/common';
import { BlocosService } from './blocos.service';
import { BlocosController } from './blocos.controller';
import { Bloco } from './entities/bloco.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Bloco])],
  controllers: [BlocosController],
  providers: [BlocosService],
})
export class BlocosModule {}
