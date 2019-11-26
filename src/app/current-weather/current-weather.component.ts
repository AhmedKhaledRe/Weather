import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent {

  loc$: Observable<string>;
  currentWeather: any = <any>{};

  constructor(private store: Store<any>,private weatherService: WeatherService) {
    //This sends the keyword to the service function which searches for the weather data according to the keyword we enter.
    this.loc$ = store.pipe(select('loc'));
    this.loc$.subscribe(loc => {
      this.searchWeather(loc);
    });
  }

  searchWeather(loc: string) {
    this.currentWeather = {};
    this.weatherService.getCurrentWeather(loc,localStorage.getItem('locale')).subscribe(res => {
        this.currentWeather = res;},
        err => {});
  }

  resultFound() {
    return Object.keys(this.currentWeather).length > 0;
  }
}
