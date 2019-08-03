import { LoginService } from './../../services/login.service';
import { PlantsService } from './../../services/plants.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({

  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  nonce: Observable<any>;
  loginCookie: Observable<any>;
  plants: Observable<any>;
  nonceValue: string;
  user: string;
  password: string;
  toast: any;
  loggedin: boolean = false;


  constructor(public toastController: ToastController, private plantsService: PlantsService, private loginService: LoginService, public storage: Storage, private splashScreen: SplashScreen, private router: Router) { }

  ngOnInit() {
    this.splashScreen.show();
    this.splashScreen.hide();


    this.storage.get('cookie').then((val) => {
      if(val === null) {

        this.loggedin = false;
        this.getNonce();
        this.getPlants();
      }
      else {
        this.loggedin = true;
        console.log("cookie is "+val);
        this.getPlants();
      }
    });
  }

  showToast() {
    this.toast = this.toastController.create({
      message: 'Incorrect login or password',
      duration: 2000
    }).then((toastData)=>{
      console.log(toastData);
      toastData.present();
    });
  }

  go() {
    this.router.navigateByUrl('/monthly');

  }

  login(form){
    console.log(form.value)

    this.nowLogin(form.value.email, form.value.password);
  }

  getNonce() {
    // Call our service function which returns an Observable
    this.nonce = this.loginService.getNonce();
    this.nonce.subscribe(data => {
      console.log('my data ', data);
      this.nonceValue = data["nonce"];
      console.log(data["nonce"]);
      //this.nowLogin();
    });
  }

  getPlants() {
    this.plants = this.plantsService.getPlants();
    this.plants.subscribe(data => {
      //console.log('plant data ', data);
      this.storage.set('plants', data);

      this.storage.get('plants').then((val) => {
        console.log('Plants are ', val);
      });

    });
  }

  nowLogin(user, password) {
    //console.log("nonce is "+this.nonceValue);
    this.loginCookie = this.loginService.login(this.nonceValue, user, password);
    this.loginCookie.subscribe(data => {
      console.log('my cookie ', data);
      this.storage.set('cookie', data["cookie"]);
      console.log('cookie is ', data["cookie"]);
      if(data["cookie"] === undefined) {

        this.showToast();
      }
      else {
        this.loggedin = true;
        this.go();
      }



    });
  }
}

