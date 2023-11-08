import { Component } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent {
roll:number=10;
name:string="afaque";
status:boolean=true;
ngOnInit()
{
  console.log(this.roll);
  console.log(this.status);
  console.log(this.name);
}
fun(){
  this.status=false;
}
}

