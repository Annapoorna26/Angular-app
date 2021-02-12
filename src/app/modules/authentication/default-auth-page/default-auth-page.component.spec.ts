import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultAuthPageComponent } from './default-auth-page.component';

describe('DefaultAuthPageComponent', () => {
  let component: DefaultAuthPageComponent;
  let fixture: ComponentFixture<DefaultAuthPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultAuthPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultAuthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
