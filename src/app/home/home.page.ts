import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { News } from '../news';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  berita:any[] = []

  kategori = [
    { image: 'https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/06/2024/01/02/VIRAL-2877297154.jpg', title: 'Viral' },
    { image: 'https://sbvpa.org/wp-content/uploads/2022/08/sports-tools_53876-138077.jpg', title: 'Olahraga' },
    { image: 'https://sistekin.untag-sby.ac.id/uploads/berita/contoh-gambar-artikel.jpeg', title: 'Teknologi' },
    { image: 'https://staiku.ac.id/blog/wp-content/uploads/2024/04/Screenshot_2024-04-20_122434-transformed.png', title: 'Ekonomi' },
    { image: 'https://mahasiswa.co.id/wp-content/uploads/2025/07/image-5.jpg', title: 'Kesehatan' },
    { image: 'https://www.portugal.com/wp-content/uploads/2024/09/breaking-news-7562017_1280.jpg', title: 'Peristiwa' },
    { image: 'https://akcdn.detik.net.id/visual/2019/08/17/695786f1-2a1d-4a0e-b520-8f9440842bed_169.jpeg?w=400&q=90', title: 'Nasional' },
  ];

  constructor(private router: Router, private news: News) {}

  ngOnInit() {
    this.news.loadViews();
    this.berita = this.news.berita;
  }
  
  overallRating(news: any): number {
    if (!news.rating || news.rating.length === 0) {
      return 0;
    }
    const total = news.rating.reduce((sum: number, r: any) => sum + r.rate, 0);
    return total / news.rating.length;
  }

  clickBerita(berita: any) {
    this.news.addViews(berita.index)
    this.router.navigate(['/tabs/baca', berita.index])
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isLoggedIn');

    alert('Anda telah melakukan logout.');

    this.router.navigate(['/login']);
  }
}
