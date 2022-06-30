import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HeaderComponent implements OnInit {
  nameApp = 'Weather';
  logoUrl =
    'https://st.depositphotos.com/1291894/1952/i/450/depositphotos_19521727-stock-photo-umbrella.jpg';

  lat: number;
  lon: number;
  constructor(private app: AppComponent) {}

  ngOnInit() {
    this.lat = this.app.lat;
    this.lon = this.app.lon;
  }

  changeCord(lat, lon) {
    console.log('changeCord', lat, lon);
    this.app.lat = this.lat;
    this.app.lon = this.lon;
    localStorage.setItem('lat', this.lat.toString());
    localStorage.setItem('lon', this.lon.toString());
    this.app.getWeather(this.lat, this.lon);
  }
}
