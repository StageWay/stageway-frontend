import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardViewComponent } from './views/dashboard-view/dashboard-view.component';
import { WelcomeViewComponent } from './views/welcome-view/welcome-view.component';
import { StageBrowseViewComponent } from './views/stage-browse-view/stage-browse-view.component';
import { GuideViewComponent } from "./views/guide-view/guide-view.component";
import { CoachingViewComponent } from './views/coaching-view/coaching-view.component';
import { AuthGuard } from '@auth0/auth0-angular';


const routes: Routes = [
  { path: '', redirectTo: '/app-welcome-view', pathMatch: 'full' },
  { path: 'app-dashboard-view', component:  DashboardViewComponent, canActivate: [AuthGuard]},
  { path: 'app-welcome-view', component: WelcomeViewComponent},
  { path: 'app-stage-browse-view', component: StageBrowseViewComponent, canActivate: [AuthGuard]},
  { path: 'app-guide-view', component: GuideViewComponent},
  { path: 'app-coaching-view', component: CoachingViewComponent},

  //{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
