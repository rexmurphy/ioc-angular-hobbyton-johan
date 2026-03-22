import { Component, Input } from '@angular/core';
import {Element} from '../../models/element.model';

@Component({
  selector: 'app-targeta-element',
  standalone: true,
  imports: [],
  templateUrl: './targeta-element.component.html',
  styleUrl: './targeta-element.component.scss'
})
export class TargetaElementComponent {
  @Input() game!:Element;

  formatPlayers(game:Element):string{
    if(game.minPlayers===game.maxPlayers){
      return `${game.minPlayers} jugador/es`
    }
    return `${game.minPlayers} - ${game.maxPlayers} jugadores`
  }
}
