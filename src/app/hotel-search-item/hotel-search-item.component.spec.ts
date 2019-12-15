import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelSearchItemComponent } from './hotel-search-item.component';

describe('HotelSearchItemComponent', () => {
  let component: HotelSearchItemComponent;
  let fixture: ComponentFixture<HotelSearchItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelSearchItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelSearchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
