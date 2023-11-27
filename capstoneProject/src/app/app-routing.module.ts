import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { PostsPageComponent } from "./posts-page/posts-page.component";
import { ProfilePageComponent } from "./profile-page/profile-page.component";
import { SignUpPageComponent } from "./sign-up-page/sign-up-page.component";
import { AuthGuard } from "@auth0/auth0-angular";
import { PostCreateComponent } from "./post-create/post-create.component";

//Routes to each component page
const routes: Routes = [
  {
    path:'', component: HomePageComponent
  },
  {
    path:'posts', component: PostsPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'profile', component: ProfilePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'signup', component: SignUpPageComponent
  },
  {
    path:'post-create', component: PostCreateComponent
  },
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule {

}

