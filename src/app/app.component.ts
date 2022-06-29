import { Component, OnInit } from '@angular/core';

import { HttpService } from './http.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ';
  infos = [];
  lat = 57.0;
  lon = 23.05;

  constructor(private ht: HttpService) {}
  ngOnInit() {
    this.getWeather(this.lat, this.lon);
  }

  getWeather(lat, lon) {
    console.log('app getWeather', this.lat, this.lon);
    this.ht.getData(lat, lon).subscribe(
      (data: any) => {
        this.infos = data;
        console.log('getWeather', this.infos);
      },
      (error) =>
        console.warn(
          'exception in request to Api: ' +
            error.status +
            ' ' +
            error.cause +
            ' ' +
            error.message
        ),
      () => console.log('observable complete')
    );
  }
}
