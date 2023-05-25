import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextconvertComponent } from './textconvert.component';

describe('TextconvertComponent', () => {
  let component: TextconvertComponent;
  let fixture: ComponentFixture<TextconvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextconvertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextconvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
