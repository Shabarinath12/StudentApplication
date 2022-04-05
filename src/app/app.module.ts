import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmissionformComponent } from './components/admissionform/admissionform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule, HttpClient} from '@angular/common/http';  
import { SharedService } from './services/shared.service';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
   
@NgModule({
  declarations: [
    AppComponent,
    AdmissionformComponent,
    LoginComponent,
    SignupComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule,
    CommonModule   
   
     

 
  ],
  providers: [ SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
