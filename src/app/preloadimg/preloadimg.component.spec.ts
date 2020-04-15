import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreloadimgComponent } from './preloadimg.component';

describe('PreloadimgComponent', () => {
  let component: PreloadimgComponent;
  let fixture: ComponentFixture<PreloadimgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreloadimgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreloadimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
