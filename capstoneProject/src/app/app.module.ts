import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//These are the imports for each of the main components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

//These are the imports for the angular material used
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    ProfilePageComponent,
    PostsPageComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
