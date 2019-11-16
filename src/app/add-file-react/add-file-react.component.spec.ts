import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFileReactComponent } from './add-file-react.component';

describe('AddFileReactComponent', () => {
  let component: AddFileReactComponent;
  let fixture: ComponentFixture<AddFileReactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFileReactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFileReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
