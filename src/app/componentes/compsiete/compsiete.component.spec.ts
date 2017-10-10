import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompsieteComponent } from './compsiete.component';

describe('CompsieteComponent', () => {
  let component: CompsieteComponent;
  let fixture: ComponentFixture<CompsieteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompsieteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompsieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
