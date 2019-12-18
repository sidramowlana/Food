import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  // selectedNaviagtion = 'recipe';
  // onNaviagte(feature:string)
  // {
  //   this.selectedNaviagtion=feature;
  // }

  ngOnInit(){
    //initializing the firebase sdk so it can be used throughout the application
    firebase.initializeApp({
      apiKey: "AIzaSyCHnUKG-Rk0Ky0N2V5G4YsrE_3O65v6_Hk",
    authDomain: "food-recipe-book-880f1.firebaseapp.com"
    })
  }

}
