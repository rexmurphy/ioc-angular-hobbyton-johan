import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ElementService } from '../../services/element.service';
import { codiDisponibleValidator } from '../../validadors/codi-disponible.validator';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-formulari-cerca',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulari-cerca.component.html',
  styleUrl: './formulari-cerca.component.scss'
})
export class FormulariCercaComponent implements OnInit {
  formulariCerca!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private elementService: ElementService
  ) { }

  ngOnInit(): void {
    this.formulariCerca = this.fb.group({
      termeCerca: ['', {
        validators: [
            Validators.minLength(2), 
            Validators.maxLength(50)
        ],
        asyncValidators: [codiDisponibleValidator(this.elementService)],
        updateOn: 'change'
      }]
    });

    // Cerca automàtica amb debounce de 400ms segons requisits
    this.formulariCerca.get('termeCerca')?.valueChanges
      .pipe(debounceTime(400))
      .subscribe(terme => {
        if (this.formulariCerca.get('termeCerca')?.valid) {
          this.cercar();
        }
      });
  }

  cercar(): void {
    const terme = this.formulariCerca.get('termeCerca')?.value;
    this.elementService.cercar(terme);
  }

  netejar(): void {
    this.formulariCerca.reset();
    this.elementService.reiniciar();
  }

  get estaValidant(): boolean {
    return this.formulariCerca.get('termeCerca')?.pending || false;
  }

  get estaCarregant(): boolean {
    return this.elementService.estat() === 'carregant';
  }

  get termeInvalid(): boolean {
    const control = this.formulariCerca.get('termeCerca');
    // Només mostrem errors si ha estat tocat (ng-touched) segons requisits
    return !!(control?.invalid && control?.touched);
  }

  get missatgeError(): string {
    const control = this.formulariCerca.get('termeCerca');
    if (control?.hasError('minlength')) {
      return 'Longitud mínima de 2 caràcters';
    }
    if (control?.hasError('maxlength')) {
      return 'Longitud màxima de 50 caràcters';
    }
    if (control?.hasError('sensResultats')) {
      return 'No s\'han trobat elements amb aquest terme';
    }
    return '';
  }
}