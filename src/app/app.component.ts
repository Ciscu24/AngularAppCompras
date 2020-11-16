import { Component, OnInit } from '@angular/core';
import firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAeLVrLVi28sNQLvofxwpIAxtCWoyc3S-g',
      authDomain: 'comprasapp-dad76.firebaseapp.com'
    });
  }
}
