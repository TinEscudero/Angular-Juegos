import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaTesoroComponent } from './busca-tesoro.component';

describe('BuscaTesoroComponent', () => {
  let component: BuscaTesoroComponent;
  let fixture: ComponentFixture<BuscaTesoroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaTesoroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscaTesoroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
