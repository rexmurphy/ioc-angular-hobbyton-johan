import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GamesListComponent } from './components/games-list/llista-elements.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GamesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ioc-angular-hobbyton-johan';
}
