import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelExComponent } from './model-ex.component';

describe('ModelExComponent', () => {
  let component: ModelExComponent;
  let fixture: ComponentFixture<ModelExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
