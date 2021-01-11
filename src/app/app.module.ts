import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AuthModule } from '@auth0/auth0-angular';

import { AppComponent } from './app.component';
import { TopNavComponent } from './views/top-nav/top-nav.component';
import { DashboardViewComponent } from './views/dashboard-view/dashboard-view.component';
import { FooterViewComponent } from "./views/footer-view/footer-view.component";
import { WelcomeViewComponent } from "./views/welcome-view/welcome-view.component";
import { GuideViewComponent } from "./views/guide-view/guide-view.component";
import { StageBrowseViewComponent } from "./views/stage-browse-view/stage-browse-view.component";
import { StageDetailDialogComponent } from "./views/stage-browse-view/stage-detail-dialog/stage-detail-dialog.component";
import { StageCreateDialogComponent } from "./views/stage-browse-view/stage-create-dialog/stage-create-dialog.component";
import { CoachingViewComponent } from "./views/coaching-view/coaching-view.component";
import { StageDetailModel } from "./views/stage-browse-view/stage-detail-model";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatChipsModule} from '@angular/material/chips';
import {MatMenuModule} from '@angular/material/menu'; 
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper'; 
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { FormsModule } from '@angular/forms';

import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [				
    AppComponent,
    TopNavComponent,
    DashboardViewComponent,
    FooterViewComponent,
    WelcomeViewComponent,
    GuideViewComponent,
    StageBrowseViewComponent,
    StageDetailDialogComponent,
    StageCreateDialogComponent,
    CoachingViewComponent,
   ],
   
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatTabsModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatChipsModule,
    MatDividerModule,
    MatMenuModule,
    MatDialogModule,
    MatInputModule,
    MatStepperModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    AppRoutingModule,

    // Import for auth0 connection
    AuthModule.forRoot({
      domain: 'dev-ey0aeeuj.eu.auth0.com',
      clientId: '9qNKKZ0uEpHmiuOfCKvo8I6iqfix8jJk'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
