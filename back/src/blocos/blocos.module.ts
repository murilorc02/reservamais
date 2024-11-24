import { Module } from '@nestjs/common';
import { BlocosService } from './blocos.service';
import { BlocosController } from './blocos.controller';
import { Bloco } from './entities/bloco.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Instituicao } from 'src/instituicoes/entities/instituicao.entity';
import { InstituicoesModule } from 'src/instituicoes/instituicoes.module';

@Module({
  imports: [TypeOrmModule.forFeature([Bloco, Instituicao]), InstituicoesModule],
  controllers: [BlocosController],
  providers: [BlocosService],
})
export class BlocosModule {}
