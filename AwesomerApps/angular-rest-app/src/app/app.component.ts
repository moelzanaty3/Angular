import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular ZERO App';
  links = [
    { path: '/home', icon: 'home', label: 'Home' },
    { path: '/items', icon: 'list', label: 'Items' },
    { path: '/reviews', icon: 'edit', label: 'Reviews' },
    { path: '/widgets', icon: 'view_quilt', label: 'Widgets' }
  ];
}
