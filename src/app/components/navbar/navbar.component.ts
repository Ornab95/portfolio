import { Component, OnInit, OnDestroy, Renderer2, Inject, HostListener } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { DOCUMENT, CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  // true when mobile menu is open
  mobileMenu = false;

  // small fallback theme flag if themeService doesn't exist / during testing
  localIsDark = false;

  // subscriptions to router events
  private subs = new Subscription();

  // Tailwind 'md' breakpoint ~ 768px — used to auto-close on resize
  private readonly mdBreakpoint = 768;

  constructor(
    private router: Router,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    @Inject(ThemeService) public themeService: ThemeService
  ) {}

  ngOnInit(): void {
    // close menu when navigating (mobile)
    this.subs.add(
      this.router.events.subscribe(evt => {
        if (evt instanceof NavigationEnd) {
          this.closeMobileMenu();
        }
      })
    );

    // sync local theme fallback if themeService exists with an observable or property
    if (this.themeService && typeof this.themeService.isDark !== 'undefined') {
      this.localIsDark = !!this.themeService.isDark;
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    // ensure body scroll unlocked
    this.enableBodyScroll();
  }

  // Toggle mobile menu (open/close)
  toggleMobileMenu(): void {
    this.mobileMenu = !this.mobileMenu;
    this.updateBodyScrollLock();
  }

  // Close mobile menu (useful on navigation)
  closeMobileMenu(): void {
    if (this.mobileMenu) {
      this.mobileMenu = false;
      this.updateBodyScrollLock();
    }
  }

  // Template helper - safe to use in bindings
  mobileMenuOpen(): boolean {
    return this.mobileMenu;
  }

  // Toggle theme using themeService
  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  // Keep body from scrolling when mobile menu is open
  private updateBodyScrollLock(): void {
    if (this.mobileMenu) {
      this.disableBodyScroll();
    } else {
      this.enableBodyScroll();
    }
  }

  private disableBodyScroll(): void {
    this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
  }

  private enableBodyScroll(): void {
    this.renderer.removeStyle(this.document.body, 'overflow');
  }

  // Close mobile menu automatically if user resizes to desktop width
  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent): void {
    const w = (event.target as Window).innerWidth;
    if (w >= this.mdBreakpoint && this.mobileMenu) {
      this.closeMobileMenu();
    }
  }

  // Click outside to close mobile menu
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const inNav = !!target.closest('nav');
    if (!inNav && this.mobileMenu) {
      this.closeMobileMenu();
    }
  }
}
