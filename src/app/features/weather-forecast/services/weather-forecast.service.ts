import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherForecast } from '../models/weather-forecast.model';

@Injectable({
    providedIn: 'root'
})
export class WeatherForecastService {
    constructor(private http: HttpClient) { }

    public get(): Observable<WeatherForecast> {
        return this.http.get<WeatherForecast>(`${environment.apiUrl}/api/weather-forecast`);
    }
}