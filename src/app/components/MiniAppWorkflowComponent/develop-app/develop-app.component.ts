import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';

@Component({
  selector: 'app-develop-app',
  standalone: true,
  imports: [CommonModule, NzAnchorModule],
  templateUrl: './develop-app.component.html',
  styleUrl: './develop-app.component.css'
})
export class DevelopAppComponent {

}
