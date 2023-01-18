import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyeingDashboardComponent } from './dyeing-dashboard.component';

describe('DyeingDashboardComponent', () => {
  let component: DyeingDashboardComponent;
  let fixture: ComponentFixture<DyeingDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DyeingDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DyeingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
