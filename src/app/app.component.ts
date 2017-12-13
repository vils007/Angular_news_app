import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
