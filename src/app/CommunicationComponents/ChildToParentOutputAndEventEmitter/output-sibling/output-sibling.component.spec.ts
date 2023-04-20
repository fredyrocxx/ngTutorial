import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputSiblingComponent } from './output-sibling.component';

describe('OutputSiblingComponent', () => {
  let component: OutputSiblingComponent;
  let fixture: ComponentFixture<OutputSiblingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputSiblingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputSiblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
