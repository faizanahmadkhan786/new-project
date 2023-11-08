import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NoticeService {
private url='https://gpadp.org.in/noticedata.php';

  constructor(private http:HttpClient) { }
  getData()
  {
    return this.http.get(this.url)
  }
}
