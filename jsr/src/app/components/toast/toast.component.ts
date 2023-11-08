import { Component } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  show = true;

	close() {
		this.show = false;
		setTimeout(() => (this.show = true), 3000);
	}
}
