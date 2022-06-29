import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private client: HttpClient) {}

  getData(lat, lon) {
    return this.client.get(
      'https://api.openweathermap.org/data/2.5/onecall?lat=' +
        lat.toString() +
        '&lon=' +
        lon.toString() +
        '&units=metric&lang=ru&appid=2327d2beed6095613a55fc33189499c7'
    );
  }
}
