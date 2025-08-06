import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';


@Component({
  selector: 'app-introduction',
  imports: [CommonModule, NzAnchorModule],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css'
})
export class IntroductionComponent {

}
