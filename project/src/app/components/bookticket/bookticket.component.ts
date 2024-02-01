import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {NativeDateAdapter} from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { NgModule } from '@angular/core';
// import { MatMomentDateModule } from '@angular/material-moment-adapter';



interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-bookticket',
  templateUrl: './bookticket.component.html',
  styleUrls: ['./bookticket.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-US' },
  ],
 


})
export class BookticketComponent {
  pickPoint: string = '';
  destinationPoint: string = '';
  today: number = Date.now();
  position!: FormControl<any>;




searchTrain() {
  console.log('Searching for trains...');
  console.log('Pick Point:', this.pickPoint);
  console.log('Destination Point:', this.destinationPoint);
}
 selectedValue!: string;
  

foods: Food[] = [
  {value: 'first-AC', viewValue: '1st_AC'},
  {value: '2nd Class', viewValue: '2nd_AC'},
  {value: '3rd Eco', viewValue: '3E'},
  {value: 'Sl', viewValue: 'Sl'},
];

}

