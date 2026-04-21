import { Component, Input } from '@angular/core';
import { UpperCasePipe, CommonModule, DecimalPipe } from '@angular/common';
import { ElementCataleg } from '../../models/element.model';
import { PreferitsService } from '../../services/preferits.service';

@Component({
  selector: 'app-targeta-element',
  standalone: true,
  imports: [CommonModule, DecimalPipe],
  templateUrl: './targeta-element.component.html',
  styleUrl: './targeta-element.component.scss'
})
export class TargetaElementComponent {
  @Input({ required: true }) game!: ElementCataleg;

  constructor(public preferitsService: PreferitsService) { }

  formatPlayers(game: ElementCataleg): string {
    if (game.minJugadors === game.maxJugadors) {
      return `${game.minJugadors}`;
    }
    return `${game.minJugadors} - ${game.maxJugadors}`;
  }

  togglePreferit(element: ElementCataleg): void {
    if (this.preferitsService.esPreferit(element.id)) {
      this.preferitsService.eliminarPreferit(element.id);
    } else {
      this.preferitsService.afegirPreferit(element);
    }
  }
}
