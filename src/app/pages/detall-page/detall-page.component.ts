import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElementService } from '../../services/element.service';
import { ElementCataleg } from '../../models/element.model';

@Component({
  selector: 'app-detall-page',
  standalone: true,
  imports: [],
  templateUrl: './detall-page.component.html',
  styleUrl: './detall-page.component.scss'
})
export class DetallPageComponent implements OnInit {
  elementId: string | null = null;
  // Nova variable per guardar totes les dades del joc de taula
  elementSeleccionat: ElementCataleg | null = null;
  // Afegim l'ElementService al constructor
  constructor(
    private route: ActivatedRoute,
    private elementService: ElementService
  ) { }
  ngOnInit(): void {
    this.elementId = this.route.snapshot.paramMap.get('id');
    // Si tenim un ID, demanem les dades al servei
    if (this.elementId) {
      this.elementService.obtenirElementPerId(this.elementId).subscribe({
        next: (element) => {
          this.elementSeleccionat = element; // Guardem l'element que ens torna l'API
        },
        error: (err) => {
          console.error("S'ha produït un error al buscar l'element", err);
        }
      });
    }
  }
}

