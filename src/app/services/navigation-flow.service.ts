import { Injectable } from '@angular/core';

export interface NavigationPage {
  path: string;
  title: string;
}

export interface NavigationFlow {
  currentPage: string;
  previousPage?: NavigationPage;
  nextPage?: NavigationPage;
}

@Injectable({
  providedIn: 'root'
})
export class NavigationFlowService {

  // Định nghĩa các mục và trang đầu tiên của mỗi mục
  private readonly sections: { [key: string]: { firstPage: string; lastPage: string; nextSection: string | null } } = {
    'miniapp-workflow': {
      firstPage: 'development-process',
      lastPage: 'update-framework',
      nextSection: 'design-standards'
    },
    'design-standards': {
      firstPage: 'highlight-important-points',
      lastPage: 'visual-standard',
      nextSection: 'development-guide'
    },
    'development-guide': {
      firstPage: 'introduction',
      lastPage: 'develop-guide',
      nextSection: null // Không có mục tiếp theo
    }
  };

  private readonly pageFlow: NavigationFlow[] = [
    // MiniApp Workflow pages
    {
      currentPage: 'development-process',
      nextPage: { path: '/miniapp-workflow/register-developer', title: 'Đăng ký nhà phát triển' }
    },
    {
      currentPage: 'register-developer',
      previousPage: { path: '/miniapp-workflow/development-process', title: 'Tổng quan quy trình' },
      nextPage: { path: '/miniapp-workflow/develop-app', title: 'Phát triển ứng dụng' }
    },
    {
      currentPage: 'develop-app',
      previousPage: { path: '/miniapp-workflow/register-developer', title: 'Đăng ký nhà phát triển' },
      nextPage: { path: '/miniapp-workflow/review-app', title: 'Kiểm duyệt ứng dụng' }
    },
    {
      currentPage: 'review-app',
      previousPage: { path: '/miniapp-workflow/develop-app', title: 'Phát triển ứng dụng' },
      nextPage: { path: '/miniapp-workflow/release-app', title: 'Phát hành ứng dụng' }
    },
    {
      currentPage: 'release-app',
      previousPage: { path: '/miniapp-workflow/review-app', title: 'Kiểm duyệt ứng dụng' },
      nextPage: { path: '/miniapp-workflow/update-app', title: 'Cập nhật ứng dụng' }
    },
    {
      currentPage: 'update-app',
      previousPage: { path: '/miniapp-workflow/release-app', title: 'Phát hành ứng dụng' },
      nextPage: { path: '/miniapp-workflow/update-framework', title: 'Cập nhật framework' }
    },
    {
      currentPage: 'update-framework',
      previousPage: { path: '/miniapp-workflow/update-app', title: 'Cập nhật ứng dụng' }
    },

    // Design Standards pages
    {
      currentPage: 'highlight-important-points',
      nextPage: { path: '/design-standards/clear-process', title: 'Quy trình rõ ràng, tối ưu luồng trải nghiệm' }
    },
    {
      currentPage: 'clear-process',
      previousPage: { path: '/design-standards/highlight-important-points', title: 'Làm nổi bật các điểm quan trọng' },
      nextPage: { path: '/design-standards/clear-information', title: 'Phân bổ thông tin rõ ràng, mạch lạc' }
    },
    {
      currentPage: 'clear-information',
      previousPage: { path: '/design-standards/clear-process', title: 'Quy trình rõ ràng, tối ưu luồng trải nghiệm' },
      nextPage: { path: '/design-standards/easy-navigation', title: 'Điều hướng dễ dàng' }
    },
    {
      currentPage: 'easy-navigation',
      previousPage: { path: '/design-standards/clear-information', title: 'Phân bổ thông tin rõ ràng, mạch lạc' },
      nextPage: { path: '/design-standards/user-friendly-interface', title: 'Giao diện thân thiện với người dùng' }
    },
    {
      currentPage: 'user-friendly-interface',
      previousPage: { path: '/design-standards/easy-navigation', title: 'Điều hướng dễ dàng' },
      nextPage: { path: '/design-standards/quick-feedback', title: 'Phản hồi nhanh chóng' }
    },
    {
      currentPage: 'quick-feedback',
      previousPage: { path: '/design-standards/user-friendly-interface', title: 'Giao diện thân thiện với người dùng' },
      nextPage: { path: '/design-standards/result-notification', title: 'Thông báo kết quả' }
    },
    {
      currentPage: 'result-notification',
      previousPage: { path: '/design-standards/quick-feedback', title: 'Phản hồi nhanh chóng' },
      nextPage: { path: '/design-standards/reduce-input', title: 'Giảm thiểu nhập liệu đầu vào' }
    },
    {
      currentPage: 'reduce-input',
      previousPage: { path: '/design-standards/result-notification', title: 'Thông báo kết quả' },
      nextPage: { path: '/design-standards/guide-screen', title: 'Màn hình hướng dẫn' }
    },
    {
      currentPage: 'guide-screen',
      previousPage: { path: '/design-standards/reduce-input', title: 'Giảm thiểu nhập liệu đầu vào' },
      nextPage: { path: '/design-standards/visual-standard', title: 'Tiêu chuẩn thị giác' }
    },
    {
      currentPage: 'visual-standard',
      previousPage: { path: '/design-standards/guide-screen', title: 'Màn hình hướng dẫn' }
    },

    // Development Guide pages
    {
      currentPage: 'introduction',
      nextPage: { path: '/development-docs/development-guide/get-started', title: 'Bắt đầu với Mini App Center' }
    },
    {
      currentPage: 'get-started',
      previousPage: { path: '/development-docs/introduction', title: 'Giới thiệu' },
      nextPage: { path: '/development-docs/development-guide/develop-guide', title: 'Hướng dẫn phát triển' }
    },
    {
      currentPage: 'develop-guide',
      previousPage: { path: '/development-docs/development-guide/get-started', title: 'Bắt đầu với Mini App Center' }
    }
  ];

  getNavigationFlow(currentPage: string): NavigationFlow | undefined {
    const flow = this.pageFlow.find(f => f.currentPage === currentPage);

    if (!flow) return undefined;

    // Nếu đây là trang cuối của mục và có mục tiếp theo, thêm nextPage
    if (!flow.nextPage) {
      const currentSection = this.getCurrentSection(currentPage);
      if (currentSection && this.sections[currentSection].nextSection) {
        const nextSection = this.sections[currentSection].nextSection;
        const nextSectionFirstPage = this.sections[nextSection].firstPage;

        // Tạo nextPage cho trang đầu tiên của mục tiếp theo
        flow.nextPage = {
          path: `/${nextSection}/${nextSectionFirstPage}`,
          title: this.getSectionTitle(nextSection)
        };
      }
    }

    return flow;
  }

  private getCurrentSection(pageName: string): string | null {
    for (const [section, config] of Object.entries(this.sections)) {
      if (pageName === config.firstPage || pageName === config.lastPage ||
          this.pageFlow.some(flow => flow.currentPage === pageName)) {
        return section;
      }
    }
    return null;
  }

  private getSectionTitle(section: string): string {
    const sectionTitles: { [key: string]: string } = {
      'miniapp-workflow': 'Quy trình phát triển Mini App',
      'design-standards': 'Quy chuẩn thiết kế Mini App',
      'development-guide': 'Hướng dẫn phát triển'
    };
    return sectionTitles[section] || section;
  }
}
