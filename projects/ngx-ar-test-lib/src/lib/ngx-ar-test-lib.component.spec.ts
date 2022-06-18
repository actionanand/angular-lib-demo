import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxArTestLibComponent } from './ngx-ar-test-lib.component';

describe('NgxArTestLibComponent', () => {
  let component: NgxArTestLibComponent;
  let fixture: ComponentFixture<NgxArTestLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxArTestLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxArTestLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
