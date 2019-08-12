import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { RecipeEditorComponent } from './recipe-editor/recipe-editor.component';
import { InformationComponent } from './information/information.component';
import { AccountComponent } from './account/account.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { RecipeViewComponent } from './recipe-view/recipe-view.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SearchComponent } from './search/search.component';
import { ChangePwComponent } from './change-pw/change-pw.component';
import { SuggestedRecipeComponent } from './suggested-recipe/suggested-recipe.component';


const routes: Routes = [
  {
    path: ' ',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: DashboardComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'editrecipe',
    component: RecipeEditorComponent
  },
  {
    path: 'information',
    component: InformationComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'editaccount',
    component: EditAccountComponent
  },
  {
    path: 'recipe',
    component: RecipeViewComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'searchbar',
    component: SearchbarComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'randomRecipe',
    component: SuggestedRecipeComponent
  },
  {
    path: 'changepassword',
    component: ChangePwComponent
  },
  { path: '**', redirectTo: '/main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
