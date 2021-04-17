import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kerketi';
  data: Array<any>;
  constructor() {
    this.data = new Array<any>()
  }
  ngOnInit() {
    // this..getData().subscribe((data) => {
    //   console.log(data);
    //   this.data = data;
    // })
  }
}
