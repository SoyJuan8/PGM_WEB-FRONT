import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurguerComponent } from './burguer.component';

describe('BurguerComponent', () => {
  let component: BurguerComponent;
  let fixture: ComponentFixture<BurguerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BurguerComponent]
    });
    fixture = TestBed.createComponent(BurguerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
