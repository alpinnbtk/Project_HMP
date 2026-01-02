import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewkategoriPage } from './newkategori.page';

describe('NewkategoriPage', () => {
  let component: NewkategoriPage;
  let fixture: ComponentFixture<NewkategoriPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewkategoriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
