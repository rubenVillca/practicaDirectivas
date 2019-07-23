import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompimgComponent } from './compimg.component';

describe('CompimgComponent', () => {
  let component: CompimgComponent;
  let fixture: ComponentFixture<CompimgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompimgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
