import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BengaluruComponent } from './bengaluru.component';

describe('BengaluruComponent', () => {
  let component: BengaluruComponent;
  let fixture: ComponentFixture<BengaluruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BengaluruComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BengaluruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
