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
  pressure: any;
  currentHum: any;
  hotDays: any;
  hotDaysString = '';

  constructor(private app: AppComponent) {}

  ngOnInit() {
    console.warn(this.app.infos);
  }

  ngDoCheck() {
    this.currentTemp = this.app.infos['dataseries'][0]['temp2m'];
    this.pressure = this.app.infos['dataseries'][0]['msl_pressure'];
    this.currentHum = this.app.infos['dataseries'][0]['rh2m'];
    console.log(
      formatDate(
        Date() + this.app.infos['timepoint'] * 60 * 60 * 1000,
        'shortTime',
        'En-en'
      )
    );
  }
}
