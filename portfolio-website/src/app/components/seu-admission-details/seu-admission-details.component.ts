// Url: portfolio-website/seu-admission-details/seu-admission-details.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-seu-admission-system',
  templateUrl: './seu-admission-details.component.html',
  styleUrls: ['./seu-admission-details.component.html'],
  standalone: true,
  imports: [],
})
export class SeuAdmissionDetailsComponent {
  projectTitle = 'SEU Admission System';
  projectDescription =
    'The SEU Admission System streamlines the student application process, allowing students to easily apply for admissions at Southeast University.';

  features = [
    {
      title: 'Intuitive User Interface',
      description: 'An easy-to-use interface designed for prospective students.',
    },
    {
      title: 'Application Forms',
      description: 'Comprehensive forms that collect all necessary information from students.',
    },
    {
      title: 'Educational Information',
      description: 'Students can input detailed educational background and results.',
    },
    {
      title: 'Address Information',
      description: 'Users can fill in their present and permanent address details.',
    },
    {
      title: 'Confirmation Page',
      description: 'Review and confirm submitted applications before finalizing.',
    },
  ];

  technologies = [
    {
      name: 'Angular',
      description: 'Front-end framework for building the system’s user interface.',
    },
    {
      name: 'Tailwind CSS',
      description: 'Utility-first CSS framework for responsive and modern designs.',
    },
    {
      name: 'Java',
      description: 'Used for building back-end services and logic handling.',
    },
    {
      name: 'HTML',
      description: 'Used for structuring the content and forms of the system.',
    },
  ];

  screenshots = [
    { imgSrc: 'assets/screenshots/home-page.png', title: 'Home Page' },
    { imgSrc: 'assets/screenshots/education-info.png', title: 'Education Info' },
    { imgSrc: 'assets/screenshots/education-result-info.png', title: 'Education Result Info' },
    { imgSrc: 'assets/screenshots/form-for-diploma-student.png', title: 'Form for Diploma Student' },
    { imgSrc: 'assets/screenshots/student-address-form.png', title: 'Student Address Form' },
    { imgSrc: 'assets/screenshots/basic-info-form.png', title: 'Basic Info Form' },
    { imgSrc: 'assets/screenshots/confirmation-page.png', title: 'Confirmation Page' },
  ];
}
