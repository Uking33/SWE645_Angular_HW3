import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACKComponent } from './ack.component';

describe('ACKComponent', () => {
  let component: ACKComponent;
  let fixture: ComponentFixture<ACKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ACKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ACKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
