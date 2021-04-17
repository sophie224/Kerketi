import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  buttonState = true;
  
  username: string;
  password: string;
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(1, 1, this.password, this.username)
    .subscribe((data) => {
      alert(data);
    }, (err) => {
      alert(JSON.stringify(err));
    })
  }

}
