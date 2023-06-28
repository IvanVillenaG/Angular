import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isLoggedIn: boolean = false;
  userName: string = '';

  constructor() {
    this.isLoggedIn = this.checkIfLoggedIn();
    this.userName = this.getUserName();
  }

  checkIfLoggedIn(): boolean {
    const userData = localStorage.getItem('userData');
    if (userData) {
      return true;
    } else {
      return false;
    }
  }

  getUserName(): string {
    const userData = localStorage.getItem('userData');
    if (userData) {
      const user = JSON.parse(userData);
      return user.name;
    }
    return '';
  }
}
