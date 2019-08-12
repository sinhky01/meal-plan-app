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
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  //{ path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  {
    path: 'main',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'calendar',
    component: CalendarComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'editrecipe',
    component: RecipeEditorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'information',
    component: InformationComponent
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'editaccount',
    component: EditAccountComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'recipe',
    component: RecipeViewComponent,
    canActivate: [AuthGuard]
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
    component: SearchbarComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'randomRecipe',
    component: SuggestedRecipeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'changepassword',
    component: ChangePwComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '/main' }
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
