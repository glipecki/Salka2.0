import {MdAnchor} from "@angular2-material/button";
import {MdCard} from "@angular2-material/card";
import {Component} from "@angular/core";
import {Routes, Router, ROUTER_DIRECTIVES} from "@angular/router";
import {DashboardComponent} from "salka/dashboard/DashboardComponent";
import {ProfileComponent} from "salka/profile/ProfileComponent";

@Component({
    selector: "salka-app",
    template: `
        <div>
            <md-card style="margin-bottom: 15px;">
                <md-card-title>{{title}}</md-card-title>
                <a md-raised-button [routerLink]="['/dashboard']">dashboard</a>
                <a md-raised-button [routerLink]="['/profile']">profile</a>
            </md-card>
            <md-card>
                <router-outlet></router-outlet>
            </md-card>
        </div>
    `,
    directives: [MdAnchor, MdCard, ROUTER_DIRECTIVES]
})
@Routes([
    {path: "/", component: DashboardComponent},
    {path: "/dashboard", component: DashboardComponent},
    {path: "/profile", component: ProfileComponent}
])
export class SalkaRootComponent {

    private title: string = "Salka 2.0";

}
