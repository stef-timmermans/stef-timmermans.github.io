import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './content/header/header.component';
import { FooterComponent } from './content/footer/footer.component';

import { EmailService } from './services/email/email.service';
import { ThemeService } from './services/theme/theme.service';

import { ThemeSwitchComponent } from './elements/theme-switch/theme-switch.component';
import { SpinningCubeComponent } from './elements/spinning-cube/spinning-cube.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    AboutMeComponent,
    ContactComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    ThemeSwitchComponent,
    SpinningCubeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EmailService, ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
