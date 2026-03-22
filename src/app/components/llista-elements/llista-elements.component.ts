import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TargetaElementComponent } from '../targeta-element/targeta-element.component';
import { BarraCercaComponent } from '../barra-cerca/barra-cerca.component';
import { Element } from '../../models/element.model';
import { ELEMENT_MOCK } from '../../mocks/dades-mock';

@Component({
  selector: 'app-llista-elements',
  standalone: true,
  imports: [CommonModule, TargetaElementComponent, BarraCercaComponent], 
  templateUrl: './llista-elements.component.html',
  styleUrl: './llista-elements.component.scss'
})
export class LlistaElementsComponent implements OnInit{
  allGames: Element[] =[];
  filteredGames: Element[]=[];

  ngOnInit(){
    this.allGames=ELEMENT_MOCK;
    this.filteredGames=[...this.allGames];
  }

  handleSearch(text: string){
    this.filteredGames=this.allGames.filter(g=> g.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
  }
}

