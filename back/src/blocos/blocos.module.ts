import { Module } from '@nestjs/common';
import { BlocosService } from './blocos.service';
import { BlocosController } from './blocos.controller';

@Module({
  controllers: [BlocosController],
  providers: [BlocosService],
})
export class BlocosModule {}
