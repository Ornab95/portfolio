import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-projects-page',
  imports: [CommonModule, RouterLink, NavbarComponent],
  template: `
    <div class="min-h-screen bg-black">
      <app-navbar></app-navbar>
      <div class="pt-32 pb-20">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-20">
            <h1 class="text-6xl font-black gradient-text mb-6">All Projects</h1>
            <div class="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div *ngFor="let project of projects" class="glass-card rounded-3xl overflow-hidden hover-glow transition-all duration-500 group">
              <div class="relative overflow-hidden">
                <img [src]="project.image" [alt]="project.title" class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-white mb-3">{{project.title}}</h3>
                <p class="text-gray-400 text-sm mb-4">{{project.description}}</p>
                <div class="flex flex-wrap gap-2 mb-6">
                  <span *ngFor="let tech of project.technologies" class="px-3 py-1 glass-card rounded-full text-xs text-gray-300">{{tech}}</span>
                </div>
                <div class="flex justify-between">
                  <a [routerLink]="project.route" class="text-blue-400 hover:text-blue-300 transition-colors">View Details</a>
                  <a [href]="project.github" class="text-gray-400 hover:text-white transition-colors"><i class="fab fa-github"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ProjectsPageComponent {
  protected readonly projects = [
    {
      title: 'Talent Acquisition System',
      description: 'AI-powered recruitment platform with intelligent candidate matching.',
      image: 'assets/TAS-Photo/TAS-Dashboard.png',
      technologies: ['Angular', 'Spring Boot', 'MongoDB', 'AI/ML'],
      route: '/projects/talent-acquisition',
      github: 'https://github.com/Ornab95'
    },
    {
      title: 'Dhaka Home Price Prediction',
      description: 'Machine learning model for real estate price prediction.',
      image: 'assets/Photo/home.png',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit'],
      route: '/projects/home-price-prediction',
      github: 'https://github.com/Ornab95'
    },
    {
      title: 'Student Score Predictor',
      description: 'Predictive analytics system for academic performance.',
      image: 'assets/Photo/Result.png',
      technologies: ['Python', 'NumPy', 'Matplotlib', 'ML'],
      route: '/projects/student-score-predictor',
      github: 'https://github.com/Ornab95'
    },
    {
      title: 'SEU Admission System',
      description: 'University admission portal with automated processing.',
      image: 'assets/OA-Photo/OA-HomePage.png',
      technologies: ['HTML', 'Tailwind CSS', 'JavaScript', 'PHP'],
      route: '/projects/seu-admission',
      github: 'https://github.com/Ornab95'
    },
    {
      title: 'Online Store Management',
      description: 'E-commerce management system with inventory tracking.',
      image: 'assets/obsms/Sales.png',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      route: '/projects/store-management',
      github: 'https://github.com/Ornab95'
    },
    {
      title: 'Exam Portal API',
      description: 'RESTful API for online examination system.',
      image: 'assets/Photo/api-endpoints.png',
      technologies: ['Java', 'Spring Boot', 'JPA', 'MySQL'],
      route: '/projects/exam-portal',
      github: 'https://github.com/Ornab95'
    }
  ];
}