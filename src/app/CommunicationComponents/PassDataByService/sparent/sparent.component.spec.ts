import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SParentComponent } from './sparent.component';

describe('SParentComponent', () => {
  let component: SParentComponent;
  let fixture: ComponentFixture<SParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
