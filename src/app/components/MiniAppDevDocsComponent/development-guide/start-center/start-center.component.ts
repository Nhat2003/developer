import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';

@Component({
  selector: 'app-start-center',
  standalone: true,
  imports: [
    CommonModule,
    NzAnchorModule
  ],
  templateUrl: './start-center.component.html',
  styleUrl: './start-center.component.css'
})
export class StartCenterComponent {

}
