import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";



export const routes: Routes = [
    { path: '', component: HomeComponent },

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
