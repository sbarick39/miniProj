import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdRecordComponent } from './std-record.component';

describe('StdRecordComponent', () => {
  let component: StdRecordComponent;
  let fixture: ComponentFixture<StdRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
