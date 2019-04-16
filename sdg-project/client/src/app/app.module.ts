import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GstAddComponent } from './gst-add/gst-add.component';
import { GstGetComponent } from './gst-get/gst-get.component';
import { GstEditComponent } from './gst-edit/gst-edit.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BusinessService } from './business.service';
import { BarGetComponent } from './bar-get/bar-get.component';
import { BarAddComponent } from './bar-add/bar-add.component';
import { BarEditComponent } from './bar-edit/bar-edit.component';
import { BarService } from './bar.service';
import { BarAdminGetComponent } from './bar-admin-get/bar-admin-get.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationService } from './authentication.service';
import { ProfileComponent } from './profile/profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NewsComponent } from './news/news.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { StarRatingModule } from 'angular-star-rating';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    GstAddComponent,
    GstGetComponent,
    GstEditComponent,
    BarGetComponent,
    BarAddComponent,
    BarEditComponent,
    BarAdminGetComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AboutUsComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatSortModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    StarRatingModule.forRoot()
  ],
  providers: [
    BusinessService,
    BarService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
