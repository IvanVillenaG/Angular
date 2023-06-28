import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  userData: any;

  constructor(private router: Router) {
    this.userData = this.getUserData();
  }

  getUserData(): any {
    const userData = localStorage.getItem('userData');
    if (userData) {
      return JSON.parse(userData);
    }
    return null;
  }

  logout(): void {
    localStorage.removeItem('userData');
    this.router.navigate(['/login']);
  }
}
