import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/index';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  @Input() article: Article;
}
