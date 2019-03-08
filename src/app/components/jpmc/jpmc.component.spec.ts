import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JpmcComponent } from './jpmc.component';

describe('JpmcComponent', () => {
  let component: JpmcComponent;
  let fixture: ComponentFixture<JpmcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JpmcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JpmcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
