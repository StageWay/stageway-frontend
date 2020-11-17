import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardViewComponent } from './views/dashboard-view/dashboard-view.component';
import { AuthButtonComponent } from './auth0/auth-button/auth-button.component';
import { ProfileViewComponent } from './views/profile-view/profile-view.component';
import { WelcomeViewComponent } from './views/welcome-view/welcome-view.component';
import { StageBrowseViewComponent } from './views/stage-browse-view/stage-browse-view.component';


const routes: Routes = [
  { path: '', redirectTo: '/app-welcome-view', pathMatch: 'full' },
  { path: 'app-dashboard-view', component:  DashboardViewComponent},
  { path: 'app-auth-button', component: AuthButtonComponent },
  { path: 'app-profile-view', component: ProfileViewComponent },
  { path: 'app-welcome-view', component: WelcomeViewComponent},
  { path: 'app-stage-browse-view', component: StageBrowseViewComponent},
  //{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
