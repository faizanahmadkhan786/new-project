import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  bioSection = new FormGroup({
    firstName: new FormControl<string>('',
    [
      Validators.minLength(3),
      Validators.required
    ]),
    lastName: new FormControl<string>('', [Validators.minLength(3), Validators.required]),
     age: new FormControl<number>(0, [Validators.min(18), Validators.required])
    // lastName: new FormControl<string>(''),
    // age: new FormControl<number>(0)
  });
  constructor() { }
  ngOnInit(){
    
  }

}
