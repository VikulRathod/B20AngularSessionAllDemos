import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFacebookComponent } from './login-facebook.component';

describe('LoginFacebookComponent', () => {
  let component: LoginFacebookComponent;
  let fixture: ComponentFixture<LoginFacebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFacebookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginFacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
