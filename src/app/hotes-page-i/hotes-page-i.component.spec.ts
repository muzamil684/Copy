import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotesPageIComponent } from './hotes-page-i.component';

describe('HotesPageIComponent', () => {
  let component: HotesPageIComponent;
  let fixture: ComponentFixture<HotesPageIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotesPageIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotesPageIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
