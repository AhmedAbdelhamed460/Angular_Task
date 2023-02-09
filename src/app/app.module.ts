import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorComponent } from './error/error.component';
import { RouterModule , Routes ,  } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { DetailsComponent } from './details/details.component'
const routs : Routes = [
  {path:"users", component:HomeComponent},
  {path:"profile", component:ProfileComponent},
  {path:"error", component:ErrorComponent},
  {path:"users/:id", component:DetailsComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    ErrorComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , 
    RouterModule.forRoot(routs),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
