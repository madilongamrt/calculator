import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInforComponent } from './table-infor.component';

describe('TableInforComponent', () => {
  let component: TableInforComponent;
  let fixture: ComponentFixture<TableInforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableInforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
