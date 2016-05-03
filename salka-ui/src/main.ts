import {bootstrap} from "angular2/platform/browser";
import {AppComponent} from "AppComponent";
import {DemoService} from "demo/DemoService";

bootstrap(<any> AppComponent, [DemoService]);