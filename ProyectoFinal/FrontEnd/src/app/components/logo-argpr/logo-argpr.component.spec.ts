import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoARGPRComponent } from './logo-argpr.component';

describe('LogoARGPRComponent', () => {
  let component: LogoARGPRComponent;
  let fixture: ComponentFixture<LogoARGPRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoARGPRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoARGPRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
