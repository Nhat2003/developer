import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { FooterNavigationComponent } from '../footer-navigation/footer-navigation.component';
import { NavigationFlowService, NavigationFlow } from '../../services/navigation-flow.service';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NzLayoutModule,
    NzIconModule,
    NavbarComponent,
    SidebarComponent,
    NzBreadCrumbModule,
    BreadcrumbComponent,
    FooterNavigationComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent implements OnInit {
  isSidebarCollapsed = false;
  navigationFlow?: NavigationFlow;
  showFooterNavigation = false;

  constructor(
    private router: Router,
    private navigationFlowService: NavigationFlowService
  ) {}

  ngOnInit(): void {
    // Lắng nghe thay đổi route để cập nhật footer navigation
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateFooterNavigation();
    });

    // Cập nhật lần đầu
    this.updateFooterNavigation();
  }

  toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  private updateFooterNavigation(): void {
    const currentUrl = this.router.url;

    // Hiển thị footer navigation cho các trang có navigation flow
    if (
      currentUrl.includes('/miniapp-workflow/') ||
      currentUrl.includes('/design-standards/') ||
      currentUrl.includes('/development-guide/') ||
      currentUrl.includes('/development-docs/') ||
      currentUrl.includes('/ui-guide/') ||
      currentUrl.includes('/policies/')
    ) {
      const pageName = this.getPageNameFromUrl(currentUrl);
      this.navigationFlow = this.navigationFlowService.getNavigationFlow(pageName);
      this.showFooterNavigation = !!this.navigationFlow;
    } else {
      this.showFooterNavigation = false;
      this.navigationFlow = undefined;
    }
  }

  private getPageNameFromUrl(url: string): string {
    const segments = url.split('/').filter(Boolean); // loại bỏ segment rỗng
    const lastSegment = segments[segments.length - 1];

    // Map URL segments to page names
    const pageNameMap: { [key: string]: string } = {
      // MiniApp Workflow pages
      'development-process': 'development-process',
      'register-developer': 'register-developer',
      'develop-app': 'develop-app',
      'review-app': 'review-app',
      'release-app': 'release-app',
      'update-app': 'update-app',
      'update-framework': 'update-framework',

      // Design Standards pages
      'highlight-important-points': 'highlight-important-points',
      'clear-process': 'clear-process',
      'clear-information': 'clear-information',
      'easy-navigation': 'easy-navigation',
      'user-friendly-interface': 'user-friendly-interface',
      'quick-feedback': 'quick-feedback',
      'result-notification': 'result-notification',
      'reduce-input': 'reduce-input',
      'guide-screen': 'guide-screen',
      'visual-standard': 'visual-standard',

      // Development Guide pages
      'introduction': 'introduction',
      'start-center': 'start-center',
      'develop-guide': 'develop-guide'
    };

    return pageNameMap[lastSegment] || lastSegment;
  }
}
