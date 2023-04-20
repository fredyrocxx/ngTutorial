import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SSiblingComponent } from './ssibling.component';

describe('SSiblingComponent', () => {
  let component: SSiblingComponent;
  let fixture: ComponentFixture<SSiblingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SSiblingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SSiblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
