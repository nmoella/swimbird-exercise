import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonComponent } from './reason.component';

describe('Page1Component', () => {
  let component: ReasonComponent;
  let fixture: ComponentFixture<ReasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReasonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
