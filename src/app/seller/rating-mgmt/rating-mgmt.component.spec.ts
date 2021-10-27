import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingMgmtComponent } from './rating-mgmt.component';

describe('RatingMgmtComponent', () => {
  let component: RatingMgmtComponent;
  let fixture: ComponentFixture<RatingMgmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingMgmtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
