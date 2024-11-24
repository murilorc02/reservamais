import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ReservaAdmComponent } from './components/reserva-adm/reserva-adm.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { AuthGuard } from './components/login/auth.guard';
import { CadastroComponent } from './components/cadastro/cadastro.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }, 
  { path: 'login', component: LoginComponent },  // Sem o AuthGuard, pois o login é acessível sem autenticação.
  { path: 'reserva-adm/:id', component: ReservaAdmComponent, canActivate: [AuthGuard] },
  { path: 'reserva', component: ReservaComponent, canActivate: [AuthGuard] },
  { path: 'cadastro', component: CadastroComponent },  // Não protegido pelo guard
  { path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
