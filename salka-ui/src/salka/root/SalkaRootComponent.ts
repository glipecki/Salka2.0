import {Component} from "@angular/core";
import {template} from "salka/root/SalkaRootComponent.html"
import {MdButton} from "@angular2-material/button";
import {MdCard} from "@angular2-material/card";
import {MdInput} from "@angular2-material/input";

@Component({
    selector: "salka-app",
    templateUrl: "salka/root/SalkaRootComponent.html",
    directives: [MdButton, MdCard, MdInput]
})
export class SalkaRootComponent {
    protected title: string = "Hello ng world ;)";
}
