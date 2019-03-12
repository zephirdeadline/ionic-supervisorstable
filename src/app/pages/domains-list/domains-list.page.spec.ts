import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainsListPage } from './domains-list.page';

describe('DomainsListPage', () => {
  let component: DomainsListPage;
  let fixture: ComponentFixture<DomainsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomainsListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
