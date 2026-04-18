import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TargetaElementComponent } from '../targeta-element/targeta-element.component';
import { BarraCercaComponent } from '../barra-cerca/barra-cerca.component';
import { Element } from '../../models/element.model';
import { ELEMENT_MOCK } from '../../mocks/dades-mock';
import { ElementService } from '../../services/element.service';


@Component({
  selector: 'app-llista-elements',
  standalone: true,
  imports: [CommonModule, TargetaElementComponent, BarraCercaComponent],
  templateUrl: './llista-elements.component.html',
  styleUrl: './llista-elements.component.scss'
})
export class LlistaElementsComponent implements OnInit {

  public elementService = inject(ElementService);

  ngOnInit() {



    this.elementService.obtenirPopulars();
  }

  tryAgain() {
    this.elementService.obtenirPopulars();
  }

  handleSearch(text: string) {
    if (text.trim() === "") {
      this.elementService.obtenirPopulars()
    } else {
      this.elementService.cercar(text);
    }
  }

  trackByGameId(index: number, game: Element): number {
    return game.id;
  }
}

