import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  username:string = ""
  password:string = ""

  users = [
    { username: 'alpinnbtk', password: 'admin123' },
    { username: 'chorts', password: 'admin123' },
    { username: 'justrich', password: 'admin123' },
    { username: 'tachyon', password: 'admin123' },
  ];

  constructor(private navCtrl: NavController, private router: Router) { }

  cekLogin() {
    const isValid = this.users.some(user =>
      user.username === this.username &&
      user.password === this.password
    );

    if (isValid) {
      alert('Login berhasil!');
      this.navCtrl.navigateRoot('/tabs/home');
    } else {
      alert('Username atau password salah!');
    }
  }

  login() {
    // contoh login sukses (cek username/password dsb)
    // kalau berhasil, simpan status login
    localStorage.setItem('isLoggedIn', 'true');

    // arahkan ke halaman utama (misalnya /tabs/home)
    this.router.navigate(['/tabs/home']);
  }

  
  ngOnInit() {
  }

}
