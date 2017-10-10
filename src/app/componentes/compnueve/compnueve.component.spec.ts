import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompnueveComponent } from './compnueve.component';

describe('CompnueveComponent', () => {
  let component: CompnueveComponent;
  let fixture: ComponentFixture<CompnueveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompnueveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompnueveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
