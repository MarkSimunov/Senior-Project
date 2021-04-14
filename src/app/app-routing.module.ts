import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AboutComponent } from './about/about.component';
import { AccountGuard } from './account.guard';
import { CreateQuestionsComponent } from './create-questions/create-questions.component';
import { ScoringComponent } from './scoring/scoring.component';
import { RulesComponent } from './rules/rules.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "sign-in", component: SignInComponent, canActivate: [AccountGuard] },
  { path: "create-account", component: CreateAccountComponent, canActivate: [AccountGuard] },
  { path: "about", component: AboutComponent }, 
  { path: "create-questions", component: CreateQuestionsComponent},
  { path: "scoring", component: ScoringComponent },
  { path: "rules", component: RulesComponent },
  { path: "**", redirectTo: "/", pathMatch:"full"} //This needs to be the last route in the array
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, SignInComponent]; //May use this is app.module.ts instead of listing each component in the file, keep just in case
