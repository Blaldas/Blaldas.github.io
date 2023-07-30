import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { EducationSectionComponent } from './education-section/education-section.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { PublicationsSectionComponent } from './publications-section/publications-section.component';
import { SocialsSectionComponent } from './socials-section/socials-section.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeSectionComponent,
    EducationSectionComponent,
    MainBodyComponent,
    WorkExperienceComponent,
    SkillsSectionComponent,
    PublicationsSectionComponent,
    SocialsSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
