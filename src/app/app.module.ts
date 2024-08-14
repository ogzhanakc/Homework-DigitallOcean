import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from "./header/header.component";
import { LanguageSelectorComponent } from "./language-selector/language-selector.component";
import { MatSelectModule } from "@angular/material/select";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./home/home.component";
import { CrewListComponent } from "./crew-list/crew-list.component";
import { MatTableModule } from "@angular/material/table";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LanguageSelectorComponent,
        HomeComponent,
        CrewListComponent,
    ],
    bootstrap:[AppComponent],

    imports: [
        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
        BrowserModule, 
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }),],
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}