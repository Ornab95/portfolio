import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-achievements',
  imports: [CommonModule, NavbarComponent],
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent {
  constructor(public themeService: ThemeService) {}
  protected readonly achievements = [
    {
      title: 'Research Defence',
      description: 'Successfully defended research on breast cancer malignancy prediction using machine learning classifiers including Logistic Regression, Decision Trees, Random Forest, K-Nearest Neighbors, and Naive Bayes on the Wisconsin Diagnostic Breast Cancer Dataset.',
      image: 'assets/Photo/OrnabBiswas1.jpg',
      date: 'October 2, 2024',
      certificate: null
    },
    {
      title: 'Java Certified Foundations',
      description: 'Demonstrated proficiency in core Java programming concepts including OOP principles, data structures, and algorithms. Completed multiple projects including a basic banking system and personal library management system.',
      image: 'assets/Photo/java.jpg',
      date: 'August 8, 2021',
      certificate: 'assets/pdf/Java Certified Foundations.pdf'
    },
    {
      title: '21st Century Core Employability Skills Program',
      description: 'Participated in a comprehensive employability skills program focused on improving communication, leadership, teamwork, problem-solving, and critical thinking through workshops, presentations, and practical exercises.',
      image: 'https://bvrithyderabad.edu.in/wp-content/uploads/2023/06/SKILL.jpg',
      date: 'May 2021 - August 2021',
      certificate: 'assets/pdf/Ornab Biswass_SEU.pdf'
    },
    {
      title: 'Art of Problem Definition',
      description: 'Completed advanced training in problem identification and definition methodologies, enhancing analytical thinking and solution design capabilities.',
      image: 'https://media.licdn.com/dms/image/v2/D4E12AQHGY8ZANMLxPQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1732204717858?e=1766016000&v=beta&t=gd-ck1navEvA3uXvUpEZ3bZ4jE51OXC7EQorf9uY8F4',
      date: '2023',
      certificate: 'assets/pdf/Art of Problem Definition(OrnabBiswass).pdf'
    },
    {
      title: 'Excel Essentials for Workplace Productivity',
      description: 'Mastered advanced Excel techniques for data analysis, visualization, and workplace productivity enhancement.',
      image: 'https://www.visitredmondoregon.com/wp-content/uploads/2022/11/Excel-Essentials-Level-1-4.jpg',
      date: '2023',
      certificate: 'assets/pdf/Excel Essentials for Workplace Productivity(OrnabBiswass).pdf'
    },
    {
      title: 'Workplace Communication Essentials',
      description: 'Enhanced professional communication skills including written, verbal, and presentation abilities for effective workplace collaboration.',
      image: 'https://desktime.com/blog/wp-content/uploads/2021/06/Communication.png',
      date: '2023',
      certificate: 'assets/pdf/Workplace Communication Essentials(OrnabBiswass).pdf'
    }
  ];
}