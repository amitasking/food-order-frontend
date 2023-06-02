import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArdsComponent } from './ards.component';

describe('ArdsComponent', () => {
  let component: ArdsComponent;
  let fixture: ComponentFixture<ArdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
