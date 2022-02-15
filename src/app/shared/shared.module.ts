import { NgModule } from "@angular/core";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { LayoutComponent } from "./components/layout/layout.component";

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        LayoutComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        LayoutComponent
    ]
  })
  export class SharedModule { }