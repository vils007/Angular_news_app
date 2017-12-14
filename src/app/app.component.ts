import { Component } from '@angular/core';
import { NewsService} from './news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NewsService]
})
export class AppComponent {

  news = [];

  constructor(private  newsService: NewsService) {

  }

  ngOnInit() {
    // this.news = this.newsService.news;
    this.newsService.getNews().subscribe(news => {
    console.log(news);
    });
  }

}
