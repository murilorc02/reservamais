import { Module } from '@nestjs/common';
import { InstituicoesService } from './instituicoes.service';
import { InstituicoesController } from './instituicoes.controller';

@Module({
  controllers: [InstituicoesController],
  providers: [InstituicoesService],
})
export class InstituicoesModule {}
