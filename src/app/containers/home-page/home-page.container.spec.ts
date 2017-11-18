import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageContainer } from './home-page.container';

describe('HomeComponent', () => {
  let component: HomePageContainer;
  let fixture: ComponentFixture<HomePageContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
