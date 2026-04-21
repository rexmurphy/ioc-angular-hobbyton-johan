import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreferitsService } from '../../services/preferits.service';
import { TargetaElementComponent } from './targeta-element.component';

describe('TargetaElementComponent', () => {
  let component: TargetaElementComponent;
  let fixture: ComponentFixture<TargetaElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetaElementComponent],
      providers: [PreferitsService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TargetaElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
