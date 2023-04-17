import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoletopoComponent } from './moletopo.component';

describe('MoletopoComponent', () => {
  let component: MoletopoComponent;
  let fixture: ComponentFixture<MoletopoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoletopoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoletopoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
