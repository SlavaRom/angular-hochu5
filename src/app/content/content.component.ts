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
  updateDate: any;
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
    this.updateDate = formatDate(
      1000 * this.app.infos['current']['dt'],
      'short',
      'En-en'
    );
    this.currentTemp = this.app.infos['current']['temp'];
    this.currentFeelsLike = this.app.infos['current']['feels_like'];
    this.currentHum = this.app.infos['current']['humidity'];
    console.log(this.updateDate);
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
