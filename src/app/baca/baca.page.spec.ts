import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BacaPage } from './baca.page';

describe('BacaPage', () => {
  let component: BacaPage;
  let fixture: ComponentFixture<BacaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BacaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
