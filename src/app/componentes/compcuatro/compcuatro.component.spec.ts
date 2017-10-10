import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompcuatroComponent } from './compcuatro.component';

describe('CompcuatroComponent', () => {
  let component: CompcuatroComponent;
  let fixture: ComponentFixture<CompcuatroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompcuatroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompcuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
