import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatoAutosComponent } from './formato-autos.component';

describe('FormatoAutosComponent', () => {
  let component: FormatoAutosComponent;
  let fixture: ComponentFixture<FormatoAutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormatoAutosComponent]
    });
    fixture = TestBed.createComponent(FormatoAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
