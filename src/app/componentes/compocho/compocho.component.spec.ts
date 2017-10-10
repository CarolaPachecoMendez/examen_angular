import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompochoComponent } from './compocho.component';

describe('CompochoComponent', () => {
  let component: CompochoComponent;
  let fixture: ComponentFixture<CompochoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompochoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompochoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
