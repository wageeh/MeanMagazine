import {Component, OnInit} from 'angular2/core';
import {Article} from "./article.model"
import {ArticleComponent} from "./article.component";

@Component({
    selector: 'articles',
    templateUrl: './app/components/article/articles.component.html',
    directives: [ArticleComponent]
})

export class ArticlesComponent implements OnInit {
    articles: Array<Article> = [];
    constructor() {
        this.articles.push(new Article("this is title", "test content", "aly ahmed", new Date(), 30, null));
        this.articles.push(new Article("this is title", "test content", "aly ahmed", new Date(), 30, null));
        this.articles.push(new Article("this is title", "test content", "aly ahmed", new Date(), 30, null));
    }
    ngOnInit() { }
}