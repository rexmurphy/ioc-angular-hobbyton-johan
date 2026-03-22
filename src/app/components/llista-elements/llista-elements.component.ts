import { Component } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { Element } from '../../models/element.model';
import { ELEMENT_MOCK } from '../../mocks/dades-mock';

@Component({
  selector: 'app-llista-elements',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './llista-elements.component.html',
  styleUrl: './llista-elements.component.scss'
})
export class LlistaElementsComponent {
  gameList:  Element[]=[];

  ngOnInit(): void{
    this.gameList= ELEMENT_MOCK;
  }

  formatPlayers(game: Element): string{
    if(game.minPlayers===game.maxPlayers){
      return `${game.minPlayers} jugador/es`
    }
    return `${game.minPlayers} - ${game.maxPlayers} jugadores`

  }

}
