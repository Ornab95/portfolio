import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-ats',
  imports: [CommonModule, RouterLink, NavbarComponent],
  templateUrl: './ats.component.html',
  styleUrls: ['./ats.component.css']
})
export class ATSComponent {
  constructor(public themeService: ThemeService) {}

  protected readonly features = [
    { icon: 'fas fa-brain', title: 'AI Resume Screening', description: 'Intelligent parsing and analysis of resumes using machine learning' },
    { icon: 'fas fa-search-plus', title: 'Smart Matching', description: 'Advanced candidate-job matching algorithms' },
    { icon: 'fas fa-chart-line', title: 'Analytics Dashboard', description: 'Comprehensive recruitment analytics and insights' },
    { icon: 'fas fa-robot', title: 'Automated Scoring', description: 'Automatic candidate scoring based on job requirements' },
    { icon: 'fas fa-filter', title: 'Advanced Filtering', description: 'Multi-criteria filtering for precise candidate selection' },
    { icon: 'fas fa-database', title: 'Resume Database', description: 'Centralized storage and management of candidate profiles' }
  ];

  protected readonly technologies = [
    { name: 'Python', icon: 'fab fa-python text-blue-500' },
    { name: 'Machine Learning', icon: 'fas fa-brain text-purple-500' },
    { name: 'NLP', icon: 'fas fa-language text-green-500' },
    { name: 'Flask', icon: 'fas fa-flask text-gray-600' },
    { name: 'Pandas', icon: 'fas fa-table text-blue-600' },
    { name: 'Scikit-learn', icon: 'fas fa-cogs text-orange-500' }
  ];
}