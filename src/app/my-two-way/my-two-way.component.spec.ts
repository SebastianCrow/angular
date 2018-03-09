import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTwoWayComponent } from './my-two-way.component';

describe('MyTwoWayComponent', () => {
  let component: MyTwoWayComponent;
  let fixture: ComponentFixture<MyTwoWayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTwoWayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTwoWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
