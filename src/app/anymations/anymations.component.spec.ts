import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnymationsComponent } from './anymations.component';

describe('AnymationsComponent', () => {
  let component: AnymationsComponent;
  let fixture: ComponentFixture<AnymationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnymationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnymationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
