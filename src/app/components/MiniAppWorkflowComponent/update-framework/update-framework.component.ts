import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';

@Component({
  selector: 'app-update-framework',
  imports: [CommonModule, NzAnchorModule],
  templateUrl: './update-framework.component.html',
  styleUrl: './update-framework.component.css'
})
export class UpdateFrameworkComponent {
  constructor(private router: Router) {}

  navigateToReviewApp(): void {
    console.log('Navigating to review-app...');
    this.router.navigate(['/miniapp-workflow/review-app']);
  }

  navigateToReleaseApp(): void {
    console.log('Navigating to release-app...');
    this.router.navigate(['/miniapp-workflow/release-app']);
  }
}
