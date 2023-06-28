import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isLoggedIn = this.checkLoginStatus();
  }

  checkLoginStatus(): boolean {
    const userData = localStorage.getItem('userData');
    if (userData) {
      return true;
    } else {
      return false;
    }
  }
}
