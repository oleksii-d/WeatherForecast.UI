import { inject, TestBed, waitForAsync } from '@angular/core/testing';
import { WeatherForecastComponent } from './weather-forecast.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WeatherForecastService } from './services/weather-forecast.service';
import { WeatherForecast } from './models/weather-forecast.model';
import { of } from 'rxjs';
import { LayoutComponent } from 'src/app/shared/components/layout/layout.component';
import { Component, Input } from '@angular/core';
import { SingleForecast } from './models/single-forecast.model';

describe('WeatherForecastComponent', () => {

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        declarations: [
            WeatherForecastComponent,
            LayoutComponent,
            MockHeaderComponent,
            MockFooterComponent,
            MockSingleForecastComponent
        ],
        imports: 
        [ 
            HttpClientTestingModule 
        ]
        }).compileComponents();

    });

    it('should create the component', () => {
        const fixture = TestBed.createComponent(WeatherForecastComponent);
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });

    it('should render forecasts', waitForAsync(inject([WeatherForecastService], (service: WeatherForecastService) => {
        const fixture = TestBed.createComponent(WeatherForecastComponent);
        const component = fixture.componentInstance;
        spyOn(service, "get").and.returnValue(of(fakeForecast));
        fixture.detectChanges();
        fixture.whenStable().then(()=>{
            expect(component.weatherForecast?.forecasts.length).toEqual(fakeForecast.forecasts.length);
            let compiled = fixture.debugElement.nativeElement;
            expect(compiled.querySelector('.forecast-title').textContent).toEqual("Weather forecast in " + fakeForecast.locationName); 
            expect(compiled.querySelectorAll('app-single-forecast').length).toEqual(fakeForecast.forecasts.length); 
        })
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

@Component({
    selector: 'app-header',
    template: '<header>mock header</header>'
})
class MockHeaderComponent {}

@Component({
    selector: 'app-footer',
    template: '<footer>mock footer</footer>'
})
class MockFooterComponent {}

@Component({
    selector: 'app-single-forecast',
    template: '<p>mock single forecast</p>'
})
class MockSingleForecastComponent {
    @Input()
    public singleForecast: SingleForecast | undefined;
}