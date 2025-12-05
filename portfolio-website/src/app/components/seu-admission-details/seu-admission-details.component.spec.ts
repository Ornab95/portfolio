import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeuAdmissionDetailsComponent } from './seu-admission-details.component';

describe('SeuAdmissionDetailsComponent', () => {
  let component: SeuAdmissionDetailsComponent;
  let fixture: ComponentFixture<SeuAdmissionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeuAdmissionDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeuAdmissionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
