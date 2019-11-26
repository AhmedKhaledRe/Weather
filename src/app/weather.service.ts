import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

//api key for openweathermap.org
const apiKey: string = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  //handle current weather request
  getCurrentWeather(loc: string,lang:string) {
    return this.http.get(`${environment.apiUrl}/weather?q=${loc}&appid=${apiKey}&lang=${lang}`)
  }

  //handle forecast weather request
  getForecast(loc: string ,lang:string) {
    return this.http.get(`${environment.apiUrl}/forecast?q=${loc}&appid=${apiKey}&lang=${lang}`)
  }
}
