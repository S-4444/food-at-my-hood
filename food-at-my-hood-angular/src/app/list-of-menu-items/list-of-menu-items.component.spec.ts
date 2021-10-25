import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfMenuItemsComponent } from './list-of-menu-items.component';

describe('ListOfMenuItemsComponent', () => {
  let component: ListOfMenuItemsComponent;
  let fixture: ComponentFixture<ListOfMenuItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfMenuItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfMenuItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
