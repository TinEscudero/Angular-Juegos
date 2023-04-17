import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienesquienComponent } from './quienesquien.component';

describe('QuienesquienComponent', () => {
  let component: QuienesquienComponent;
  let fixture: ComponentFixture<QuienesquienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuienesquienComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuienesquienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
