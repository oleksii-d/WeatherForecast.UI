import { DatePipe } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { SingleForecast } from '../models/single-forecast.model';
import { SingleForecastComponent } from './single-forecast.component';

describe('SingleForecastComponent', () => {

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        declarations: [
            SingleForecastComponent
        ]
        }).compileComponents();

    });

    it('should create the component', () => {
        const fixture = TestBed.createComponent(SingleForecastComponent);
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });

    it('should render single forecast', () => {
        const fixture = TestBed.createComponent(SingleForecastComponent);
        const component = fixture.componentInstance;
        component.singleForecast = fakeSingleForecast;
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.card-header').textContent).toContain(new DatePipe('en-US').transform(fakeSingleForecast.date, 'longDate')); 
        expect(compiled.querySelector('.card-body').textContent).toContain(fakeSingleForecast.dayDescription); 
        expect(compiled.querySelector('.card-body').textContent).toContain(fakeSingleForecast.dayPrecipitation); 
        expect(compiled.querySelector('.card-body').textContent).toContain(fakeSingleForecast.nightDescription); 
        expect(compiled.querySelector('.card-body').textContent).toContain(fakeSingleForecast.nightPrecipitation); 
        expect(compiled.querySelector('.card-body').textContent).toContain(fakeSingleForecast.minTemperature); 
        expect(compiled.querySelector('.card-body').textContent).toContain(fakeSingleForecast.maxTemperature); 
    });
});


export const fakeSingleForecast : SingleForecast = {
        
    date : new Date(2020,2,2),
    dayDescription: "dayDescription",
    dayPrecipitation: "dayPrecipitation",
    nightDescription: "nightDescription",
    nightPrecipitation: "nightPrecipitation",
    minTemperature: "minTemperature",
    maxTemperature: "maxTemperature"
  
};