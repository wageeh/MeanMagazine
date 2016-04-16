import {Component} from 'angular2/core';
import {ArticlesComponent} from './components';
import {Devtools} from '@ngrx/devtools';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    templateUrl: `app/app.component.html`,
    directives: [Devtools, ArticlesComponent]
})
export class App {
}
