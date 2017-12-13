import { Component } from '@angular/core';
import { NewsService} from './news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NewsService]
})
export class AppComponent {


  constructor(private  newsService: NewsService) {
    this.news = newsService.news;
  }
  news = [];
}
