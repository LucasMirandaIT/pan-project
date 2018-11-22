import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposListComponent } from './repos-list.component';

describe('ReposListComponent', () => {
  let component: ReposListComponent;
  let fixture: ComponentFixture<ReposListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReposListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.loading).toBeFalsy();
    expect(component.repositories).toBeNull();
    expect(component.userLogged).toBeNull();
  });

  it('')
});
