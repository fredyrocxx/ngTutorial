import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputGrandKidComponent } from './output-grand-kid.component';

describe('OutputGrandKidComponent', () => {
  let component: OutputGrandKidComponent;
  let fixture: ComponentFixture<OutputGrandKidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputGrandKidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputGrandKidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
