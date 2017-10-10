import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompcincoComponent } from './compcinco.component';

describe('CompcincoComponent', () => {
  let component: CompcincoComponent;
  let fixture: ComponentFixture<CompcincoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompcincoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompcincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
