import { Component } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kerketi';
  data: Array<any>;
  constructor(private service: ServiceService) {
    this.data = new Array<any>()
  }
  ngOnInit() {
    this.service.getData().subscribe((data) => {
      console.log(data);
      this.data = data;
    })
  }
}
