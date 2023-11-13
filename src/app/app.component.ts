import { Component } from '@angular/core';
import HomeLink from 'src/app/shared/interfaces/HomeLink';
import { homeLinks } from '../../../homeLinks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '1-toolbar';

  links: HomeLink[] = homeLinks;
}
