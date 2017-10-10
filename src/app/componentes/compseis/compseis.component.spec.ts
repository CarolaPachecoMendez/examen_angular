import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompseisComponent } from './compseis.component';

describe('CompseisComponent', () => {
  let component: CompseisComponent;
  let fixture: ComponentFixture<CompseisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompseisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompseisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
