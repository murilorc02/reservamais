import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstituicoesModule } from './instituicoes/instituicoes.module';
import { UsuarioModule } from './usuario/usuario.module';
import { HorariosModule } from './horarios/horarios.module';
import { SalasModule } from './salas/salas.module';
import { BlocosModule } from './blocos/blocos.module';
import { ReservasModule } from './reservas/reservas.module';
import { Instituicao } from './instituicoes/entities/instituicao.entity';
import { Usuario } from './usuario/entities/usuario.entity';
import { Horario } from './horarios/entities/horario.entity';
import { Sala } from './salas/entities/sala.entity';
import { Bloco } from './blocos/entities/bloco.entity';
import { Reserva } from './reservas/entities/reserva.entity';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { UsuarioController } from './usuario/usuario.controller';
// import { HorariosController } from './horarios/horarios.controller';
// import { InstituicoesController } from './instituicoes/instituicoes.controller';
// import { SalasController } from './salas/salas.controller';
// import { BlocosController } from './blocos/blocos.controller';
// import { ReservasController } from './reservas/reservas.controller';
// import { UsuarioService } from './usuario/usuario.service';
// import { HorariosService } from './horarios/horarios.service';
// import { InstituicoesService } from './instituicoes/instituicoes.service';
// import { SalasService } from './salas/salas.service';
// import { BlocosService } from './blocos/blocos.service';
// import { ReservasService } from './reservas/reservas.service';

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
    InstituicoesModule, UsuarioModule, HorariosModule, SalasModule, BlocosModule, ReservasModule,
  ],
  // controllers: [AppController, UsuarioController, HorariosController,InstituicoesController, SalasController, BlocosController, ReservasController],
  // providers: [AppService, UsuarioService, HorariosService, InstituicoesService, SalasService, BlocosService, ReservasService],
})
export class AppModule {}
