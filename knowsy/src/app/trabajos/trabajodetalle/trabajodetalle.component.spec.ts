import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajodetalleComponent } from './trabajodetalle.component';

describe('TrabajodetalleComponent', () => {
  let component: TrabajodetalleComponent;
  let fixture: ComponentFixture<TrabajodetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajodetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajodetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
