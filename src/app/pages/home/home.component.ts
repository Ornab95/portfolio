import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, HeroComponent, AboutComponent, ExperienceComponent, ProjectsComponent, ContactComponent],
  template: `
    <div class="min-h-screen transition-all duration-500" 
         [class.bg-black]="themeService.isDark" 
         [class.text-white]="themeService.isDark"
         [class.bg-gradient-to-br]="!themeService.isDark" 
         [class.from-orange-50]="!themeService.isDark" 
         [class.via-amber-50]="!themeService.isDark" 
         [class.to-yellow-100]="!themeService.isDark"
         [class.text-light]="themeService.isDark"
         [class.text-dark]="!themeService.isDark">
      <app-navbar></app-navbar>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-experience></app-experience>
      <app-projects></app-projects>
      <app-contact></app-contact>
    </div>
  `
})
export class HomeComponent {
  constructor(public themeService: ThemeService) {}
}