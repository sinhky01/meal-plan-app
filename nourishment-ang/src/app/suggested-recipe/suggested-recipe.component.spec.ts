import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedRecipeComponent } from './suggested-recipe.component';

describe('SuggestedRecipeComponent', () => {
  let component: SuggestedRecipeComponent;
  let fixture: ComponentFixture<SuggestedRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestedRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
