import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestrodetalleComponent } from './maestrodetalle.component';

describe('MaestrodetalleComponent', () => {
  let component: MaestrodetalleComponent;
  let fixture: ComponentFixture<MaestrodetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaestrodetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaestrodetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
