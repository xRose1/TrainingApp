import { Component } from '@angular/core';
import { Platform, AlertController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { WpserviceService } from './wpservice.service';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Router } from '@angular/router';
import { Badge } from '@ionic-native/badge/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  category: any;
  constructor(
    private badge: Badge,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private wp: WpserviceService,
    private oneSignal: OneSignal,
    private router: Router,
    private mc: MenuController
  ) {
    this.initializeApp();
 
    this.wp.getCategory().subscribe(data=>{
      this.category=data;
      console.log(data);
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if(this.platform.is('cordova')){
        this.SetupPush();

      };
      this.badge.set(10);
    });
  }


  SetupPush(){
  this.oneSignal.startInit('05fa7d3f-9359-40a2-84f2-e520111bd8e0', '225178861889');

  this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);

  this.oneSignal.handleNotificationReceived().subscribe(() => {
  // do something when notification is received
  });

  this.oneSignal.handleNotificationOpened().subscribe(data => {
      this.router.navigate(['/','single', data.notification.payload.additionalData.postid]);
  });

  this.oneSignal.endInit();
}
goToCat(id: number){
  this.router.navigate(['/singlepost',id]);
  this.mc.close();
}
}
