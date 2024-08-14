import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
    bootstrap:[AppComponent],

    imports: [BrowserModule, AppRoutingModule],
})
export class AppModule { }