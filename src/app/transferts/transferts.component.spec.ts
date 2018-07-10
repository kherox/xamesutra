import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfertsComponent } from './transferts.component';

describe('TransfertsComponent', () => {
  let component: TransfertsComponent;
  let fixture: ComponentFixture<TransfertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransfertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
