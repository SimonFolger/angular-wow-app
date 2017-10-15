import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimonTestComponent } from './simon-test.component';

describe('SimonTestComponent', () => {
  let component: SimonTestComponent;
  let fixture: ComponentFixture<SimonTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimonTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimonTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
