import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstituicoesModule } from './instituicoes/instituicoes.module';
import { UsuarioModule } from './usuario/usuario.module';
import { HorariosModule } from './horarios/horarios.module';

@Module({
  imports: [InstituicoesModule, UsuarioModule, HorariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
