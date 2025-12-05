import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-experience',
  imports: [CommonModule, NavbarComponent],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  constructor(public themeService: ThemeService) {}
  protected readonly experiences = [
    {
      position: 'IT Intern',
      company: 'Southeast University',
      duration: 'June 2024 - November 2024',
      logo: 'assets/Photo/SEU.jpeg',
      description: 'Led front-end development initiatives and collaborated on full-stack projects, focusing on modern web technologies and user experience optimization.',
      achievements: [
        'Developed Talent Acquisition System using Angular and Tailwind CSS',
        'Led SEU Admission Page front-end development',
        'Collaborated with senior developers on full-stack solutions',
        'Implemented responsive design patterns and modern UI/UX practices'
      ]
    },
    {
      position: 'Campus Ambassador',
      company: 'Kormo Jobs by Google',
      duration: 'May 2020 - June 2022',
      logo: 'assets/Photo/KormoJobsLogo.png',
      description: 'Promoted job opportunities and career development resources to university students, organizing campus events and educational workshops.',
      achievements: [
        'Connected 500+ students with job opportunities',
        'Organized 15+ campus recruitment events',
        'Conducted workshops on job search strategies',
        'Built strong network within university community'
      ]
    },
    {
      position: 'Campus Ambassador',
      company: 'Shomvob Technologies Ltd.',
      duration: 'January 2023 - April 2023',
      logo: 'assets/Photo/ShomvobLogo.jpeg',
      description: 'Promoted innovative mobile application solutions for entry-level job seekers, focusing on connecting students with career opportunities.',
      achievements: [
        'Promoted Shomvob Android app to 200+ students',
        'Facilitated access to entry-level job opportunities',
        'Conducted app demonstration sessions',
        'Gathered user feedback for product improvement'
      ]
    }
  ];
}