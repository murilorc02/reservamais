import { Component } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AppRoutingModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(
    private authService: AuthService,
  ){}

  logoff() : void {
    this.authService.logout();
    return;
  }
}
