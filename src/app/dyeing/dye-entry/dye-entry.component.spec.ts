import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyeEntryComponent } from './dye-entry.component';

describe('DyeEntryComponent', () => {
  let component: DyeEntryComponent;
  let fixture: ComponentFixture<DyeEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DyeEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DyeEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
