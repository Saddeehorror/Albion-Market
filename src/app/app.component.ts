import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AlbionShop';
  items;

  tableData(event){
    console.log(event);
    this.items = event;
  }
}
