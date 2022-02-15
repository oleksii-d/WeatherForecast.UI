import { SingleForecast } from "./single-forecast.model";

export interface WeatherForecast {
    locationName: string;
    forecasts: SingleForecast[];
}