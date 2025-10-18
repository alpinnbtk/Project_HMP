import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../users';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  username: string = ""
  password: string = ""

  users: any[] = []

  constructor(private router: Router, private the_users: Users) { }

  cekLogin() {
    const isValid = this.users.some(user =>
      user.username === this.username &&
      user.password === this.password
    );

    if (isValid) {
      localStorage.setItem('currentUser', this.username);

      alert('Login berhasil!');
      this.router.navigate(['/tabs/home']);
    } else {
      alert('Username atau password salah!');
    }
  }

  login() {
    // Login Sukses -> Simpan status login
    localStorage.setItem('isLoggedIn', 'true');
    

    this.router.navigate(['/tabs/home']);
  }

  ngOnInit() {
    this.users = this.the_users.users;
  }

}
