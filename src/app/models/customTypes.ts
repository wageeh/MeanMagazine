/**
 * Article
 */
export class Article {
    constructor(
        public id?,
        public title?: string,
        public content?: string,
        public author?: string,
        public publishDate?: Date,
        public viewsCount?: number,
        public Comments?: any) {
    }
}

export declare interface AppState {
    articles: Article[];
}
