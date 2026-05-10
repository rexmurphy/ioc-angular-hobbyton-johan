import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navegacio',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navegacio.component.html',
  styleUrl: './navegacio.component.scss'
})
export class NavegacioComponent {
  authService = inject(AuthService);
  private router = inject(Router);

  usuariActual$ = this.authService.obtenirUsuari();

  logout() {
    this.authService.logout();
    this.router.navigate(['/cataleg']);
  }
}
