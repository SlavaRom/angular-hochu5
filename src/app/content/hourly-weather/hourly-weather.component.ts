import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-hourly-weather',
  templateUrl: './hourly-weather.component.html',
  styleUrls: ['./hourly-weather.component.css'],
})
export class HourlyWeatherComponent implements OnInit {
  items = [];
  constructor(private app: AppComponent) {}

  ngOnInit() {
    this.app.infos['hourly'].forEach((hour) =>
      this.items.push(
        new Hourly(
          formatDate(1000 * hour['dt'], 'shortTime', 'En-en'),
          hour['temp'],
          hour['humidity']
        )
      )
    );
    this.items.length = 24;
    console.log(this.items);
  }
}

class Hourly {
  time: string;
  temp: string;
  hum: string;
  constructor(t, te, h) {
    this.hum = h;
    this.temp = te;
    this.time = t;
  }
}
