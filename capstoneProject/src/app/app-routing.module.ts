import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { PostsPageComponent } from "./posts-page/posts-page.component";
import { ProfilePageComponent } from "./profile-page/profile-page.component";
import { SignUpPageComponent } from "./sign-up-page/sign-up-page.component";

//Routes to each component page
const routes: Routes = [
  {
    path:'', component: HomePageComponent
  },
  {
    path:'login', component: LoginPageComponent
  },
  {
    path:'posts', component: PostsPageComponent
  },
  {
    path:'profile', component: ProfilePageComponent
  },
  {
    path:'signup', component: SignUpPageComponent
  },
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule {

}

