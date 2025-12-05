import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-experience-page',
  imports: [CommonModule, NavbarComponent],
  template: `
    <div class="min-h-screen bg-black">
      <app-navbar></app-navbar>
      <div class="pt-32 pb-20">
        <div class="max-w-6xl mx-auto px-6">
          <div class="text-center mb-20">
            <h1 class="text-6xl font-black gradient-text mb-6">Work Experience</h1>
            <div class="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div class="space-y-12">
            <div *ngFor="let exp of experiences" class="glass-card rounded-3xl p-8 hover-glow transition-all duration-500">
              <div class="flex flex-col lg:flex-row lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                <div class="flex-shrink-0">
                  <div class="w-24 h-24 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 p-0.5 glow-shadow">
                    <img [src]="exp.logo" [alt]="exp.company" class="w-full h-full rounded-2xl object-cover">
                  </div>
                </div>
                
                <div class="flex-1">
                  <div class="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                    <div>
                      <h3 class="text-3xl font-bold gradient-text mb-2">{{exp.position}}</h3>
                      <p class="text-2xl text-white font-semibold mb-2">{{exp.company}}</p>
                      <p class="text-gray-400">{{exp.location}}</p>
                    </div>
                    <div class="glass-card px-4 py-2 rounded-full text-gray-300 text-sm font-medium mt-2 lg:mt-0">
                      <i class="fas fa-calendar-alt mr-2"></i>{{exp.duration}}
                    </div>
                  </div>
                  
                  <p class="text-gray-300 mb-8 leading-relaxed text-lg">{{exp.description}}</p>
                  
                  <div class="mb-8">
                    <h4 class="text-xl font-bold text-white mb-4">Key Responsibilities:</h4>
                    <div class="grid md:grid-cols-2 gap-4">
                      <div *ngFor="let responsibility of exp.responsibilities" 
                           class="glass-card p-4 rounded-xl hover-glow transition-all duration-300 border border-blue-500/20">
                        <div class="flex items-start space-x-3">
                          <div class="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <i class="fas fa-check text-xs text-white"></i>
                          </div>
                          <span class="text-gray-300 text-sm">{{responsibility}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div *ngIf="exp.technologies">
                    <h4 class="text-xl font-bold text-white mb-4">Technologies Used:</h4>
                    <div class="flex flex-wrap gap-2">
                      <span *ngFor="let tech of exp.technologies" 
                            class="px-4 py-2 glass-card rounded-full text-sm text-gray-300 border border-white/10">
                        {{tech}}
                      </span>
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
export class ExperiencePageComponent {
  protected readonly experiences = [
    {
      position: 'IT Intern',
      company: 'Southeast University',
      location: 'Dhaka, Bangladesh',
      duration: 'June 2024 - November 2024',
      logo: 'assets/Photo/SEU.jpeg',
      description: 'Led front-end development initiatives and collaborated on full-stack projects, focusing on modern web technologies and user experience optimization. Worked closely with the IT department to develop and maintain university systems.',
      responsibilities: [
        'Developed Talent Acquisition System using Angular and Tailwind CSS',
        'Led SEU Admission Page front-end development',
        'Collaborated with senior developers on full-stack solutions',
        'Implemented responsive design patterns and modern UI/UX practices',
        'Participated in code reviews and technical discussions',
        'Maintained and updated existing university web applications'
      ],
      technologies: ['Angular', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS', 'Git', 'GitHub']
    },
    {
      position: 'Campus Ambassador',
      company: 'Kormo Jobs by Google',
      location: 'Dhaka, Bangladesh',
      duration: 'May 2020 - June 2022',
      logo: 'assets/Photo/KormoJobsLogo.png',
      description: 'Promoted job opportunities and career development resources to university students, organizing campus events and educational workshops. Served as a bridge between Google\'s Kormo Jobs platform and the student community.',
      responsibilities: [
        'Connected 500+ students with job opportunities',
        'Organized 15+ campus recruitment events',
        'Conducted workshops on job search strategies',
        'Built strong network within university community',
        'Provided career guidance and mentorship to students',
        'Collaborated with university administration for event coordination'
      ],
      technologies: null
    },
    {
      position: 'Campus Ambassador',
      company: 'Shomvob Technologies Ltd.',
      location: 'Dhaka, Bangladesh',
      duration: 'January 2023 - April 2023',
      logo: 'assets/Photo/ShomvobLogo.jpeg',
      description: 'Promoted innovative mobile application solutions for entry-level job seekers, focusing on connecting students with career opportunities. Worked to increase app adoption and user engagement among university students.',
      responsibilities: [
        'Promoted Shomvob Android app to 200+ students',
        'Facilitated access to entry-level job opportunities',
        'Conducted app demonstration sessions',
        'Gathered user feedback for product improvement',
        'Organized awareness campaigns about the platform',
        'Provided technical support to new users'
      ],
      technologies: null
    }
  ];
}