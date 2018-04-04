import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CKEditorModule } from 'ngx-ckeditor';
import { ApiService, DashboardService, LoginService, TicketCreationService } from '../shared';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list'; 
import { LoginPage } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ChartPage } from '../pages/chart/chart';
import { SideMenuContentComponent } from '../pages/side-menu-content/side-menu-content.component';
import { TicketCreationPage } from '../pages/tickets/ticketcreation/ticketcreation';
import { TicketDashboardPage } from '../pages/tickets/ticketdashboard/ticketdashboard';
import { TicketDetailsPage } from '../pages/tickets/ticketdetails/ticketdetails';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SharedService } from '../shared.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    DashboardPage,
    ChartPage,
    SideMenuContentComponent,
    TicketCreationPage,
    TicketDashboardPage,
    TicketDetailsPage
  ],
  imports: [
    BrowserModule,
    CKEditorModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule,
    MaterialModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ChartPage,
    DashboardPage,
    TicketCreationPage,
    TicketDashboardPage,
    TicketDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiService,
    DashboardService,
    LoginService,
    TicketCreationService,
    SharedService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
