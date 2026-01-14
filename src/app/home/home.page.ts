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

  kategori:any[] = []

  constructor(private router: Router, private news: News) {}

  ngOnInit() {
    this.news.listBerita().subscribe(
      (data) => { 
        this.berita = data; 
        this.berita.forEach(b => {
          b.views = 0; 
          this.loadViewsPerBerita(b);
        });
      });
    this.news.daftarKategori().subscribe(
      (data) => { this.kategori = data; }
    )
  }
  
  overallRating(news: any): number {
    if (!news.rating || news.rating.length === 0) {
      return 0;
    }
    const total = news.rating.reduce((sum: number, r: any) => sum + r.rate, 0);
    return total / news.rating.length;
  }

  clickBerita(berita: any) {
    this.news.addViews(berita.id).subscribe();
    this.router.navigate(['/tabs/baca', berita.id])
  }

  logout() {
    localStorage.removeItem('app_username');
    localStorage.removeItem('isLoggedIn');

    alert('Anda telah melakukan logout.');

    this.router.navigate(['/login']);
  }

  isArray(value: any): boolean {
    return Array.isArray(value);
  }

  loadViewsPerBerita(berita: any) {
    this.news.loadViews(berita.id).subscribe((data : any) => {
      berita.views = data.views; 
    });
  }
}
