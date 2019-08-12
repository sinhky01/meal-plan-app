import { Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';


export const applicationRoutes: Routes = [
  {
    path: 'mainpage',
    component: MainpageComponent,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' }
    ]
  }
];