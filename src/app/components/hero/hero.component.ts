import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  constructor(public themeService: ThemeService) {}
  
  protected scrollTo(elementId: string) {
    document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
  }
}