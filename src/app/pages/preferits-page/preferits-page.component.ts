import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreferitsService } from '../../services/preferits.service';
import { TargetaElementComponent } from '../../components/targeta-element/targeta-element.component';

@Component({
  selector: 'app-preferits-page',
  standalone: true,
  imports: [CommonModule, TargetaElementComponent],
  templateUrl: './preferits-page.component.html',
  styleUrl: './preferits-page.component.scss'
})
export class PreferitsPageComponent {
  preferitsService = inject(PreferitsService);
}
