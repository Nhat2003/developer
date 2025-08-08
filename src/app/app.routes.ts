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
  // Hướng dẫn xây dựng giao diện Mini App
 {
  path: 'ui-guide',
  data: {
    breadcrumb: 'Hướng dẫn xây dựng giao diện Mini App'
  },
  children: [
    {
      path: 'design-standards',
      loadComponent: () =>
        import('./components/MiniAppUIBuilderGuideComponent/design-standards/design-standards.component')
          .then(m => m.DesignStandardsComponent),
      data: {
        breadcrumb: 'Quy chuẩn về thiết kế Mini App'
      }
    },
    {
      path: 'usage-guide',
      data: {
        breadcrumb: 'Sử dụng UI Component'
      },
      children: [
        {
          path: 'button-component',
          loadComponent: () =>
            import('./components/MiniAppUIBuilderGuideComponent/usage-guide/button-component/button-component.component')
              .then(m => m.ButtonComponentComponent),
          data: { breadcrumb: 'Button Component' }
        },
        {
          path: 'text-component',
          loadComponent: () =>
            import('./components/MiniAppUIBuilderGuideComponent/usage-guide/text-component/text-component.component')
              .then(m => m.TextComponentComponent),
          data: { breadcrumb: 'Text Component' }
        },
        {
          path: 'text-input-component',
          loadComponent: () =>
            import('./components/MiniAppUIBuilderGuideComponent/usage-guide/text-input-component/text-input-component.component')
              .then(m => m.TextInputComponentComponent),
          data: { breadcrumb: 'TextInput Component' }
        },
        {
          path: 'image-component',
          loadComponent: () =>
            import('./components/MiniAppUIBuilderGuideComponent/usage-guide/image-component/image-component.component')
              .then(m => m.ImageComponentComponent),
          data: { breadcrumb: 'Image Component' }
        },
        {
          path: 'bottom-tab-component',
          loadComponent: () =>
            import('./components/MiniAppUIBuilderGuideComponent/usage-guide/bottom-tab-component/bottom-tab-component.component')
              .then(m => m.BottomTabComponentComponent),
          data: { breadcrumb: 'Bottom tab Component' }
        },
        {
          path: 'icon-component',
          loadComponent: () =>
            import('./components/MiniAppUIBuilderGuideComponent/usage-guide/icon-component/icon-component.component')
              .then(m => m.IconComponentComponent),
          data: { breadcrumb: 'Icon Component' }
        },
        {
          path: 'toast-component',
          loadComponent: () =>
            import('./components/MiniAppUIBuilderGuideComponent/usage-guide/toast-component/toast-component.component')
              .then(m => m.ToastComponentComponent),
          data: { breadcrumb: 'Toast Component' }
        },
        {
          path: 'loading-component',
          loadComponent: () =>
            import('./components/MiniAppUIBuilderGuideComponent/usage-guide/loading-component/loading-component.component')
              .then(m => m.LoadingComponentComponent),
          data: { breadcrumb: 'Loading Component' }
        },
        {
          path: 'popup-component',
          loadComponent: () =>
            import('./components/MiniAppUIBuilderGuideComponent/usage-guide/popup-component/popup-component.component')
              .then(m => m.PopupComponentComponent),
          data: { breadcrumb: 'Popup Component' }
        },
        {
          path: 'box-component',
          loadComponent: () =>
            import('./components/MiniAppUIBuilderGuideComponent/usage-guide/box-component/box-component.component')
              .then(m => m.BoxComponentComponent),
          data: { breadcrumb: 'Box Component' }
        },
        {
          path: 'checkbox-component',
          loadComponent: () =>
            import('./components/MiniAppUIBuilderGuideComponent/usage-guide/checkbox-component/checkbox-component.component')
              .then(m => m.CheckboxComponentComponent),
          data: { breadcrumb: 'Checkbox Component' }
        },
        {
          path: 'typography-component',
          loadComponent: () =>
            import('./components/MiniAppUIBuilderGuideComponent/usage-guide/typography-component/typography-component.component')
              .then(m => m.TypographyComponentComponent),
          data: { breadcrumb: 'Typography Component' }
        },
        {
          path: 'icons-component',
          loadComponent: () =>
            import('./components/MiniAppUIBuilderGuideComponent/usage-guide/icons-component/icons-component.component')
              .then(m => m.IconsComponentComponent),
          data: { breadcrumb: 'Icons Component' }
        },
        {
          path: 'form-component',
          loadComponent: () =>
            import('./components/MiniAppUIBuilderGuideComponent/usage-guide/form-component/form-component.component')
              .then(m => m.FormComponentComponent),
          data: { breadcrumb: 'Form Component' }
        },
        {
          path: 'select-component',
          loadComponent: () =>
            import('./components/MiniAppUIBuilderGuideComponent/usage-guide/select-component/select-component.component')
              .then(m => m.SelectComponentComponent),
          data: { breadcrumb: 'Select Component' }
        },
        {
          path: 'datepicker-component',
          loadComponent: () =>
            import('./components/MiniAppUIBuilderGuideComponent/usage-guide/datepicker-component/datepicker-component.component')
              .then(m => m.DatepickerComponentComponent),
          data: { breadcrumb: 'Datepicker Component' }
        },
        {
          path: 'timepicker-component',
          loadComponent: () =>
            import('./components/MiniAppUIBuilderGuideComponent/usage-guide/timepicker-component/timepicker-component.component')
              .then(m => m.TimepickerComponentComponent),
          data: { breadcrumb: 'Timepicker Component' }
        },
        {
          path: 'radio-component',
          loadComponent: () =>
            import('./components/MiniAppUIBuilderGuideComponent/usage-guide/radio-component/radio-component.component')
              .then(m => m.RadioComponentComponent),
          data: { breadcrumb: 'Radio Component' }
        },
        {
          path: 'slider-component',
          loadComponent: () =>
            import('./components/MiniAppUIBuilderGuideComponent/usage-guide/slider-component/slider-component.component')
              .then(m => m.SliderComponentComponent),
          data: { breadcrumb: 'Slider Component' }
        },
        {
          path: 'range-slider-component',
          loadComponent: () =>
            import('./components/MiniAppUIBuilderGuideComponent/usage-guide/range-slider-component/range-slider-component.component')
              .then(m => m.RangeSliderComponentComponent),
          data: { breadcrumb: 'RangeSlider Component' }
        }
      ]
    }
  ]
},


  // Thoả thuận chính sách phát triển Mini App
  {
    path: 'policies',
    data: {
      breadcrumb: 'Thoả thuận chính sách phát triển Mini App'
    },
    children: [
      { path: 'target', loadComponent: () => import('./components/MiniAppPolicyAgreementComponent/target/target.component')
      .then(m => m.TargetComponent),
      data:{
        breadcrumb: 'Mục tiêu'
      }
     },
      { path: 'agreement', loadComponent: () => import('./components/MiniAppPolicyAgreementComponent/agreement/agreement.component')
      .then(m => m.AgreementComponent),
      data:{
        breadcrumb: 'Thoả thuận'
      }
    }
    ]
  }

];



