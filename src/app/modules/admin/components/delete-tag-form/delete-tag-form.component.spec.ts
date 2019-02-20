import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTagFormComponent } from './delete-tag-form.component';

describe('DeleteTagFormComponent', () => {
  let component: DeleteTagFormComponent;
  let fixture: ComponentFixture<DeleteTagFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTagFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTagFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
