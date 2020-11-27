import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemTutorialComponent } from './problem-tutorial.component';

describe('ProblemTutorialComponent', () => {
  let component: ProblemTutorialComponent;
  let fixture: ComponentFixture<ProblemTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemTutorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
