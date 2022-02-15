import { Component } from '@angular/core';
import { WeatherForecast } from './models/weather-forecast.model';
import { WeatherForecastService } from './services/weather-forecast.service';

@Component({
    selector: 'app-weather-forecast',
    templateUrl: 'weather-forecast.component.html',
    styleUrls: ["weather-forecast.component.scss"]
})
export class WeatherForecastComponent {
    
    public weatherForecast: WeatherForecast | undefined;

    constructor(private weatherForecastService: WeatherForecastService) { }
    
    public ngOnInit(): void {

        this.weatherForecastService.get()
            .subscribe(response => {
                this.weatherForecast = response;
            });
    }
}
