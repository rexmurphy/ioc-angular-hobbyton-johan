import { Component, Input } from '@angular/core';
import { UpperCasePipe, CommonModule } from '@angular/common';
import { ElementCataleg } from '../../models/element.model';

@Component({
  selector: 'app-targeta-element',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './targeta-element.component.html',
  styleUrl: './targeta-element.component.scss'
})
export class TargetaElementComponent {
  @Input() game!: ElementCataleg;

  formatPlayers(game: ElementCataleg): string {
    if (game.minJugadors === game.maxJugadors) {
      return `${game.minJugadors} jugador/es`
    }
    return `${game.minJugadors} - ${game.maxJugadors} jugadores`
  }
}
