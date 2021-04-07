import { StageDeleteDialogComponent } from './views/stage-browse-view/stage-delete-dialog/stage-delete-dialog.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { AppComponent } from './app.component';
import { TopNavComponent } from './views/top-nav/top-nav.component';
import { FooterViewComponent } from "./views/footer-view/footer-view.component";
import { StageDetailDialogComponent } from "./views/stage-browse-view/stage-detail-dialog/stage-detail-dialog.component";
import { StageCreateDialogComponent } from "./views/stage-browse-view/stage-create-dialog/stage-create-dialog.component";
import { StageDetailModel } from "./views/stage-browse-view/stage-detail-model";
import { CoachingViewComponent } from "./views/coaching-view/coaching-view.component";

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
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
import { FormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { StageErrorDialogComponent } from './views/stage-browse-view/stage-error-dialog/stage-error-dialog.component';
import { StageLoadingDialogComponent } from './views/stage-browse-view/stage-loading-dialog/stage-loading-dialog.component';


@NgModule({
  declarations: [				
    AppComponent,
    TopNavComponent,
    FooterViewComponent,
    StageDetailDialogComponent,
    StageCreateDialogComponent,
    StageDeleteDialogComponent,
    routingComponents,
    CoachingViewComponent,
    StageDeleteDialogComponent,
    StageErrorDialogComponent,
    StageLoadingDialogComponent
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
    MatSlideToggleModule,
    FormsModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    AuthModule.forRoot({
      ...env.auth,
      
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
