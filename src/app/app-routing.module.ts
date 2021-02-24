import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardViewComponent } from './views/dashboard-view/dashboard-view.component';
import { WelcomeViewComponent } from './views/welcome-view/welcome-view.component';
import { StageBrowseViewComponent } from './views/stage-browse-view/stage-browse-view.component';
import { GuideViewComponent } from "./views/guide-view/guide-view.component";
import { CoachingViewComponent } from './views/coaching-view/coaching-view.component';
import { AuthGuard } from '@auth0/auth0-angular';


const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'dashboard', component:  DashboardViewComponent, canActivate: [AuthGuard]},
  { path: 'welcome', component: WelcomeViewComponent},
  { path: 'stage', component: StageBrowseViewComponent, canActivate: [AuthGuard]},
  { path: 'guide', component: GuideViewComponent},
  { path: 'coaching', component: CoachingViewComponent},

  //{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardViewComponent,
                                  WelcomeViewComponent,
                                  StageBrowseViewComponent,
                                  GuideViewComponent,
                                  CoachingViewComponent]