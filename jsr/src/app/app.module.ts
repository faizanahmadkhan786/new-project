import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { AddmisionComponent } from './components/addmision/addmision.component';
import { NavComponent } from './components/nav/nav.component';
import { TestComponent } from './components/test/test.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TestingComponent } from './components/testing/testing.component';
import { HorizontalComponent } from './components/horizontal/horizontal.component';
import { ToastComponent } from './components/toast/toast.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { FocusComponent } from './components/focus/focus.component';
import { OffconvasComponent } from './components/offconvas/offconvas.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PopoverComponent } from './components/popover/popover.component';
import { PbarComponent } from './components/pbar/pbar.component';
import { TemplateComponent } from './components/template/template.component';
import { ScrollpsyComponent } from './components/scrollpsy/scrollpsy.component';
import { TableComponent } from './components/table/table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewcompComponent } from './components/newcomp/newcomp.component';
import { NgChartsModule } from 'ng2-charts';
import { LinechartComponent } from './components/linechart/linechart.component';
import { FinancechartComponent } from './components/financechart/financechart.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { RadarComponent } from './components/radar/radar.component';
import { NoticeComponent } from './components/notice/notice.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {  TranslateLoader } from '@ngx-translate/core';
import { FaqComponent } from './components/faq/faq.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
  }
  

// ngx-translate and the loader module
TranslateModule.forRoot({
    loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    }
})
// required for AOT compilation

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        AboutComponent,
        HomeComponent,
        AddmisionComponent,
        NavComponent,
        TestComponent,
        CarouselComponent,
        TestingComponent,
        HorizontalComponent,
        ToastComponent,
        TooltipComponent,
        FocusComponent,
        OffconvasComponent,
        PaginationComponent,
        PopoverComponent,
        PbarComponent,
        TemplateComponent,
        ScrollpsyComponent,
        TableComponent,
        NewcompComponent,
        LinechartComponent,
        FinancechartComponent,
        RadarComponent,
        NoticeComponent,
        FaqComponent,
        
 ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        NgbModule,
        FontAwesomeModule,
        NgChartsModule,
        YouTubePlayerModule,
        
        TranslateModule.forRoot(
            {
                loader: {
                    provide: TranslateLoader,
                      useFactory: HttpLoaderFactory,
                      deps: [HttpClient]
                  }
            }
        )


    ]
})
export class AppModule { }
