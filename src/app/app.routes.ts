import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { 
    path: 'about', 
    loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent) 
  },
  { 
    path: 'experience', 
    loadComponent: () => import('./components/experience/experience.component').then(m => m.ExperienceComponent) 
  },
  { 
    path: 'contact', 
    loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent) 
  },
  { path: 'projects', loadComponent: () => import('./components/projects/projects.component').then(m => m.ProjectsComponent) },
  { path: 'projects/talent-acquisition', loadComponent: () => import('./pages/project-details/talent-acquisition.component').then(m => m.TalentAcquisitionComponent) },
  { path: 'projects/seu-admission', loadComponent: () => import('./pages/project-details/seu-admission.component').then(m => m.SeuAdmissionComponent) },
  { path: 'projects/task-management', loadComponent: () => import('./pages/project-details/task-management.component').then(m => m.TaskManagementComponent) },
  { path: 'projects/personal-bank', loadComponent: () => import('./pages/project-details/personal-bank.component').then(m => m.PersonalBankComponent) },
  { path: 'projects/calculator', loadComponent: () => import('./pages/project-details/calculator.component').then(m => m.CalculatorComponent) },
  { path: 'projects/store-management', loadComponent: () => import('./pages/project-details/store-management.component').then(m => m.StoreManagementComponent) },
  { path: 'projects/exam-portal', loadComponent: () => import('./pages/project-details/exam-portal.component').then(m => m.ExamPortalComponent) },
  { path: 'projects/student-score-predictor', loadComponent: () => import('./pages/project-details/student-score-predictor.component').then(m => m.StudentScorePredictorComponent) },
  { path: 'projects/home-price-prediction', loadComponent: () => import('./pages/project-details/home-price-prediction.component').then(m => m.HomePricePredictionComponent) },
  { path: 'achievements', loadComponent: () => import('./pages/achievements/achievements.component').then(m => m.AchievementsComponent) },
  { path: '**', redirectTo: '' }
];