import { Component } from '@angular/core';

@Component({
  selector: 'app-bookticket',
  templateUrl: './bookticket.component.html',
  styleUrls: ['./bookticket.component.css']
})
export class BookticketComponent {
  pickPoint: string = '';
  destinationPoint: string = '';
  today: number = Date.now();
searchTrain() {
  console.log('Searching for trains...');
  console.log('Pick Point:', this.pickPoint);
  console.log('Destination Point:', this.destinationPoint);
}

}
