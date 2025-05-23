import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneExample2Component } from './standalone-example-2.component';

describe('StandaloneExample2Component', () => {
  let component: StandaloneExample2Component;
  let fixture: ComponentFixture<StandaloneExample2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandaloneExample2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StandaloneExample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
