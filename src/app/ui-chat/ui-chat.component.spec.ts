import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiChatComponent } from './ui-chat.component';

describe('UiChatComponent', () => {
  let component: UiChatComponent;
  let fixture: ComponentFixture<UiChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
