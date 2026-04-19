import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { LlistaElementsComponent } from './components/llista-elements/llista-elements.component';
import { CatalegPageComponent } from './pages/cataleg-page/cataleg-page.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CatalegPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ioc-angular-hobbyton-johan';
}
