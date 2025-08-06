import { Component } from '@angular/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
@Component({
  selector: 'app-register-developer',
  imports: [NzBreadCrumbModule, NzAnchorModule],
  templateUrl: './register-developer.component.html',
  styleUrl: './register-developer.component.css'
})
export class RegisterDeveloperComponent {

}
