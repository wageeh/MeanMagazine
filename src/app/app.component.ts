import {Component} from 'angular2/core';
import {ArticlesComponent} from './components/article';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    templateUrl: `app/app.component.html`,
    directives: [ArticlesComponent]
})
export class App {
    constructor() { }
    ngOnInit() {
        console.log('Initial App');
    }
}
