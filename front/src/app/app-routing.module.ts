import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HorariosAlunoComponent } from './components/horarios-aluno/horarios-aluno.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { AuthGuard } from './components/login/auth.guard';
import { CadastroComponent } from './components/cadastro/cadastro.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]  }, 
  { path: 'login', component: LoginComponent },       
  { path: 'adm-reserva', component: ReservaComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: 'reserva', component: HorariosAlunoComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
