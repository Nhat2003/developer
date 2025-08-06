import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';

@Component({
  selector: 'app-development-process',
  standalone: true,
  imports: [CommonModule, NzAnchorModule],
  templateUrl: './development-process.component.html',
  styleUrl: './development-process.component.css'
})
export class DevelopmentProcessComponent {
  title = 'Quy trình phát triển Mini App';

  // Dữ liệu cho workflow diagram
  workflowSteps = [
    {
      number: 1,
      title: 'Đăng ký tài khoản nhà phát triển',
      actor: 'Nhà phát triển',
      description: 'Tạo tài khoản và xác thực với Zalo Developer Platform'
    },
    {
      number: 2,
      title: 'Kiểm duyệt tài khoản',
      actor: 'Super App',
      description: 'Zalo kiểm tra và xác thực thông tin nhà phát triển'
    },
    {
      number: 3,
      title: 'Cung cấp tài liệu hướng dẫn',
      actor: 'Super App',
      description: 'Cung cấp bộ tài liệu hướng dẫn sử dụng cho nhà phát triển'
    },
    {
      number: 4,
      title: 'Tham khảo tài liệu hướng dẫn',
      actor: 'Nhà phát triển',
      description: 'Nghiên cứu và tham khảo tài liệu hướng dẫn'
    },
    {
      number: 5,
      title: 'Cài đặt môi trường phát triển',
      actor: 'Nhà phát triển',
      description: 'Cài đặt SDK và công cụ phát triển cần thiết'
    },
    {
      number: 6,
      title: 'Xây dựng và phát triển Mini App',
      actor: 'Nhà phát triển',
      description: 'Phát triển Mini App theo hướng dẫn và tiêu chuẩn'
    },
    {
      number: 7,
      title: 'Submit ứng dụng',
      actor: 'Nhà phát triển',
      description: 'Gửi ứng dụng để kiểm duyệt'
    },
    {
      number: 8,
      title: 'Gửi yêu cầu kiểm duyệt',
      actor: 'Nhà phát triển',
      description: 'Gửi yêu cầu kiểm duyệt Mini App'
    },
    {
      number: 9,
      title: 'Thông báo đến người kiểm duyệt',
      actor: 'Super App',
      description: 'Hệ thống thông báo cho đội ngũ kiểm duyệt'
    },
    {
      number: 10,
      title: 'Kiểm thử và kiểm duyệt',
      actor: 'Super App',
      description: 'Kiểm thử và kiểm duyệt thông tin Mini App'
    },
    {
      number: 11,
      title: 'Nhận thông báo lỗi',
      actor: 'Nhà phát triển',
      description: 'Nhận thông báo lỗi nếu kiểm duyệt không đạt'
    },
    {
      number: 12,
      title: 'Cấp phép phát hành',
      actor: 'Super App',
      description: 'Cấp phép phát hành phiên bản cho Mini App'
    },
    {
      number: 13,
      title: 'Phát hành Mini App',
      actor: 'Super App',
      description: 'Phát hành Mini App tới người dùng'
    },
    {
      number: 14,
      title: 'Nhận kết quả kiểm duyệt',
      actor: 'Nhà phát triển',
      description: 'Nhận kết quả kiểm duyệt và phát hành'
    }
  ];
}
