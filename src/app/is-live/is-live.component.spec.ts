import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsLiveComponent } from './is-live.component';

describe('IsLiveComponent', () => {
  let component: IsLiveComponent;
  let fixture: ComponentFixture<IsLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
