import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private client: HttpClient) {}

  getData(lat, lon) {
    return this.client.get(
      'https://www.7timer.info/bin/meteo.php?lat=' +
        lat.toString() +
        '&lon=' +
        lon.toString() +
        '&ac=0&lang=en&unit=metric&output=json&tzshift=0'
    );
  }
}
