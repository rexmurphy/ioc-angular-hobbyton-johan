import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of, from } from 'rxjs';
import { map, delay, switchMap } from 'rxjs/operators';
import { ElementService } from '../services/element.service';

/**
 * Validador asíncron que comprova si un terme de cerca retorna resultats
 */
export function codiDisponibleValidator(elementService: ElementService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
        if (!control.value) {
            return of(null);
        }

        return of(control.value).pipe(
            delay(500), // Retard de 500ms segons requisits
            switchMap(terme => 
                from(elementService.codiDisponible(terme)).pipe(
                    // Segons requisits: retornar { sensResultats: true } si no hi ha elements
                    // Si codiDisponible retorna true significa que NO s'ha trobat (està disponible/buit)
                    map(esBuit => esBuit ? { sensResultats: true } : null)
                )
            )
        );
    };
}