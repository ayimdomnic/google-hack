import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';

// Here we import both LoginPage and Firebase
import {LoginPage} from './pages/login/login';
import * as firebase from 'firebase';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform) {

    /**
     * This is Firebase's config object, where you'll store your app's information, this is a test config
     * from a test app I built, if you don't know where to find this info you can go to:
     * https://console.firebase.google.com/project/<<Your Firebase App>>/overview
     *
     */
    var config = {
      apiKey: "AIzaSyBwEUe6x_w_yLFrr--xYLQJLxRT2Rc8vtY",
      authDomain: "ionic-firebase-auth-9f555.firebaseapp.com",
      databaseURL: "https://ionic-firebase-auth-9f555.firebaseio.com",
      storageBucket: "ionic-firebase-auth-9f555.appspot.com",
    };

    firebase.initializeApp(config);

    /**
     * [auth description]
     * This is a firebase auth observer that's listening to auth changes, it's going to fire on every auth change
     * I have it set to HomePage on login and LoginPage on logout, feel free to edit this.
     */
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.rootPage = HomePage;
      } else {
        this.rootPage = LoginPage;
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);
