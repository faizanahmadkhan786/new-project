import { Component } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-template',
  // standalone: true,
  // imports: [NgbRatingModule],
  templateUrl: './template.component.html',
  styles: [
		`
			i {
				font-size: 1.5rem;
				padding-right: 0.1rem;
				color: #b0c4de;
			}
			.filled {
				color: #1e90ff;
			}
			.low {
				color: #deb0b0;
			}
			.filled.low {
				color: #ff1e1e;
			}
		`,
	],
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  currentRate = 6
}
