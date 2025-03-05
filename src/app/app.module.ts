import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './content/header/header.component';
import { FooterComponent } from './content/footer/footer.component';

import { ThemeService } from './services/theme/theme.service';

import { ThemeSwitchComponent } from './elements/theme-switch/theme-switch.component';
import { ProjectComponent } from './elements/project/project.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { CompanyComponent } from './elements/company/company.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    AboutMeComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    ThemeSwitchComponent,
    ProjectComponent,
    ResumeComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    ReactiveFormsModule
  ],
  providers: [
    ThemeService,
    { provide: LocationStrategy, useClass: HashLocationStrategy } // For GitHub Pages
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
