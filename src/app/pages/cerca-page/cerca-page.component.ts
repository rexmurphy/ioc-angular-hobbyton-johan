import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementService } from '../../services/element.service';
import { FormulariCercaComponent } from '../../components/formulari-cerca/formulari-cerca.component';
import { TargetaElementComponent } from '../../components/targeta-element/targeta-element.component';

@Component({
  selector: 'app-cerca-page',
  standalone: true,
  imports: [CommonModule, FormulariCercaComponent, TargetaElementComponent],
  templateUrl: './cerca-page.component.html',
  styleUrl: './cerca-page.component.scss'
})
export class CercaPageComponent implements OnInit {
  constructor(public elementService: ElementService) {}

  ngOnInit(): void {
    this.elementService.reiniciar();
  }
}
