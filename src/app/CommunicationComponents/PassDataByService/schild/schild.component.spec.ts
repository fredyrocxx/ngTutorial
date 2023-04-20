import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SChildComponent } from './schild.component';

describe('SChildComponent', () => {
  let component: SChildComponent;
  let fixture: ComponentFixture<SChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
