import { Component, Input } from '@angular/core';
import { UpperCasePipe, CommonModule, DecimalPipe } from '@angular/common';
import { ElementCataleg } from '../../models/element.model';

@Component({
  selector: 'app-targeta-element',
  standalone: true,
  imports: [CommonModule, DecimalPipe],
  templateUrl: './targeta-element.component.html',
  styleUrl: './targeta-element.component.scss'
})
export class TargetaElementComponent {
  @Input({ required: true }) game!: ElementCataleg;

  formatPlayers(game: ElementCataleg): string {
    if (game.minJugadors === game.maxJugadors) {
      return `${game.minJugadors}`;
    }
    return `${game.minJugadors} - ${game.maxJugadors}`;
  }
}
