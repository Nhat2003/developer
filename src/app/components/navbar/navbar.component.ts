import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    NzLayoutModule,
    NzMenuModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzAvatarModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  searchValue = '';
  isNavbarHidden = false;
  activeDropdown: number | null = null;
  private lastScrollTop = 0;

  // Menu items for main navigation
  mainMenuItems = [
    {
      label: 'Bắt đầu',
      icon: 'down',
      children: [

      ]
    },
    {
      label: 'Tài liệu',
      icon: 'down',
      children: [
        { label: 'Quy trình phát triển Mini App', key: 'development-process' },
        { label: 'Quy chuẩn thiết kế Mini App', key: 'design-standard' },
        { label: 'Tài liệu hướng dẫn phát triển Mini App', key: 'development-guide' },
        { label: 'Hướng dẫn xây dựng giao diện Mini App', key: 'ui-guide' },
        { label: 'Thoả thuận chính sách phát triển Mini App', key: 'policy' }
      ]
    },
    {
      label: 'Tin tức',
      icon: 'down',
      children: [
        { label: 'Quảng cáo', key: 'advertising' },
        { label: 'Khuyến mãi', key: 'promotions' }
      ]
    },
    {
      label: 'Mini App',
      icon: 'down',
      children: [

      ]
    }
  ];

  // Language options
  languageOptions = [
    { label: 'Tiếng Việt', key: 'vi' },
    { label: 'English', key: 'en' }
  ];

  onSearch(): void {
    console.log('Searching for:', this.searchValue);
  }

  onLanguageChange(lang: string): void {
    console.log('Language changed to:', lang);
  }

  onMenuClick(item: any): void {
    console.log('Menu item clicked:', item);
  }

  showDropdown(index: number): void {
    const item = this.mainMenuItems[index];
    if (item.children && item.children.length > 0) {
      this.activeDropdown = index;
    }
  }

  hideDropdown(index: number): void {
    this.activeDropdown = null;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > this.lastScrollTop && st > 20) {

      this.isNavbarHidden = true;
    } else {

      this.isNavbarHidden = false;
    }
    this.lastScrollTop = st <= 0 ? 0 : st;
  }
}
