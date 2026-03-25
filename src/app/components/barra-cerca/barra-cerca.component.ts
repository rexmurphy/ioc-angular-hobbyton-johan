import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-barra-cerca',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './barra-cerca.component.html',
  styleUrl: './barra-cerca.component.scss'
})
export class BarraCercaComponent {
  searchTerm: string="";
  @Output() searchEvent =new EventEmitter<string>();

  onSearch(){
    this.searchEvent.emit(this.searchTerm);

  }
}
