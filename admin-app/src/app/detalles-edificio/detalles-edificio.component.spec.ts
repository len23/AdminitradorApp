import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesEdificioComponent } from './detalles-edificio.component';

describe('DetallesEdificioComponent', () => {
  let component: DetallesEdificioComponent;
  let fixture: ComponentFixture<DetallesEdificioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesEdificioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesEdificioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
