import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const apiKey: string = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getCurrentWeather(loc: string,lang:string) {
    return this.http.get(`${environment.apiUrl}/weather?q=${loc}&appid=${apiKey}&lang=${lang}`)
  }

  getForecast(loc: string ,lang:string) {
    return this.http.get(`${environment.apiUrl}/forecast?q=${loc}&appid=${apiKey}&lang=${lang}`)
  }
}
