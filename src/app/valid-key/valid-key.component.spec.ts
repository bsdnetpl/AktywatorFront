import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidKeyComponent } from './valid-key.component';

describe('ValidKeyComponent', () => {
  let component: ValidKeyComponent;
  let fixture: ComponentFixture<ValidKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidKeyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
