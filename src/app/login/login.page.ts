import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

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

  constructor(private navCtrl: NavController) { }

  login() {
    const isValid = this.users.some(user =>
      user.username === this.username &&
      user.password === this.password
    );

    if (isValid) {
      alert('✅ Login berhasil');
      this.navCtrl.navigateRoot('/tabs/home');
    } else {
      alert('❌ Username atau password salah');
    }
  }

  ngOnInit() {
  }

}
