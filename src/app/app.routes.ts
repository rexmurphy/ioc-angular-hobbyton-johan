import { Routes } from '@angular/router';
import { CatalegPageComponent } from './pages/cataleg-page/cataleg-page.component';
import { CercaPageComponent } from './pages/cerca-page/cerca-page.component';
import { DetallPageComponent } from './pages/detall-page/detall-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PreferitsPageComponent } from './pages/preferits-page/preferits-page.component';

export const routes: Routes = [
    // Redireccio per defecte qua s'accedeix a l'app
    { path: '', redirectTo: '/cataleg', pathMatch: 'full' },

    //Rutes
    { path: 'cataleg', component: CatalegPageComponent },
    { path: 'cerca', component: CercaPageComponent },
    { path: 'detall/:id', component: DetallPageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'preferits', component: PreferitsPageComponent },

    //Ruta wildcard (ruta no reconeguda)
    { path: '**', redirectTo: 'cataleg' }

];
