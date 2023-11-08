import { Component, OnInit } from '@angular/core';
import { SheetService } from 'src/app/services/sheet.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  form: any;

constructor(private fetchform:SheetService){}  
 ngOnInit() {
  this.fetchform.AlumuniData().subscribe((accept:any)=>
  {
    this.form=accept;
    console.log(accept);
  })
 }
}
