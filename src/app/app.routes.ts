import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) },

  // Quy trình phát triển MiniApp
  {
    path: 'miniapp-workflow',
    data: {
      breadcrumb: 'Quy trình phát triển Mini App'  // Mục cha
    },
    children: [
      {
        path: '',
        redirectTo: 'development-process',
        pathMatch: 'full'
      },
      {
        path: 'development-process',
        loadComponent: () => import('./components/MiniAppWorkflowComponent/development-process/development-process.component')
          .then(m => m.DevelopmentProcessComponent),
        data: {
          breadcrumb: 'Tổng quan quy trình phát triển MiniApp'
        }
      },
      {
        path: 'register-developer',
        loadComponent: () => import('./components/MiniAppWorkflowComponent/register-developer/register-developer.component')
          .then(m => m.RegisterDeveloperComponent),
        data: {
          breadcrumb: 'Đăng ký nhà phát triển'
        }
      },
      {
        path: 'develop-app',
        loadComponent: () => import('./components/MiniAppWorkflowComponent/develop-app/develop-app.component')
          .then(m => m.DevelopAppComponent),
        data: {
          breadcrumb: 'Phát triển ứng dụng'
        }
      },
      {
        path: 'review-app',
        loadComponent: () => import('./components/MiniAppWorkflowComponent/review-app/review-app.component')
          .then(m => m.ReviewAppComponent),
        data: {
          breadcrumb: 'Đánh giá ứng dụng'
        }
      },
      {
        path: 'release-app',
        loadComponent: () => import('./components/MiniAppWorkflowComponent/release-app/release-app.component')
          .then(m => m.ReleaseAppComponent),
        data: {
          breadcrumb: 'Phát hành ứng dụng'
        }
      },
      {
        path: 'update-app',
        loadComponent: () => import('./components/MiniAppWorkflowComponent/update-app/update-app.component')
          .then(m => m.UpdateAppComponent),
        data: {
          breadcrumb: 'Cập nhật ứng dụng'
        }
      },
      {
        path: 'update-framework',
        loadComponent: () => import('./components/MiniAppWorkflowComponent/update-framework/update-framework.component')
          .then(m => m.UpdateFrameworkComponent),
        data: {
          breadcrumb: 'Cập nhật framework'
        }
      }
    ]
  },

  // Quy chuẩn thiết kế Mini App
  {
    path: 'design-standards',
    data: {
      breadcrumb: 'Quy chuẩn thiết kế Mini App'
    },
    children: [
      {
        path: '',
        redirectTo: 'highlight-important-points',
        pathMatch: 'full'
      },
      {
        path: 'highlight-important-points',
        loadComponent: () => import('./components/MiniAppDesignStandardsComponent/highlight-important-points/highlight-important-points.component')
          .then(m => m.HighlightImportantPointsComponent),
        data: {
          breadcrumb: 'Làm nổi bật các điểm quan trọng'
        }
      },
      {
        path: 'clear-process',
        loadComponent: () => import('./components/MiniAppDesignStandardsComponent/clear-process/clear-process.component')
          .then(m => m.ClearProcessComponent),
        data: {
          breadcrumb: 'Quy trình rõ ràng, tối ưu luồng trải nghiệm'
        }
      },
      {
        path: 'clear-information',
        loadComponent: () => import('./components/MiniAppDesignStandardsComponent/clear-information/clear-information.component')
          .then(m => m.ClearInformationComponent),
        data: {
          breadcrumb: 'Phân bổ thông tin rõ ràng, mạch lạc'
        }
      },
      {
        path: 'easy-navigation',
        loadComponent: () => import('./components/MiniAppDesignStandardsComponent/easy-navigation/easy-navigation.component')
          .then(m => m.EasyNavigationComponent),
        data: {
          breadcrumb: 'Điều hướng dễ dàng'
        }
      },
      {
        path: 'user-friendly-interface',
        loadComponent: () => import('./components/MiniAppDesignStandardsComponent/user-friendly-interface/user-friendly-interface.component')
          .then(m => m.UserFriendlyInterfaceComponent),
        data: {
          breadcrumb: 'Giao diện thân thiện với người dùng'
        }
      },
      {
        path: 'quick-feedback',
        loadComponent: () => import('./components/MiniAppDesignStandardsComponent/quick-feedback/quick-feedback.component')
          .then(m => m.QuickFeedbackComponent),
        data: {
          breadcrumb: 'Phản hồi nhanh chóng'
        }
      },
      {
        path: 'result-notification',
        loadComponent: () => import('./components/MiniAppDesignStandardsComponent/result-notification/result-notification.component')
          .then(m => m.ResultNotificationComponent),
        data: {
          breadcrumb: 'Thông báo kết quả'
        }
      },
      {
        path: 'reduce-input',
        loadComponent: () => import('./components/MiniAppDesignStandardsComponent/reduce-input/reduce-input.component')
          .then(m => m.ReduceInputComponent),
        data: {
          breadcrumb: 'Giảm thiểu nhập liệu đầu vào'
        }
      },
      {
        path: 'guide-screen',
        loadComponent: () => import('./components/MiniAppDesignStandardsComponent/guide-screen/guide-screen.component')
          .then(m => m.GuideScreenComponent),
        data: {
          breadcrumb: 'Màn hình hướng dẫn'
        }
      },
      {
        path: 'visual-standard',
        loadComponent: () => import('./components/MiniAppDesignStandardsComponent/visual-standard/visual-standard.component')
          .then(m => m.VisualStandardComponent),
        data: {
          breadcrumb: 'Tiêu chuẩn thị giác'
        }
      },
    ]
  },

  // Tài liệu hướng dẫn phát triển Mini App
  {
    path: 'development-docs',
    data: {
      breadcrumb: 'Tài liệu hướng dẫn phát triển Mini App'
    },
    children: [
      {
        path: '',
        redirectTo: 'introduction',
        pathMatch: 'full'
      },
      {
        path: 'introduction',
        loadComponent: () => import('./components/MiniAppDevDocsComponent/introduction/introduction.component')
        .then(m => m.IntroductionComponent),
        data: {
          breadcrumb: 'Giới thiệu'
        }
      },
      {
        path: 'development-guide',
        data: {
          breadcrumb: 'Hướng dẫn phát triển'
        },
        children: [
          {
            path: 'get-started',
            loadComponent: () => import('./components/MiniAppDevDocsComponent/development-guide/start-center/start-center.component')
            .then(m => m.StartCenterComponent),
            data: {
              breadcrumb: 'Bắt đầu với Mini App Center'
            }
          },
          {
            path: 'develop-guide',
            loadComponent: () => import('./components/MiniAppDevDocsComponent/development-guide/develop-guide/develop-guide.component')
            .then(m => m.DevelopGuideComponent),
            data: {
              breadcrumb: 'Hướng dẫn phát triển'
            }
          }
        ]
      }
    ]
  },

];



