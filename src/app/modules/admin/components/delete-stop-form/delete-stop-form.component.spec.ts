import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStopFormComponent } from './delete-stop-form.component';

describe('DeleteStopFormComponent', () => {
  let component: DeleteStopFormComponent;
  let fixture: ComponentFixture<DeleteStopFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteStopFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteStopFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
