import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private client: HttpClient) {}

  getData(lat, lon) {
    return this.client.get(
      'http://www.7timer.info/bin/meteo.php?lat=' +
        lat.toString() +
        '&lon=' +
        lon.toString() +
        'product=meteo&output=json&tzshift=0'
    );
  }
}
