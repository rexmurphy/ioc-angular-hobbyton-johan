import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-barra-cerca',
  standalone: true,
  imports: [],
  templateUrl: './barra-cerca.component.html',
  styleUrl: './barra-cerca.component.scss'
})
export class BarraCercaComponent {
  @Output() searchEvent =new EventEmitter<string>();

  onSearch(value: string){
    this.searchEvent.emit(value);

  }
}
