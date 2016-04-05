import {Component,Input} from 'angular2/core';
import {Article} from "./article.model"
@Component({
    selector: 'article',
    templateUrl: 'app/components/article/article.component.html',
})

export class ArticleComponent{
    @Input() 
    article:Article;
    constructor() {
     }
}