import { Component, Input } from '@angular/core';
import { SingleForecast } from '../models/single-forecast.model';

@Component({
    selector: 'app-single-forecast',
    templateUrl: 'single-forecast.component.html',
    styleUrls: ["single-forecast.component.scss"]
})
export class SingleForecastComponent {
    
    @Input()
    public singleForecast: SingleForecast | undefined;

}
