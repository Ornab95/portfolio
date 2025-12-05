import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkMode = signal(true);
  
  get isDark() {
    return this.isDarkMode();
  }
  
  toggleTheme() {
    this.isDarkMode.set(!this.isDarkMode());
  }
}