import { Module } from '@nestjs/common';
import { InstituicoesService } from './instituicoes.service';
import { InstituicoesController } from './instituicoes.controller';
import { Instituicao } from './entities/instituicao.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Instituicao])],
  controllers: [InstituicoesController],
  providers: [InstituicoesService],
})
export class InstituicoesModule {}
