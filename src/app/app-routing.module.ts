import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherForecastComponent } from './features/weather-forecast/weather-forecast.component';

export enum AppRoute {
    WeatherForecast = "weather-forecast"
};

const routes: Routes = [
    { path: "", redirectTo: `/${AppRoute.WeatherForecast}`, pathMatch: "full" },
    { path: AppRoute.WeatherForecast, component: WeatherForecastComponent, data: { title: "Weather Forecast" } }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
