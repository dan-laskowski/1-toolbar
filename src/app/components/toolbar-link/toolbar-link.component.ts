import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-link',
  templateUrl: './toolbar-link.component.html',
  styleUrls: ['./toolbar-link.component.css'],
})
export class ToolbarLinkComponent {
  @Input() name: string = '';
  @Input() location: string = '#';
}
