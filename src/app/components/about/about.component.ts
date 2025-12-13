import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-about',
  imports: [NavbarComponent, RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(public themeService: ThemeService) {}
}