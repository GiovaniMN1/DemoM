import { Component } from '@angular/core';

interface Store {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  store: Store[] = [
    {value: 'Amazon', viewValue: 'Amazon'},
    {value: 'Store2', viewValue: 'Store'},
    {value: 'Store3', viewValue: 'Store3'},
  ];
}
