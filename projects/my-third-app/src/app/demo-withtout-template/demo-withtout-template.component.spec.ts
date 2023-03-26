import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoWithtoutTemplateComponent } from './demo-withtout-template.component';

describe('DemoWithtoutTemplateComponent', () => {
  let component: DemoWithtoutTemplateComponent;
  let fixture: ComponentFixture<DemoWithtoutTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoWithtoutTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoWithtoutTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
