import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { Router } from '@angular/router';
import { ElementCataleg } from '../../models/element.model';

@Component({
  selector: 'app-targeta-element',
  standalone: true,
  imports: [CommonModule, DecimalPipe],
  templateUrl: './targeta-element.component.html',
  styleUrl: './targeta-element.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TargetaElementComponent {
  @Input({ required: true }) game!: ElementCataleg;

  constructor(private router: Router) { }

  veureDetall(): void {
    this.router.navigate(['/detall', this.game.id]);
  }
}
