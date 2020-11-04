import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateAccountComponent } from './create-account/create-account.component';
import { MaterialModule } from './material/material.module';
import { AccountService } from './account.service';
import { AngularFireModule } from '@angular/fire';



@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent,
    CreateAccountComponent,

    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAn1l-FbduRkeO8w7fjPEuLp3sduGFfJAQ",
      authDomain: "widenerprogrammingcontest.firebaseapp.com",
      databaseURL: "https://widenerprogrammingcontest.firebaseio.com",
      projectId: "widenerprogrammingcontest",
      storageBucket: "widenerprogrammingcontest.appspot.com",
      messagingSenderId: "417252151160",
      appId: "1:417252151160:web:30aa48f6edb4327ed7c28d",
      measurementId: "G-WPPYRWP2J1"
    })
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
