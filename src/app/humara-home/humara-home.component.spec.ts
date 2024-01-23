import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumaraHomeComponent } from './humara-home.component';

describe('HumaraHomeComponent', () => {
  let component: HumaraHomeComponent;
  let fixture: ComponentFixture<HumaraHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumaraHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumaraHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
