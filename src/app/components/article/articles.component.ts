import {Component} from 'angular2/core';
import {Article, AppState} from '../../models';
import {ArticleComponent} from './article.component';
import {ArticleActions} from './../../actions';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import { articles } from '../../../dumyData';

@Component({
    selector: 'articles',
    templateUrl: 'app/components/article/articles.component.html',
    directives: [ArticleComponent]
})

export class ArticlesComponent {
    articles: Observable<Article[]>;

    constructor(public store: Store<AppState>) {
        this.articles = this.store.select(state => state.articles);
        this.store.dispatch({ type: ArticleActions.Load_ARTICLES, payload: articles });
    }
}
