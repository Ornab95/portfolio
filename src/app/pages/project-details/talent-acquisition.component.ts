import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-talent-acquisition',
  imports: [CommonModule, RouterLink, NavbarComponent],
  templateUrl: './talent-acquisition.component.html'
})
export class TalentAcquisitionComponent {
  protected readonly themeService = inject(ThemeService);

  selectedImage: string | null = null;

  openImage(url: string) {
    this.selectedImage = url;
  }

  closeImage() {
    this.selectedImage = null;
  }
  
  protected readonly features = [
    { icon: 'fas fa-briefcase', title: 'Complete Recruitment Workflow', description: 'End-to-end hiring process from job posting to offer management' },
    { icon: 'fas fa-calendar-check', title: 'Interview Management', description: 'Schedule interviews with automated email notifications' },
    { icon: 'fas fa-chart-line', title: 'Analytics & KPIs', description: 'Time-to-fill metrics, source tracking, and funnel analysis' },
    { icon: 'fas fa-columns', title: 'Kanban Pipeline', description: 'Drag-drop application pipeline with visual status tracking' },
    { icon: 'fas fa-file-contract', title: 'Offer Management', description: 'Professional offer creation with salary, benefits, and terms' },
    { icon: 'fas fa-shield-alt', title: 'Enterprise Security', description: 'JWT authentication, RBAC, and comprehensive data protection' },
    { icon: 'fas fa-envelope-open-text', title: 'Email Notifications', description: 'Event-driven notifications with rich HTML templates' },
    { icon: 'fas fa-users-cog', title: 'Role-Based Access', description: 'Multiple user roles: Candidate, HR, Recruiter, Admin' }
  ];

  protected readonly technologies = [
    { name: 'Angular 20.3', icon: 'fab fa-angular text-red-500' },
    { name: 'Spring Boot 3.4', icon: 'fas fa-leaf text-green-500' },
    { name: 'Java 21', icon: 'fab fa-java text-orange-500' },
    { name: 'MySQL 8.0', icon: 'fas fa-database text-blue-600' },
    { name: 'TypeScript 5.9', icon: 'fab fa-js-square text-blue-500' },
    { name: 'Tailwind CSS 4.1', icon: 'fas fa-paint-brush text-blue-400' },
    { name: 'PrimeNG 20.2', icon: 'fas fa-th text-purple-500' },
    { name: 'Spring Security + JWT', icon: 'fas fa-lock text-yellow-500' },
    { name: 'Hibernate/JPA', icon: 'fas fa-layer-group text-red-400' },
    { name: 'Thymeleaf', icon: 'fas fa-file-code text-green-400' }
  ];

  protected readonly screenshots = [
    { image: '/assets/TAS-Photo/Login L.png', title: 'Login Page', description: 'Secure authentication with JWT tokens' },
    { image: '/assets/TAS-Photo/Applicant Dashboard.png', title: 'Applicant Dashboard', description: 'Candidate portal for job browsing and applications' },
    { image: '/assets/TAS-Photo/Applicant Jobs Details.png', title: 'Job Details', description: 'Comprehensive job information and application' },
    { image: '/assets/TAS-Photo/Applicant apply form.png', title: 'Application Form', description: 'Submit applications with resume and cover letter' },
    { image: '/assets/TAS-Photo/Recruter Job Managment.png', title: 'Job Management', description: 'Create and manage job postings' },
    { image: '/assets/TAS-Photo/Recruter applicant managment.png', title: 'Applicant Management', description: 'Review and manage candidate applications' },
    { image: '/assets/TAS-Photo/Recruter Applicant Shortlist.png', title: 'Shortlist Candidates', description: 'Kanban pipeline for application tracking' },
    { image: '/assets/TAS-Photo/Admin User Managment.png', title: 'User Management', description: 'Admin panel for managing system users' },
    { image: '/assets/TAS-Photo/Admin System analytical Page.png', title: 'System Analytics', description: 'Comprehensive analytics and reporting' },
    { image: '/assets/TAS-Photo/Universal Profile.png', title: 'User Profile', description: 'Profile management for all user types' }
  ];

  protected readonly architecture = [
    { title: 'Backend Architecture', items: ['Spring Boot 3.4.10 with Java 21', 'RESTful API with SpringDoc OpenAPI', 'MySQL 8.0 with JPA/Hibernate', 'JWT Authentication & Authorization', 'Event-driven email notifications', 'File upload system (10MB limit)'] },
    { title: 'Frontend Architecture', items: ['Angular 20.3 with TypeScript 5.9', 'Tailwind CSS 4.1 for styling', 'PrimeNG & Angular Material components', 'RxJS for state management', 'Route guards for security', 'HTTP interceptors'] },
    { title: 'Security Features', items: ['JWT tokens with 24hr expiration', 'BCrypt password hashing', 'Role-based access control (RBAC)', 'CORS configuration', 'Rate limiting filter', 'Input validation & sanitization'] }
  ];

}
