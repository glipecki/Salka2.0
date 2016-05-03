import {Component, OnInit} from "angular2/core";
import {DemoService} from "demo/DemoService";

@Component({
    selector: 'my-app',
    template: `
        <h1>{{message}}</h1>
        <span (click)="onClick()">click me!</span>
    `,
})
export class AppComponent implements OnInit {

    private message = "No message :(";

    constructor(private _demoService:DemoService) {
    }

    ngOnInit() {
        this.message = this._demoService.getHelloMessage();
    }

    private onClick() {
        console.log("onClick!");
    }

}


