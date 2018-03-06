import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOutputComponent } from './my-output.component';

describe('MyOutputComponent', () => {
  let component: MyOutputComponent;
  let fixture: ComponentFixture<MyOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
