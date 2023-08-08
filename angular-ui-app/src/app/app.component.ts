import { Component } from '@angular/core';
import { MatBadge } from '@angular/material/badge';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // standalone: true,
  // import: MatBadge
})
export class AppComponent {
  title = 'angular-ui-app';
  page = 4;
}
