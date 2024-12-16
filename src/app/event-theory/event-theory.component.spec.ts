import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTheoryComponent } from './event-theory.component';

describe('EventTheoryComponent', () => {
  let component: EventTheoryComponent;
  let fixture: ComponentFixture<EventTheoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventTheoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
