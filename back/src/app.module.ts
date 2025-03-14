import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstituicoesModule } from './instituicoes/instituicoes.module';
import { UsuarioModule } from './usuario/usuario.module';
import { HorariosModule } from './horarios/horarios.module';
import { SalasModule } from './salas/salas.module';
import { BlocosModule } from './blocos/blocos.module';
import { ReservasModule } from './reservas/reservas.module';
import { AuthModule } from './auth/auth.module';
import { Instituicao } from './instituicoes/entities/instituicao.entity';
import { Usuario } from './usuario/entities/usuario.entity';
import { Horario } from './horarios/entities/horario.entity';
import { Sala } from './salas/entities/sala.entity';
import { Bloco } from './blocos/entities/bloco.entity';
import { Reserva } from './reservas/entities/reserva.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'postgres',
      entities: [Instituicao, Usuario, Horario, Sala, Bloco, Reserva],
      synchronize: true,
    }),
    InstituicoesModule, UsuarioModule, HorariosModule, SalasModule, BlocosModule, ReservasModule, AuthModule,
  ],
  // controllers: [AppController, UsuarioController, HorariosController,InstituicoesController, SalasController, BlocosController, ReservasController],
  // providers: [AppService, UsuarioService, HorariosService, InstituicoesService, SalasService, BlocosService, ReservasService],
})
export class AppModule {}
