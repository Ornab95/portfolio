import { Routes } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';

export const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }

];
