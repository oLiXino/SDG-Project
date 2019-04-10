import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GstAddComponent } from './gst-add/gst-add.component';
import { GstEditComponent } from './gst-edit/gst-edit.component';
import { GstGetComponent } from './gst-get/gst-get.component';
import { BarGetComponent } from './bar-get/bar-get.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationService } from './authentication.service';
import { BarAddComponent } from './bar-add/bar-add.component';
import { BarEditComponent } from './bar-edit/bar-edit.component';
import { BarAdminGetComponent } from './bar-admin-get/bar-admin-get.component';
import { AboutUsComponent } from './about-us/about-us.component'
import { NewsComponent } from './news/news.component';
const routes: Routes = [
  {
    path: 'business/create',
    component: GstAddComponent
  },
  {
    path: 'business/edit/:id',
    component: GstEditComponent
  },
  {
    path: 'business',
    component: GstGetComponent
  },
  {
    path: 'bar/create',
    component: BarAddComponent
  },
  {
    path: 'bar/admin/edit/:id',
    component: BarEditComponent
  },
  {
    path: 'bar',
    component: BarGetComponent
  },
  {
    path: 'bar/admin',
    component: BarAdminGetComponent
  },
  { 
    path: 'login', component: LoginComponent 
  },
  { 
    path: 'register', component: RegisterComponent 
  },

  {
    path: 'about-us',
    component: AboutUsComponent
  },

  {
    path: 'news',
    component: NewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthenticationService]
})

export class AppRoutingModule { }

