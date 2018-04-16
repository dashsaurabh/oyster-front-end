import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMemosComponent } from './my-memos.component';

describe('MyMemosComponent', () => {
  let component: MyMemosComponent;
  let fixture: ComponentFixture<MyMemosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMemosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
