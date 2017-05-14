import { Component } from '@angular/core';
import {CountDown} from "../../node_modules/angular2-simple-countdown/countdown";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '(logo) Guinée Solidarité Strasbourg !';

  text: any = { "Weeks": "Weeks",
    "Days": "Jours", "Hours": "Heures",
    Minutes: "Minutes", "Seconds": "Secondes",
    "MilliSeconds":"MilliSeconds" };
}
