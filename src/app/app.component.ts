import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['h1 {color: blue;}'],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!!!';

  names = ['Anna', 'Disa', 'Nicoleta', 'Tibi'];


  onClick(){
    alert(this.title);
  }
}
