import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersheetComponent } from './ordersheet.component';

describe('OrdersheetComponent', () => {
  let component: OrdersheetComponent;
  let fixture: ComponentFixture<OrdersheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
