import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppliedMedicineComponent } from './add-applied-medicine.component';

describe('AddAppliedMedicineComponent', () => {
  let component: AddAppliedMedicineComponent;
  let fixture: ComponentFixture<AddAppliedMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAppliedMedicineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAppliedMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
