import { Component } from '@angular/core';
import { LeftNavBarComponent } from '../nav-bar/left-nav-bar/left-nav-bar.component';
import { RightNavBarComponent } from '../nav-bar/right-nav-bar/right-nav-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LeftNavBarComponent,RightNavBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
