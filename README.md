                                        https://weather-deploy-app.herokuapp.com/
                                        
# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

or Run On Heroku `https://weather-deploy-app.herokuapp.com/`

## Documentaion

--> Run npm install

    to install nodemodules\ Package

--> a file called location-reducer.ts

    if location not insert in top-bar-componnt input-text state=initalstate 
    else state=SET_LOCATION and check for location(payload)

--> Angular service called WeatherService

    to handle and fetch requests API

    has a function called getCurrentWeather to handle current weather request

    has a function called getForecast to handle forecast weather request

--> TranslateService

    a Language Files in assests\i18n\ Folders contains languages like [Arabic : 'ar' , English : 'en' .......] 

--> Deploy On Heroku

    `https://weather-deploy-app.herokuapp.com/`
