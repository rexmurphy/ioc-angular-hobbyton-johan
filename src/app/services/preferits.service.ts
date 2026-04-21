import { Injectable, signal, computed } from '@angular/core';
import { ElementCataleg } from '../models/element.model';

@Injectable({
  providedIn: 'root'
})
export class PreferitsService {
  // Clau de localStorage segons requisits
  private readonly CLAU_STORAGE = 'preferits-cataleg';
  
  // Signal privat per gestionar la llista d'elements preferits
  private readonly preferitsSignal = signal<ElementCataleg[]>([]);

  // Signals de lectura públics segons requisits
  readonly preferits = this.preferitsSignal.asReadonly();
  
  // Signal computat per al comptador total
  readonly totalPreferits = computed(() => this.preferitsSignal().length);

  constructor() {
    // Càrrega automàtica en inicialitzar el servei
    this.carregarPreferits();
  }

  private carregarPreferits(): void {
    const dades = localStorage.getItem(this.CLAU_STORAGE);
    if (dades) {
      try {
        // Gestió d'errors amb try/catch segons requisits
        const preferits = JSON.parse(dades) as ElementCataleg[];
        this.preferitsSignal.set(preferits);
      } catch (error) {
        console.error('Error carregant preferits des de localStorage:', error);
        this.preferitsSignal.set([]);
      }
    }
  }

  private desarPreferits(): void {
    localStorage.setItem(this.CLAU_STORAGE, JSON.stringify(this.preferitsSignal()));
  }

  // Mètodes públics segons requisits exactes
  
  esPreferit(id: string): boolean {
    return this.preferitsSignal().some(p => p.id === id);
  }

  afegirPreferit(element: ElementCataleg): void {
    if (this.esPreferit(element.id)) {
      return;
    }

    this.preferitsSignal.update(llista => [...llista, element]);
    this.desarPreferits();
  }

  eliminarPreferit(id: string): void {
    this.preferitsSignal.update(llista =>
      llista.filter(p => p.id !== id)
    );
    this.desarPreferits();
  }
}
