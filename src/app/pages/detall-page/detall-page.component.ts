import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ElementService } from '../../services/element.service';
import { PreferitsService } from '../../services/preferits.service';
import { ElementCataleg } from '../../models/element.model';

@Component({
  selector: 'app-detall-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detall-page.component.html',
  styleUrl: './detall-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetallPageComponent implements OnInit {
  elementId: string | null = null;
  // variable per guardar totes les dades del joc de taula
  elementSeleccionat: ElementCataleg | null = null;
  
  constructor(
    private route: ActivatedRoute,
    private elementService: ElementService,
    public preferitsService: PreferitsService,
    private cdr: ChangeDetectorRef
  ) { }
  
  ngOnInit(): void {
    this.elementId = this.route.snapshot.paramMap.get('id');
    // Si tenim un ID, demanem les dades al servei
    if (this.elementId) {
      this.elementService.obtenirElementPerId(this.elementId).subscribe({
        next: (element) => {
          this.elementSeleccionat = element; // Guardem l'element que ens torna l'API
          this.cdr.markForCheck(); // Avisem a Angular del canvi
        },
        error: (err) => {
          console.error("S'ha produït un error al buscar l'element", err);
        }
      });
    }
  }

  togglePreferit(element: ElementCataleg): void {
    if (this.preferitsService.esPreferit(element.id)) {
      this.preferitsService.eliminarPreferit(element.id);
    } else {
      this.preferitsService.afegirPreferit(element);
    }
  }
}
