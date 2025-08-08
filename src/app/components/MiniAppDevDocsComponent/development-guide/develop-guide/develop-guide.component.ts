import { Component } from '@angular/core';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-develop-guide',
  imports: [NzAnchorModule, RouterLink],
  templateUrl: './develop-guide.component.html',
  styleUrl: './develop-guide.component.css'
})
export class DevelopGuideComponent {

}
