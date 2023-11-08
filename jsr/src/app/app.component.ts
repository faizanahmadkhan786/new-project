import { Component } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { OnInit } from '@angular/core';
// import { VideoComponent } from './video.component';


import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import {faContactBook } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'jsr';
  faCoffee = faCoffee;
  faHome=faHome;
  faContactBook=faContactBook
  user!: { firstName: string; lastName: string; };
  welcome!: string;
  usernameLabel!: string;
  passwordLabel!: string;
  // translate: any;
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
  useLanguage(language: string): void {
    this.translate.use(language);
  }
  
  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);


    // this.user = { firstName: 'Sammy', lastName: 'Shark' };

    // synchronous. Also interpolate the 'firstName' parameter with a value.
    // this.welcome = this.translate.instant('welcomeMessage', { firstName: this.user.firstName });

    // asynchronous - gets translations then completes.
    // this.translate.get(['login.username', 'login.password'])
    //   .subscribe((translations: { [x: string]: string; }) => {
    //     this.usernameLabel = translations['login.username'];
    //     this.passwordLabel = translations['login.password'];
    //   });
  }
  
}
