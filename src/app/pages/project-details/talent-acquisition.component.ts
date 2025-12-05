import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-talent-acquisition',
  imports: [CommonModule, RouterLink, NavbarComponent],
  templateUrl: './talent-acquisition.component.html'
})
export class TalentAcquisitionComponent {
  protected readonly window = window;
  
  protected readonly features = [
    { icon: 'fas fa-user-plus', title: 'Job Posting System', description: 'Easy-to-use interface for posting and managing job listings' },
    { icon: 'fas fa-search', title: 'Candidate Search', description: 'Advanced search and filtering capabilities for finding candidates' },
    { icon: 'fas fa-chart-bar', title: 'Analytics Dashboard', description: 'Comprehensive analytics and reporting for HR teams' },
    { icon: 'fas fa-robot', title: 'AI Matching', description: 'Intelligent candidate-job matching using machine learning' },
    { icon: 'fas fa-envelope', title: 'Communication Hub', description: 'Built-in messaging system for candidate communication' },
    { icon: 'fas fa-mobile-alt', title: 'Mobile Responsive', description: 'Fully responsive design for all devices' }
  ];

  protected readonly technologies = [
    { name: 'Angular', icon: 'fab fa-angular text-red-500' },
    { name: 'Spring Boot', icon: 'fas fa-leaf text-green-500' },
    { name: 'MongoDB', icon: 'fas fa-database text-green-600' },
    { name: 'Tailwind CSS', icon: 'fas fa-paint-brush text-blue-400' },
    { name: 'TypeScript', icon: 'fab fa-js-square text-blue-500' },
    { name: 'Java', icon: 'fab fa-java text-orange-500' }
  ];

  protected readonly screenshots = [
    { image: 'assets/TAS-Photo/TAS-Dashboard.png', title: 'Admin Dashboard', description: 'Comprehensive dashboard for HR management' },
    { image: 'assets/TAS-Photo/TAS-SignIn.png', title: 'Sign In Page', description: 'Secure authentication system' },
    { image: 'assets/TAS-Photo/TAS-Reg.png', title: 'Registration', description: 'User registration interface' },
    { image: 'assets/TAS-Photo/TAS-HrJobPost.png', title: 'Job Posting', description: 'HR job posting interface' }
  ];
}