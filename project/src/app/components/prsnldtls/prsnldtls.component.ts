import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { countries } from 'src/country-data';


@Component({
  selector: 'app-prsnldtls',
  templateUrl: './prsnldtls.component.html',
  styleUrls: ['./prsnldtls.component.css'],


})
export class PrsnldtlsComponent implements OnInit {
  registerSubmit() {
console.log(this.registerform)
}
public countries:any = countries

  constructor(){}
ngOnInit(): void {

}
Roles: any;
registerform=new FormGroup({
  firstname: new FormControl<'string'>('string'),
  lastname :new FormControl<'string'>('string'),
  // age: new FormControl<number>(),
});















}
