import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, NavbarComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(public themeService: ThemeService) { }
  get contacts() {
    return [
      { title: 'Email', subtitle: 'ornabbiswass@gmail.com', icon: 'fas fa-envelope', bgColor: this.themeService.isDark ? 'bg-gradient-to-r from-gray-700 to-gray-800' : 'bg-gradient-to-r from-blue-500 to-blue-600', link: 'mailto:ornabbiswass@gmail.com' },
      { title: 'LinkedIn', subtitle: 'Professional Network', icon: 'fab fa-linkedin', bgColor: this.themeService.isDark ? 'bg-gradient-to-r from-gray-700 to-gray-800' : 'bg-gradient-to-r from-blue-600 to-blue-700', link: 'https://www.linkedin.com/in/ornab-biswass/' },
      { title: 'GitHub', subtitle: 'Code Repository', icon: 'fab fa-github', bgColor: 'bg-gradient-to-r from-gray-700 to-gray-800', link: 'https://github.com/Ornab95' },
      { title: 'WhatsApp', subtitle: 'Quick Chat', icon: 'fab fa-whatsapp', bgColor: this.themeService.isDark ? 'bg-gradient-to-r from-gray-700 to-gray-800' : 'bg-gradient-to-r from-green-500 to-green-600', link: 'https://wa.me/8801852128663' }
    ];
  }
}