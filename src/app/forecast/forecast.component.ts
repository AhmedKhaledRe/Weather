import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {

  loc$: Observable<string>;
  forecast: any = <any>{};

  constructor(private store: Store<any>,private weatherService: WeatherService) {
    //This sends the keyword to the service function which searches for the weather data according to the keyword we enter.
    this.loc$ = store.pipe(select('loc'));
    this.loc$.subscribe(loc => {
      this.searchForecast(loc);
    })
  }

  searchForecast(loc: string) {
    this.forecast = {};
    this.weatherService.getForecast(loc,localStorage.getItem('locale')).subscribe(res => {
        this.forecast = res;
      }, err => {
      })
  }

  resultFound() {
    return Object.keys(this.forecast).length > 0;
  }
}
