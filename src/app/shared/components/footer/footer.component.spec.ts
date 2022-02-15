import { TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';


describe('FooterComponent', () => {

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        declarations: [
            FooterComponent
        ]
        }).compileComponents();

    });

    it('should create the component', () => {
        const fixture = TestBed.createComponent(FooterComponent);
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });

    it('should render footer', () => {
        const fixture = TestBed.createComponent(FooterComponent);
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.footer-content').textContent).toContain(new Date().getFullYear()); 
    });
});