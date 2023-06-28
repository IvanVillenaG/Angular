import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLoggedIn: boolean = false;
  name: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  showSuccessMessage: boolean = false;
  errorMessage: string = '';

  constructor() {
    this.isLoggedIn = this.checkIfLoggedIn();
  }

  checkIfLoggedIn(): boolean {
    const userData = localStorage.getItem('userData');
    if (userData) {
      return true;
    } else {
      return false;
    }
  }

  login(): void {
    if (this.name && this.lastName && this.email && this.password) {
      this.isLoggedIn = true;
      this.errorMessage = '';

      const userData = {
        name: this.name,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      };
      localStorage.setItem('userData', JSON.stringify(userData));
    } else {
      this.errorMessage = 'Datos introducidos incorrectos';
    }
  }
}
