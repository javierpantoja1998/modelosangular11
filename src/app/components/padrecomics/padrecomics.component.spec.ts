import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadrecomicsComponent } from './padrecomics.component';

describe('PadrecomicsComponent', () => {
  let component: PadrecomicsComponent;
  let fixture: ComponentFixture<PadrecomicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadrecomicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadrecomicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
