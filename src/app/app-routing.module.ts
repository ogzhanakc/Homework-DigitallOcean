import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { CrewCardComponent } from "./crew-card/crew-card.component";



export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'crew/crew-card/:id', component: CrewCardComponent }

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
