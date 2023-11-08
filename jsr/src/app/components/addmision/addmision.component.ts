import { Component, OnInit } from '@angular/core';
import data from './students.json';
import datas  from './placement.json';
import { NoticeService } from 'src/app/services/notice.service';
import { SheetService } from 'src/app/services/sheet.service';

interface Students{
  sid:Number,
  name:String,
  branch:string,
  roll:Number,
  photo:String
}
interface Placements{
  id:Number,
  BoardRoll:Number,
  Name:String,
  Company:String

}
interface PlacementsData{
  mechanical:Placements[],
 electrical:Placements[],
 metallurgy:Placements[],
 cse:Placements[]


}
interface Currentstudents{
  current:PlacementsData
}


@Component({
  selector: 'app-addmision',
  templateUrl: './addmision.component.html',
  styleUrls: ['./addmision.component.css']
})
export class AddmisionComponent implements OnInit {
  notices: any;
  sheets: any;
  form: any;
  fake: any;
 
  constructor(private fetchData:NoticeService,
    private fetchSheet:SheetService,
    private fetchform:SheetService,
    private fetchfakeurl:SheetService){}
  
  roll:number=10;
  name:string="afaque";
  button:string="show"
  status:boolean=true;
  isstatus:boolean=false;
  ischeck:boolean=false;
  translate: any;
  ngOnInit()
  {
    this.fetchData.getData().subscribe((response:any)=>
   
    {
      console.log(response);
      this.notices=response;
      
    })
    this.fetchSheet.myData().subscribe((res:any)=>
    {
      this.sheets=res;
      console.log(res);
    })
    this.fetchform.AlumuniData().subscribe((accept:any)=>
    {
      this.form=accept;
      console.log(accept);
    })
    this.fetchfakeurl.fakedata().subscribe((respond:any)=>
    {
      this.fake=respond;
      console.log(respond);
    })

    console.log(this.roll);
    console.log(this.status);
    console.log(this.name);
    console.log(this.students);
    console.log(this.price);
  }
  hs()
  {
    if(this.status==true){
      this.status=false;
      this.button="show";
    }
    else{
      this.status=true;
      this.button="hide";
    }
  }
  fun(){
    this.status=false;
  }
  myfun()
  {
    this.status=true;
  }
  increment()
  {
    this.roll++;
  }
  students: Students[]=data ;
placement: Currentstudents=datas;

price:any=1000;
result:any=75;
decimal_value: number = 5.123456789;




}