import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooditemimgComponent } from './fooditemimg.component';

describe('FooditemimgComponent', () => {
  let component: FooditemimgComponent;
  let fixture: ComponentFixture<FooditemimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooditemimgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooditemimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
