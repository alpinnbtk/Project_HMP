import { Component, OnInit } from '@angular/core';
import { News } from '../news';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-favorite',
  templateUrl: './my-favorite.page.html',
  styleUrls: ['./my-favorite.page.scss'],
  standalone: false
})
export class MyFavoritePage implements OnInit {

  berita: any[] = [];
  currentUser = ""

  constructor(private news: News) { }

  ngOnInit() {
    this.currentUser = localStorage.getItem('app_username') ?? '';
    console.log(this.currentUser);

    this.news.getFavorites(this.currentUser).subscribe((data: any[]) => {
      this.berita = data;
    });
  }

  formatTanggal(tanggal: string | Date): string {
    const d = new Date(tanggal);
    const bulan = [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    return `${d.getDate()} ${bulan[d.getMonth()]} ${d.getFullYear()}`;
  }


  overallRating(news: any): number {
    if (!news.rating || news.rating.length === 0) {
      return 0;
    }
    const total = news.rating.reduce((sum: number, r: any) => sum + r.rate, 0);
    return total / news.rating.length;
  }

  isArray(value: any): boolean {
    return Array.isArray(value);
  }
}
