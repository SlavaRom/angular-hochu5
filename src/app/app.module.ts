import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { HourlyWeatherComponent } from './content/hourly-weather/hourly-weather.component';

import { HttpService } from './http.service';

import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [HttpClientModule, HttpService],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    ContentComponent,
    HourlyWeatherComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
