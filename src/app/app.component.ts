import {Component} from 'angular2/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    templateUrl: `app/app.component.html`
})
export class App {
    constructor() { }
    ngOnInit() {
        console.log('Initial App');
    }
}