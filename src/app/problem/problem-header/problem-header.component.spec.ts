import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemHeaderComponent } from './problem-header.component';

describe('ProblemHeaderComponent', () => {
  let component: ProblemHeaderComponent;
  let fixture: ComponentFixture<ProblemHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
