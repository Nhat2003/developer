
import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { filter } from 'rxjs/operators';


interface MenuItem {
  label: string;
  key: string;
  routerLink?: string;
  isActive?: boolean;
  isOpen?: boolean;
  children?: MenuItem[];
}


interface MenuSection {
  title: string;
  icon: string;
  isOpen: boolean;
  children: MenuItem[];
}


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzInputModule,
    NzButtonModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  isCollapsed = false;

  isMobileMenuOpen = false;


  searchValue = '';


  sidebarMenuItems: MenuSection[] = [
    {
      title: 'Quy trình phát triển Mini App',
      icon: 'up',
      isOpen: true,
      children: [
        { label: 'Tổng quan quy trình phát triển Mini App', key: 'development-process', routerLink: '/miniapp-workflow/development-process' },
        { label: 'Đăng ký tài khoản Nhà phát triển', key: 'register-developer', routerLink: '/miniapp-workflow/register-developer' },
        { label: 'Phát triển Mini App', key: 'develop-app', routerLink: '/miniapp-workflow/develop-app' },
        { label: 'Kiểm duyệt Mini App', key: 'review-app', routerLink: '/miniapp-workflow/review-app' },
        { label: 'Phát hành Mini App', key: 'release-app', routerLink: '/miniapp-workflow/release-app' },
        { label: 'Cập nhật phiên bản Mini App mới', key: 'update-app', routerLink: '/miniapp-workflow/update-app' },
        { label: 'Cập nhật Mini App Framework', key: 'update-framework', routerLink: '/miniapp-workflow/update-framework' }
      ]
    },
    {
      title: 'Quy chuẩn thiết kế Mini App',
      icon: 'down',
      isOpen: false,
      children: [
        { label: 'Làm nổi bật các điểm quan trọng', key: 'highlight-important-points', routerLink: '/design-standards/highlight-important-points' },
        { label: 'Quy trình rõ ràng, tối ưu luồng trải nghiệm', key: 'clear-process', routerLink: '/design-standards/clear-process' },
        { label: 'Phân bổ thông tin rõ ràng, mạch lạc', key: 'clear-information', routerLink: '/design-standards/clear-information' },
        { label: 'Điều hướng dễ dàng', key: 'easy-navigation', routerLink: '/design-standards/easy-navigation' },
        { label: 'Giao diện thân thiện với người dùng', key: 'user-friendly-interface', routerLink: '/design-standards/user-friendly-interface' },
        { label: 'Phản hồi nhanh chóng', key: 'quick-feedback', routerLink: '/design-standards/quick-feedback' },
        { label: 'Thông báo kết quả', key: 'result-notification', routerLink: '/design-standards/result-notification' },
        { label: 'Giảm thiểu nhập liệu đầu vào', key: 'reduce-input', routerLink: '/design-standards/reduce-input' },
        { label: 'Màn hình hướng dẫn', key: 'guide-screen', routerLink: '/design-standards/guide-screen' },
        { label: 'Tiêu chuẩn thị giác', key: 'visual-standard', routerLink: '/design-standards/visual-standard' },

      ]
    },
    {
      title: 'Tài liệu hướng dẫn phát triển Mini App',
      icon: 'down',
      isOpen: false,
      children: [
        { label: 'Giới thiệu', key: 'introduction', routerLink: '/development-docs/introduction' },
        {
          label: 'Hướng dẫn phát triển',
          key: 'development-guide',
          children: [
            { label: 'Bắt đầu với Mini App Center', key: 'get-started', routerLink: '/development-docs/development-guide/get-started' },
            { label: 'Hướng dẫn phát triển', key: 'development-guide', routerLink: '/development-docs/development-guide/develop-guide' },

          ]
        }
      ]
    },
    {
      title: 'Hướng dẫn xây dựng giao diện Mini App',
      icon: 'down',
      isOpen: false,
      children: [
        { label: 'Quy chuẩn về thiết kế Mini App', key: 'design-standards', routerLink: '/ui-guide/design-standards' },
        { label: 'Sử dụng UI Components',
          key: 'usage-guide',
          children: [
            { label: 'Button Component', key: 'button-component', routerLink: '/ui-guide/usage-guide/button-component' },
            { label: 'Text Component', key: 'text-component', routerLink: '/ui-guide/usage-guide/text-component' },
            { label: 'TextInput Component', key: 'text-input-component', routerLink: '/ui-guide/usage-guide/text-input-component' },
            { label: 'Image Component', key: 'image-component', routerLink: '/ui-guide/usage-guide/image-component' },
            { label: 'Bottom tab Component', key: 'bottom-tab-component', routerLink: '/ui-guide/usage-guide/bottom-tab-component' },
            { label: 'Icon Component', key: 'icon-component', routerLink: '/ui-guide/usage-guide/icon-component' },
            { label: 'Toast Component', key: 'toast-component', routerLink: '/ui-guide/usage-guide/toast-component' },
            { label: 'Loading Component', key: 'loading-component', routerLink: '/ui-guide/usage-guide/loading-component' },
            { label: 'Popup Component', key: 'popup-component', routerLink: '/ui-guide/usage-guide/popup-component' },
            { label: 'Box Component', key: 'box-component', routerLink: '/ui-guide/usage-guide/box-component' },
            { label: 'Checkbox Component', key: 'checkbox-component', routerLink: '/ui-guide/usage-guide/checkbox-component' },
            { label: 'Typography Component', key: 'typography-component', routerLink: '/ui-guide/usage-guide/typography-component' },
            { label: 'Icons Component', key: 'icons-component', routerLink: '/ui-guide/usage-guide/icons-component' },
            { label: 'Form Component', key: 'form-component', routerLink: '/ui-guide/usage-guide/form-component' },
            { label: 'Select Component', key: 'select-component', routerLink: '/ui-guide/usage-guide/select-component' },
            { label: 'Datepicker Component', key: 'datepicker-component', routerLink: '/ui-guide/usage-guide/datepicker-component' },
            { label: 'Timepicker Component', key: 'timepicker-component', routerLink: '/ui-guide/usage-guide/timepicker-component' },
            { label: 'Radio Component', key: 'radio-component', routerLink: '/ui-guide/usage-guide/radio-component' },
            { label: 'Slider Component', key: 'slider-component', routerLink: '/ui-guide/usage-guide/slider-component' },
            { label: 'RangeSlider Component', key: 'range-slider-component', routerLink: '/ui-guide/usage-guide/range-slider-component' },
          ],

         }

      ]
    },
    {
      title: 'Thoả thuận chính sách phát triển Mini App',
      icon: 'down',
      isOpen: false,
      children: [
        { label: 'Mục tiêu', key: 'target', routerLink: '/policies/target' },
        { label: 'Thoả thuận', key: 'agreement', routerLink: '/policies/agreement' },

      ]
    }
  ];



  languageOptions = [
    { label: 'Tiếng Việt', key: 'vi' },
    { label: 'English', key: 'en' }
  ];


  toggleSection(index: number): void {
    this.sidebarMenuItems[index].isOpen = !this.sidebarMenuItems[index].isOpen;
  }

  toggleSubMenu(item: MenuItem): void {
    if (item.children) {
      item.isOpen = !item.isOpen;
    }
  }


  openMobileMenu(): void {
    this.isMobileMenuOpen = true;
    document.body.style.overflow = 'hidden';
  }


  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = '';
  }


  onSearch(): void {
    console.log('Searching for:', this.searchValue);
  }



  onLanguageChange(lang: string): void {
    console.log('Language changed to:', lang);
  }

  constructor(private router: Router) {}


  ngOnInit(): void {
    // Khởi tạo trạng thái active khi component được load
    this.updateActiveState();


    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateActiveState();
    });
  }


  updateActiveState(): void {
    const currentUrl = this.router.url;

    // Đóng tất cả các section trước
    this.sidebarMenuItems.forEach(section => {
      section.isOpen = false;
      section.children.forEach(item => {
        item.isActive = currentUrl === item.routerLink;
        item.isOpen = false;

        // Kiểm tra children của item
        if (item.children) {
          item.children.forEach(child => {
            child.isActive = currentUrl === child.routerLink;
          });
        }
      });
    });

    // Tìm và mở section chứa item active
    const activeSectionIndex = this.sidebarMenuItems.findIndex(section =>
      section.children.some(item =>
        item.isActive || (item.children && item.children.some(child => child.isActive))
      )
    );

    if (activeSectionIndex !== -1) {
      this.sidebarMenuItems[activeSectionIndex].isOpen = true;

      // Mở submenu nếu có item active trong children
      const activeItem = this.sidebarMenuItems[activeSectionIndex].children.find(item =>
        item.children && item.children.some(child => child.isActive)
      );

      if (activeItem) {
        activeItem.isOpen = true;
      }
    }
  }


  onMenuClick(item: MenuItem): void {
    console.log('Menu item clicked:', item);

    // Đóng tất cả các section trước
    this.sidebarMenuItems.forEach(section => {
      section.isOpen = false;
      section.children.forEach(child => {
        child.isActive = child.key === item.key;
        child.isOpen = false;

        // Reset children của child
        if (child.children) {
          child.children.forEach(grandChild => {
            grandChild.isActive = grandChild.key === item.key;
          });
        }
      });
    });

    // Tìm và mở section chứa item được click
    const activeSectionIndex = this.sidebarMenuItems.findIndex(section =>
      section.children.some(child =>
        child.key === item.key || (child.children && child.children.some(grandChild => grandChild.key === item.key))
      )
    );

    if (activeSectionIndex !== -1) {
      this.sidebarMenuItems[activeSectionIndex].isOpen = true;

      // Mở submenu nếu item được click là child
      const parentItem = this.sidebarMenuItems[activeSectionIndex].children.find(child =>
        child.children && child.children.some(grandChild => grandChild.key === item.key)
      );

      if (parentItem) {
        parentItem.isOpen = true;
      }
    }

    // Đóng menu mobile khi click vào item
    this.closeMobileMenu();
  }


  @HostListener('window:resize', [])
  onWindowResize() {

    if (window.innerWidth > 768 && this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }
}
