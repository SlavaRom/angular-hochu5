import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { HttpService } from './http.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  name = 'Angular ';
  infos = [];
  lat: any;
  lon: any;

  constructor(private ht: HttpService) {}
  ngOnInit() {
    this.lat = +localStorage.getItem('lat');
    this.lon = +localStorage.getItem('lon');
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
        alert(
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
