import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurialsComponent } from './burials.component';

describe('BurialsComponent', () => {
  let component: BurialsComponent;
  let fixture: ComponentFixture<BurialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
