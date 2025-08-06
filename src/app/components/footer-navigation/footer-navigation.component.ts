import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer-navigation.component.html',
  styleUrl: './footer-navigation.component.css'
})
export class FooterNavigationComponent {
  @Input() currentPage: string = '';
  @Input() previousPage?: { path: string; title: string };
  @Input() nextPage?: { path: string; title: string };

  constructor(private router: Router) {}

  navigateToPage(path: string): void {
    this.router.navigate([path]);
  }
}
