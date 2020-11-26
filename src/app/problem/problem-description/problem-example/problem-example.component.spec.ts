import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemExampleComponent } from './problem-example.component';

describe('ProblemExampleComponent', () => {
  let component: ProblemExampleComponent;
  let fixture: ComponentFixture<ProblemExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
