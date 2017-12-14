import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService {

  constructor(private http: Http) {

  }
  getNews(){
    // return this.http.get('http://localhost:8080/news').map(response => response.json());
    return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb')
      .map(response => response.json())
      .map(response => response.results);

  }

  news = [
    {title: 'title1'},
    {title: 'title2'},
    {title: 'title3'},
    {title: 'title4'},
    {title: 'title5'},
    {title: 'title6'},
    {title: 'ПО русски'},
  ];
}
