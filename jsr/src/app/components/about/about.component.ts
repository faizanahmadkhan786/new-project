import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  // roll:number=10;
  // name:string="afaque";
  // status:boolean=true;
  kdata:any=
  {
  id:1,
  title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price:109.95,
  description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category:"men's clothing",
  image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating:{"rate":3.9,"count":120}}
  ngOnInit()
  {
    // console.log(this.roll);
    // console.log(this.status);
    // console.log(this.name);
  }
  // fun(){
  //   this.status=false;
  // }
}
