import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
  standalone: false
})
export class LandingPage implements OnInit {

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
    console.log('Landing Page Loaded!');
    this.menuCtrl.enable(false);  // ❌ Nonaktifkan menu saat di landing
    this.menuCtrl.close();        // ✅ Tutup menu jika sempat terbuka
  }

  ionViewWillLeave() {
    this.menuCtrl.enable(true);   // 🔁 Aktifkan lagi menu saat meninggalkan landing
  }

}
