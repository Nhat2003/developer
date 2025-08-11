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
      nextSection: 'ui-guide'
    },
      'ui-guide': {
      firstPage: 'design-standards',
      lastPage: 'usage-guide/range-slider-component',
      nextSection: 'policies'
    },
    'policies': {
      firstPage: 'agreement',
      lastPage: 'target',
      nextSection: null
    },

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
      previousPage: { path: '/design-standards/guide-screen', title: 'Màn hình hướng dẫn' },
       nextPage: { path: '/development-docs/introduction', title: 'Giới thiệu' }

    },

    // Development Guide pages
    {
      currentPage: 'introduction',
      previousPage: { path: '/design-standards/visual-standard', title: 'Tiêu chuẩn thị giác' },
      nextPage: { path: '/development-docs/development-guide/get-started', title: 'Bắt đầu với Mini App Center' }
    },
    {
      currentPage: 'get-started',
      previousPage: { path: '/development-docs/introduction', title: 'Giới thiệu' },
      nextPage: { path: '/development-docs/development-guide/develop-guide', title: 'Hướng dẫn phát triển' }
    },
    {
      currentPage: 'develop-guide',
      previousPage: { path: '/development-docs/development-guide/get-started', title: 'Bắt đầu với Mini App Center' },
      nextPage: { path: '/ui-guide/design-standards', title: 'Quy chuẩn về thiết kế Mini App' }

    },


    // UI Builder Guide pages
    {
      currentPage: 'design-standards',
      previousPage: { path: '/development-docs/development-guide/develop-guide', title: 'Hướng dẫn phát triển' },
      nextPage: { path: '/ui-guide/usage-guide/button-component', title: 'Button Component' }
    },
    {
      currentPage: 'usage-guide',
      previousPage: { path: '/ui-guide/design-standards', title: 'Quy chuẩn về thiết kế Mini App' }
    },

    // Usage Guide Component pages
    {
      currentPage: 'button-component',
      previousPage: { path: '/ui-guide/design-standards', title: 'Quy chuẩn về thiết kế Mini App' },
      nextPage: { path: '/ui-guide/usage-guide/checkbox-component', title: 'Checkbox Component' }
    },
    {
      currentPage: 'checkbox-component',
      previousPage: { path: '/ui-guide/usage-guide/button-component', title: 'Button Component' },
      nextPage: { path: '/ui-guide/usage-guide/datepicker-component', title: 'Datepicker Component' }
    },
    {
      currentPage: 'datepicker-component',
      previousPage: { path: '/ui-guide/usage-guide/checkbox-component', title: 'Checkbox Component' },
      nextPage: { path: '/ui-guide/usage-guide/form-component', title: 'Form Component' }
    },
    {
      currentPage: 'form-component',
      previousPage: { path: '/ui-guide/usage-guide/datepicker-component', title: 'Datepicker Component' },
      nextPage: { path: '/ui-guide/usage-guide/icon-component', title: 'Icon Component' }
    },
    {
      currentPage: 'icon-component',
      previousPage: { path: '/ui-guide/usage-guide/form-component', title: 'Form Component' },
      nextPage: { path: '/ui-guide/usage-guide/icons-component', title: 'Icons Component' }
    },
    {
      currentPage: 'icons-component',
      previousPage: { path: '/ui-guide/usage-guide/icon-component', title: 'Icon Component' },
      nextPage: { path: '/ui-guide/usage-guide/image-component', title: 'Image Component' }
    },
    {
      currentPage: 'image-component',
      previousPage: { path: '/ui-guide/usage-guide/icons-component', title: 'Icons Component' },
      nextPage: { path: '/ui-guide/usage-guide/loading-component', title: 'Loading Component' }
    },
    {
      currentPage: 'loading-component',
      previousPage: { path: '/ui-guide/usage-guide/image-component', title: 'Image Component' },
      nextPage: { path: '/ui-guide/usage-guide/popup-component', title: 'Popup Component' }
    },
    {
      currentPage: 'popup-component',
      previousPage: { path: '/ui-guide/usage-guide/loading-component', title: 'Loading Component' },
      nextPage: { path: '/ui-guide/usage-guide/radio-component', title: 'Radio Component' }
    },
    {
      currentPage: 'radio-component',
      previousPage: { path: '/ui-guide/usage-guide/popup-component', title: 'Popup Component' },
      nextPage: { path: '/ui-guide/usage-guide/range-slider-component', title: 'Range Slider Component' }
    },
    {
      currentPage: 'range-slider-component',
      previousPage: { path: '/ui-guide/usage-guide/radio-component', title: 'Radio Component' },
      nextPage: { path: '/ui-guide/usage-guide/select-component', title: 'Select Component' }
    },
    {
      currentPage: 'select-component',
      previousPage: { path: '/ui-guide/usage-guide/range-slider-component', title: 'Range Slider Component' },
      nextPage: { path: '/ui-guide/usage-guide/slider-component', title: 'Slider Component' }
    },
    {
      currentPage: 'slider-component',
      previousPage: { path: '/ui-guide/usage-guide/select-component', title: 'Select Component' },
      nextPage: { path: '/ui-guide/usage-guide/text-component', title: 'Text Component' }
    },
    {
      currentPage: 'text-component',
      previousPage: { path: '/ui-guide/usage-guide/slider-component', title: 'Slider Component' },
      nextPage: { path: '/ui-guide/usage-guide/text-input-component', title: 'Text Input Component' }
    },
    {
      currentPage: 'text-input-component',
      previousPage: { path: '/ui-guide/usage-guide/text-component', title: 'Text Component' },
      nextPage: { path: '/ui-guide/usage-guide/timepicker-component', title: 'Timepicker Component' }
    },
    {
      currentPage: 'timepicker-component',
      previousPage: { path: '/ui-guide/usage-guide/text-input-component', title: 'Text Input Component' },
      nextPage: { path: '/ui-guide/usage-guide/toast-component', title: 'Toast Component' }
    },
    {
      currentPage: 'toast-component',
      previousPage: { path: '/ui-guide/usage-guide/timepicker-component', title: 'Timepicker Component' },
      nextPage: { path: '/ui-guide/usage-guide/typography-component', title: 'Typography Component' }
    },
    {
      currentPage: 'typography-component',
      previousPage: { path: '/ui-guide/usage-guide/toast-component', title: 'Toast Component' }
    },
    {
      currentPage: 'bottom-tab-component',
      previousPage: { path: '/ui-guide/usage-guide/typography-component', title: 'Typography Component' },
      nextPage: { path: '/ui-guide/usage-guide/box-component', title: 'Box Component' }
    },
    {
      currentPage: 'box-component',
      previousPage: { path: '/ui-guide/usage-guide/bottom-tab-component', title: 'Bottom Tab Component' },
      nextPage: { path: '/ui-guide/usage-guide/footer', title: 'Footer Component' }
    },
    {
      currentPage: 'footer',
      previousPage: { path: '/ui-guide/usage-guide/box-component', title: 'Box Component' }
    },
    // Policy Agreement pages
    {
      currentPage: 'agreement',
      previousPage: { path: '/policies/target', title: 'Mục tiêu' }
    },
    {
      currentPage: 'target',
      previousPage: { path: '/policies/agreement', title: 'Thỏa thuận chính sách' }
    },
  ];

  getNavigationFlow(currentPage: string): NavigationFlow | undefined {
    const flow = this.pageFlow.find(f => f.currentPage === currentPage);

    if (!flow) return undefined;


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
      'development-guide': 'Tài liệu hướng dẫn phát triển Mini App',
      'ui-guide': 'Hướng dẫn xây dựng dao diện Mini App',
      'policies': 'Thỏa thuận chính sách phát triển Mini App',
    };
    return sectionTitles[section] || section;
  }
}
