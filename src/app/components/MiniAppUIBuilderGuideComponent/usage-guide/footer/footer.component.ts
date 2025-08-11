import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NavigationFlowService } from '../../../../services/navigation-flow.service';

@Component({
  selector: 'app-usage-guide-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="usage-guide-footer">
      <div class="footer-navigation">
        <div class="nav-container">
          <div class="nav-item" *ngIf="previousPage" (click)="navigateToPage(previousPage.path)">
            <div class="nav-label">Trước</div>
            <div class="nav-link">
              <span class="nav-arrow"><<</span> {{ previousPage.title }}
            </div>
          </div>

          <div class="nav-item" *ngIf="nextPage" (click)="navigateToPage(nextPage.path)">
            <div class="nav-label">Kế tiếp</div>
            <div class="nav-link">
              {{ nextPage.title }} <span class="nav-arrow">>></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .usage-guide-footer {
      margin-top: 3rem;
      padding: 2rem 0;
      border-top: 1px solid #e1e5e9;
      background: #f8f9fa;
    }

    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      gap: 2rem;
    }

    .nav-item {
      flex: 1;
      max-width: 300px;
      padding: 1rem 1.5rem;
      border: 1px solid #e1e5e9;
      border-radius: 8px;
      background: #fff;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .nav-item:hover {
      border-color: #007bff;
      box-shadow: 0 2px 8px rgba(0, 123, 255, 0.15);
    }

    .nav-label {
      font-size: 0.9rem;
      color: #6c757d;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }

    .nav-link {
      font-size: 1rem;
      color: #007bff;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .nav-arrow {
      font-weight: 600;
    }

    @media (max-width: 768px) {
      .nav-container {
        flex-direction: column;
        gap: 1rem;
      }

      .nav-item {
        max-width: 100%;
        width: 100%;
      }
    }
  `]
})
export class UsageGuideFooterComponent {
  @Input() currentPage: string = '';
  previousPage?: { path: string; title: string };
  nextPage?: { path: string; title: string };

  constructor(
    private navigationFlowService: NavigationFlowService,
    private router: Router
  ) {}

  ngOnInit() {
    const flow = this.navigationFlowService.getNavigationFlow(this.currentPage);
    if (flow) {
      this.previousPage = flow.previousPage;
      this.nextPage = flow.nextPage;
    }
  }

  navigateToPage(path: string): void {
    this.router.navigate([path]);
  }
}
