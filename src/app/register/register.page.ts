import { Component, OnInit, ɵcreateOrReusePlatformInjector } from '@angular/core';
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
  password_konfirmasi = ""

  users:any[] = []

  name_error = ""
  email_error = ""
  password_error = "";

  constructor(private the_users: Users, private router: Router) { }

  ngOnInit() {
  }

  validateName() {
    const name = this.nama_lengkap || '';

    if (name == "") {
      this.name_error = 'Nama tidak boleh kosong!';
    } 
    else if (/[0-9]/.test(name)) {
      this.name_error = 'Tidak boleh ada angka dalam nama anda!';
    } else {
      this.name_error = '';
    }
  }

  checkEmail(){
      this.the_users.checkEmail(this.email).subscribe(
      (response: any) => {
          if(response.result==='error'){
            this.email_error = response.message
          }
    });

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
      this.the_users.registerUser(this.nama_lengkap, this.email, this.username, this.password).subscribe(
        (response: any) => {
            if(response.result==='success'){
              alert("Proses Pendaftaran Akun Berhasil!");
              this.router.navigate(['/login']);
            }
            else
            {
              alert(response.message)
            }
      });
    } else {
      alert("Proses pendaftaran tidak dapat dilakukan. Harap buat password sesuai dengan ketentuan.");
    }
  }

  confirmPassword() {
    const pwd = this.password || '';
    const confirm = this.password_konfirmasi

    if (pwd != confirm) {
      this.password_error = 'Password konfirmasi harus sama dengan password yang anda inputkan diatas!';
    } 
  }
  
}
