import { formatDate } from '@angular/common';
import { Component, OnInit, DoCheck, ViewEncapsulation } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ContentComponent implements OnInit, DoCheck {
  currentTemp: any;
  currentFeelsLike: any;
  currentHum: any;
  hotDays: any;
  hotDaysString = '';

  constructor(private app: AppComponent) {}

  ngOnInit() {
    console.warn(this.app.infos);
  }

  ngDoCheck() {
    this.currentTemp = this.app.infos['dataseries'][0]['temp2m'];
    this.currentFeelsLike = this.app.infos['dataseries'][0]['msl_pressure'];
    this.currentHum = this.app.infos['dataseries'][0]['rh2m'];
  }

  filter() {
    this.hotDays = this.app.infos['hourly'].filter((day) => {
      return day['temp']['day'] > 25;
    });
    this.hotDays.forEach((day) => {
      this.hotDaysString +=
        formatDate(1000 * day['dt'], 'short', 'En-en') + ' ; ';
    });
    alert(this.hotDaysString);
  }
}
