import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoDependienteComponent } from './compo-dependiente.component';

describe('CompoDependienteComponent', () => {
  let component: CompoDependienteComponent;
  let fixture: ComponentFixture<CompoDependienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompoDependienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoDependienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
