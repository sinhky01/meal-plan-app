import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDirectionComponent } from './edit-direction.component';

describe('EditDirectionComponent', () => {
  let component: EditDirectionComponent;
  let fixture: ComponentFixture<EditDirectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDirectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
