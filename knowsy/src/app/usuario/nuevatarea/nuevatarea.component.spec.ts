import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevatareaComponent } from './nuevatarea.component';

describe('NuevatareaComponent', () => {
  let component: NuevatareaComponent;
  let fixture: ComponentFixture<NuevatareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevatareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevatareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
