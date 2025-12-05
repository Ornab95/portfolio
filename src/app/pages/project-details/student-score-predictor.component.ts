import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-student-score-predictor',
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
              <img src="assets/Photo/Result.png" alt="Student Score Predictor" 
                   (click)="window.open('assets/Photo/Result.png', '_blank')"
                   class="w-full h-full object-cover cursor-pointer">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div class="absolute bottom-8 left-8">
                <h1 class="text-5xl font-black gradient-text mb-4">Student Score Predictor</h1>
                <p class="text-xl text-gray-300">Machine Learning Prediction Model</p>
              </div>
            </div>
            
            <div class="p-12">
              <div class="grid lg:grid-cols-3 gap-12">
                <div class="lg:col-span-2 space-y-8">
                  <div>
                    <h2 class="text-3xl font-bold gradient-text mb-4">Project Overview</h2>
                    <p class="text-gray-300 leading-relaxed text-lg">
                      A machine learning project that predicts student exam scores based on study hours and related factors. 
                      Uses linear regression and data visualization to provide accurate predictions.
                    </p>
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
export class StudentScorePredictorComponent {
  protected readonly window = window;
  
  protected readonly technologies = [
    { name: 'Python', icon: 'fab fa-python text-blue-500' },
    { name: 'Scikit-learn', icon: 'fas fa-brain text-orange-500' },
    { name: 'Pandas', icon: 'fas fa-table text-green-500' },
    { name: 'Matplotlib', icon: 'fas fa-chart-line text-purple-500' }
  ];
}