import { TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';


describe('HeaderComponent', () => {

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        declarations: [
            HeaderComponent
        ]
        }).compileComponents();

    });

    it('should create the component', () => {
        const fixture = TestBed.createComponent(HeaderComponent);
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });

    it('should render header', () => {
        const fixture = TestBed.createComponent(HeaderComponent);
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h4').textContent).toEqual('Welcome to Weather Forecast Site!'); 
    });
});