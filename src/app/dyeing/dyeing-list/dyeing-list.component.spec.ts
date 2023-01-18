import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyeingListComponent } from './dyeing-list.component';

describe('DyeingListComponent', () => {
  let component: DyeingListComponent;
  let fixture: ComponentFixture<DyeingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DyeingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DyeingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
