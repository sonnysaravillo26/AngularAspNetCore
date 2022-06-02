import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPplComponent } from './edit-ppl.component';

describe('EditPplComponent', () => {
  let component: EditPplComponent;
  let fixture: ComponentFixture<EditPplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPplComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
