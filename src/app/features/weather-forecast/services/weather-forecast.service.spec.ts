import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed, waitForAsync } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { WeatherForecast } from '../models/weather-forecast.model';
import { WeatherForecastService } from './weather-forecast.service';

describe('WeatherForecastService', () => {

    let httpTestingController: HttpTestingController;
    let service: WeatherForecastService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        providers: [
            WeatherForecastService
        ],
        imports: 
        [ 
            HttpClientTestingModule 
        ]
        }).compileComponents();

        httpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(WeatherForecastService);
    });

    it('should create the service', () => {
         expect(service).toBeTruthy();
    });

    it('get: should return data', waitForAsync(inject([WeatherForecastService], (service: WeatherForecastService) => {
        service.get().subscribe((response: WeatherForecast) => {
            expect(response).toBeTruthy();
            expect(JSON.stringify(response)).toEqual(JSON.stringify(fakeForecast));
          });
      
          const req = httpTestingController
                    .expectOne(`${environment.apiUrl}/api/weather-forecast`);
      
          req.flush(fakeForecast);
    })));

});

export const fakeForecast : WeatherForecast = {
    locationName : 'Fake Location Name',
    forecasts : [
        {
            date : new Date(),
            dayDescription: "dayDescription",
            dayPrecipitation: "dayPrecipitation",
            nightDescription: "nightDescription",
            nightPrecipitation: "nightPrecipitation",
            minTemperature: "minTemperature",
            maxTemperature: "maxTemperature"
        },
        {
            date : new Date(),
            dayDescription: "dayDescription",
            dayPrecipitation: "dayPrecipitation",
            nightDescription: "nightDescription",
            nightPrecipitation: "nightPrecipitation",
            minTemperature: "minTemperature",
            maxTemperature: "maxTemperature"
        },
        {
            date : new Date(),
            dayDescription: "dayDescription",
            dayPrecipitation: "dayPrecipitation",
            nightDescription: "nightDescription",
            nightPrecipitation: "nightPrecipitation",
            minTemperature: "minTemperature",
            maxTemperature: "maxTemperature"
        }
    ]
};