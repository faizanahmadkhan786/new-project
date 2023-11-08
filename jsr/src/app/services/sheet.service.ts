import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class SheetService {
  private url ='https://script.google.com/macros/s/AKfycbz8ifHelaNPU1_ceapLn3kZ60kNpxi3UBBXd0vgmcJGfvqyV69k1MNh9XzLQ7co1sf4Fg/exec'
  private myurl='https://forms.gle/donv94MGKhEYd5sM9'
  private fakeurl='https://fakestoreapi.com/products?sort=desc'
  constructor(private http:HttpClient ) {}
  myData()
  {
    return this.http.get(this.url);
  }
  AlumuniData()
  {
    return this.http.get(this.myurl);
  }
  fakedata()
  {
    return this.http.get(this.fakeurl);
  }
}
