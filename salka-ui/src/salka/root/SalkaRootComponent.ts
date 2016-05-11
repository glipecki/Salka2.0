import {Component} from "@angular/core";
import {template} from "salka/root/SalkaRootComponent.html"

@Component({
    selector: "salka-app",
    // template: template
    templateUrl: "salka/root/SalkaRootComponent.html"
})
export class SalkaRootComponent {
    protected title: string = "Hello ng world ;)";
}
