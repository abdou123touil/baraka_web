import { ComponentFixture, TestBed } from '@angular/core/testing';

import { dark_modeComponent } from './dark_mode.component';

describe('ComponentsComponent', () => {
  let component: dark_modeComponent;
  let fixture: ComponentFixture<dark_modeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ dark_modeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(dark_modeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
