import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputedSignalImplComponent } from './computed-signal-impl.component';

describe('ComputedSiganlImplComponent', () => {
  let component: ComputedSignalImplComponent;
  let fixture: ComponentFixture<ComputedSignalImplComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComputedSignalImplComponent]
    });
    fixture = TestBed.createComponent(ComputedSignalImplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
