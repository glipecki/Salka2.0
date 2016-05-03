import {Injectable} from "angular2/core";
import {sampleMessage} from "sample/Sample";

@Injectable()
export class DemoService {
    public getHelloMessage() : string {
        console.log("DemoService called...");
        return sampleMessage
    }
}