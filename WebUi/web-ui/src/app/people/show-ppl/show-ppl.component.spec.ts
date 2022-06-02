import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPplComponent } from './show-ppl.component';

describe('ShowPplComponent', () => {
  let component: ShowPplComponent;
  let fixture: ComponentFixture<ShowPplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPplComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
