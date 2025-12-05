import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-seu-admission',
  imports: [CommonModule, RouterLink, NavbarComponent],
  template: `
    <div class="min-h-screen bg-black">
      <app-navbar></app-navbar>
      <div class="pt-32 pb-20">
        <div class="max-w-6xl mx-auto px-6">
          <div class="mb-8">
            <a routerLink="/projects" class="text-blue-400 hover:text-blue-300 transition-colors">
              <i class="fas fa-arrow-left mr-2"></i>Back to Projects
            </a>
          </div>
          
          <div class="glass-card rounded-3xl overflow-hidden glow-shadow">
            <div class="relative h-96">
              <img src="assets/OA-Photo/OA-HomePage.png" alt="SEU Admission System" 
                   (click)="window.open('assets/OA-Photo/OA-HomePage.png', '_blank')"
                   class="w-full h-full object-cover cursor-pointer">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div class="absolute bottom-8 left-8">
                <h1 class="text-5xl font-black gradient-text mb-4">SEU Admission System</h1>
                <p class="text-xl text-gray-300">University Admission Portal</p>
              </div>
            </div>
            
            <div class="p-12">
              <div class="grid lg:grid-cols-3 gap-12">
                <div class="lg:col-span-2 space-y-8">
                  <div>
                    <h2 class="text-3xl font-bold gradient-text mb-4">Project Overview</h2>
                    <p class="text-gray-300 leading-relaxed text-lg">
                      Developed the front-end for Southeast University's comprehensive admission system. 
                      The platform streamlines the entire admission process from student registration to 
                      document verification and final admission confirmation.
                    </p>
                  </div>
                  
                  <div>
                    <h2 class="text-3xl font-bold gradient-text mb-6">Screenshots</h2>
                    <div class="grid md:grid-cols-2 gap-6">
                      <div *ngFor="let screenshot of screenshots" class="glass-card rounded-2xl overflow-hidden hover-glow transition-all duration-300">
                        <img [src]="screenshot.image" [alt]="screenshot.title" 
                             (click)="window.open(screenshot.image, '_blank')"
                             class="w-full h-48 object-cover cursor-pointer hover:scale-105 transition-transform duration-300">
                        <div class="p-4">
                          <h3 class="font-semibold text-white">{{screenshot.title}}</h3>
                          <p class="text-gray-400 text-sm">{{screenshot.description}}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="space-y-8">
                  <div class="glass-card p-6 rounded-2xl">
                    <h3 class="text-2xl font-bold gradient-text mb-4">Technologies</h3>
                    <div class="space-y-3">
                      <div *ngFor="let tech of technologies" class="flex items-center space-x-3">
                        <i [class]="tech.icon + ' text-lg'"></i>
                        <span class="text-gray-300">{{tech.name}}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class SeuAdmissionComponent {
  protected readonly window = window;
  
  protected readonly technologies = [
    { name: 'HTML5', icon: 'fab fa-html5 text-orange-500' },
    { name: 'Tailwind CSS', icon: 'fas fa-paint-brush text-blue-400' },
    { name: 'JavaScript', icon: 'fab fa-js-square text-yellow-500' },
    { name: 'PHP', icon: 'fab fa-php text-purple-500' }
  ];

  protected readonly screenshots = [
    { image: 'assets/OA-Photo/OA-HomePage.png', title: 'Home Page', description: 'Main admission portal interface' },
    { image: 'assets/OA-Photo/OA-BasicInfoOfStudent.png', title: 'Student Info', description: 'Basic student information form' },
    { image: 'assets/OA-Photo/OA-EducationInfo.png', title: 'Education Info', description: 'Educational background form' },
    { image: 'assets/OA-Photo/OA-Student-Address.png', title: 'Address Form', description: 'Student address information' }
  ];
}