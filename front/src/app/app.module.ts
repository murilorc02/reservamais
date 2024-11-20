import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HorariosAlunoComponent } from './components/horarios-aluno/horarios-aluno.component';

@NgModule({
  declarations: [
    AppComponent,  // AppComponent precisa estar aqui agora
  ],
  imports: [
    BrowserModule,    // Necessário para rodar a aplicação no navegador
    HttpClientModule, // Módulo necessário para requisições HTTP
    LoginComponent,   // Importa o LoginComponent
    HeaderComponent,  // Importa o HeaderComponent
    HomeComponent,    // Importa o HomeComponent
    HorariosAlunoComponent,  // Importa o HorariosAlunoComponent
  ],
  providers: [],
  bootstrap: [AppComponent],  // Define o AppComponent como o principal
})
export class AppModule {}
