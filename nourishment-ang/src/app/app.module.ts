import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { FlatpickrModule } from 'angularx-flatpickr';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';


import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InformationComponent } from './information/information.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { RecipeViewComponent } from './recipe-view/recipe-view.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { DirectionsComponent } from './directions/directions.component';
import { RecipeEditorComponent } from './recipe-editor/recipe-editor.component';
import { EditIngredientComponent } from './edit-ingredient/edit-ingredient.component';
import { EditDirectionComponent } from './edit-direction/edit-direction.component';
import { AccountComponent } from './account/account.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { ResultEntryComponent } from './result-entry/result-entry.component';
import { PrintViewComponent } from './print-view/print-view.component';
import { SuggestedRecipeComponent } from './suggested-recipe/suggested-recipe.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    InformationComponent,
    DashboardComponent,
    CalendarComponent,
    RecipeViewComponent,
    IngredientListComponent,
    DirectionsComponent,
    RecipeEditorComponent,
    EditIngredientComponent,
    EditDirectionComponent,
    AccountComponent,
    EditAccountComponent,
    SearchComponent,
    ResultsComponent,
    ResultEntryComponent,
    PrintViewComponent,
    SuggestedRecipeComponent,
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    NgbModalModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
