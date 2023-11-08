import { Component, OnInit } from '@angular/core';
import data from './notice.json' ;

interface noticeboard{
  title:String,
  notice:String,
  home:String,
  new:string,
  date:string
}

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent  {
 
  
notice:noticeboard[]=data;
}

