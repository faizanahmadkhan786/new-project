import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-horizontal',
  templateUrl: './horizontal.component.html',
  //imports: [NgbCollapseModule],
 // standalone: true,
  styleUrls: ['./horizontal.component.css']
})
export class HorizontalComponent {
  public isCollapsed = false;
}
