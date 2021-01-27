import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTestsFormComponent } from './add-tests-form.component';

describe('AddTestsFormComponent', () => {
  let component: AddTestsFormComponent;
  let fixture: ComponentFixture<AddTestsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTestsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTestsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
