import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, RouterLink, NavbarComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  constructor(public themeService: ThemeService) {}
  
  selectedImage: string | null = null;
  
  openImageModal(imageSrc: string) {
    console.log('Opening image:', imageSrc);
    this.selectedImage = imageSrc;
  }
  
  closeImageModal() {
    this.selectedImage = null;
  }
  protected readonly projects = [
    {
      title: 'Talent Acquisition System',
      description: 'Comprehensive recruitment platform for HR teams with intelligent candidate matching.',
      image: 'assets/TAS-Photo/TAS-Dashboard.png',
      icon: 'fas fa-users text-blue-400',
      technologies: ['Angular', 'Spring Boot', 'MongoDB', 'Tailwind CSS'],
      route: '/projects/talent-acquisition',
      github: 'https://github.com/Ornab95'
    },
    {
      title: 'SEU Admission System Front-End',
      description: 'Modern, user-friendly front-end for Southeast University\'s admission system.',
      image: 'assets/OA-Photo/OA-HomePage.png',
      icon: 'fas fa-graduation-cap text-indigo-400',
      technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
      route: '/projects/seu-admission',
      github: 'https://github.com/Ornab95'
    },
    {
      title: 'Daily Task Management',
      description: 'Task management application to help users stay organized and on top of daily tasks.',
      image: 'assets/TMS/Home.png',
      icon: 'fas fa-tasks text-green-400',
      technologies: ['HTML', 'Tailwind CSS', 'JavaScript', 'PHP', 'MySQL'],
      route: '/projects/task-management',
      github: 'https://github.com/Ornab95'
    },
    {
      title: 'My Personal Bank',
      description: 'Personal finance management application for tracking expenses and managing budgets.',
      image: 'https://m.media-amazon.com/images/I/71qUfBb0fPL._SL1500_.jpg',
      icon: 'fas fa-university text-yellow-400',
      technologies: ['JavaFX', 'Java', 'SQLite'],
      route: '/projects/personal-bank',
      github: 'https://github.com/Ornab95'
    },
    {
      title: 'Basic Calculator',
      description: 'Functional desktop calculator application with standard mathematical operations.',
      image: 'https://m.media-amazon.com/images/I/61SHgmLiP0L._AC_SX425_.jpg',
      icon: 'fas fa-calculator text-purple-400',
      technologies: ['JavaFX', 'Java'],
      route: '/projects/calculator',
      github: 'https://github.com/Ornab95'
    },
    {
      title: 'Online-Based Store Management System',
      description: 'A comprehensive store management system for inventory and sales tracking.',
      image: 'assets/obsms/Sales.png',
      icon: 'fas fa-store text-red-400',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      route: '/projects/store-management',
      github: 'https://github.com/Ornab95'
    },
    {
      title: 'Exam Portal API',
      description: 'RESTful API for managing online quizzes and evaluations with automated grading.',
      image: 'assets/Photo/PostmanQuiz APIs.png',
      icon: 'fas fa-code text-orange-400',
      technologies: ['Java', 'Spring Boot', 'JPA', 'MySQL'],
      route: '/projects/exam-portal',
      github: 'https://github.com/Ornab95'
    },
    {
      title: 'Student Score Predictor',
      description: 'Machine learning project to predict student exam scores based on study hours and related factors.',
      image: 'assets/Photo/Result.png',
      icon: 'fas fa-chart-line text-pink-400',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
      route: '/projects/student-score-predictor',
      github: 'https://github.com/Ornab95'
    },
    {
      title: 'Dhaka Home Price Prediction',
      description: 'Machine learning application that predicts house prices in Dhaka using property data.',
      image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/0*cDRFtpTiOJFrfzS5.jpg',
      icon: 'fas fa-home text-cyan-400',
      technologies: ['Python', 'Scikit-learn', 'Streamlit', 'Pandas'],
      route: '/projects/home-price-prediction',
      github: 'https://github.com/Ornab95'
    }
  ];
}