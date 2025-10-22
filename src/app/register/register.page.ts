import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage implements OnInit {

  public btnPeringatan = ['OK']

  nama_lengkap = ""
  email = ""
  username = ""
  password = ""

  users:any[] = []

  password_error = "";

  constructor(private the_users: Users, private router: Router) { }

  ngOnInit() {
    this.users = this.the_users.users;
  }

  validatePassword() {
    const pwd = this.password || '';

    if (pwd.length < 8) {
      this.password_error = 'Minimal 8 karakter';
    } else if (!/[A-Z]/.test(pwd)) {
      this.password_error = 'Harus memuat minimal 1 huruf besar';
    } else if (!/[a-z]/.test(pwd)) {
      this.password_error = 'Harus memuat huruf kecil';
    } else if (!/[0-9]/.test(pwd)) {
      this.password_error = 'Harus memuat minimal 1 angka';
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(pwd)) {
      this.password_error = 'Harus memuat suatu simbol khusus';
    } else {
      this.password_error = '';
    }
  }

  registerNewUser() {
    this.validatePassword(); 

    if (this.password_error === '') {
      this.the_users.addNewUser(this.nama_lengkap, this.email, this.username, this.password);
      alert("Proses Pendaftaran Akun Berhasil!");
      this.router.navigate(['/login']);
    } else {
      alert("Proses pendaftaran tidak dapat dilakukan. Harap buat password sesuai dengan ketentuan.");
    }
  }

  
}
