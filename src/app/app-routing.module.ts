import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AboutComponent } from './about/about.component'


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "sign-in", component: SignInComponent },
  { path: "create-account", component: CreateAccountComponent },
  {path: "about", component: AboutComponent }, 
  { path: "**", redirectTo: "/", pathMatch:"full"} //This needs to be the last route in the array
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, SignInComponent]; //May use this is app.module.ts instead of listing each component in the file, keep just in case
