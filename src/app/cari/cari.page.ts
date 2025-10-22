import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from '../news';

@Component({
  selector: 'app-cari',
  templateUrl: './cari.page.html',
  styleUrls: ['./cari.page.scss'],
  standalone: false
})
export class CariPage implements OnInit {

  judulDicari: string = '';
  berita: any[] = [];
  beritaRelevan: any[] = [];

  constructor(private router: Router, private news: News) { }

  ngOnInit() {
    this.berita = this.news.berita

    this.beritaRelevan = [...this.berita];
  }

  filterNews() {
    const keyword = this.judulDicari.toLowerCase();

    if (keyword.trim() === '') {
      this.beritaRelevan = [...this.berita];
    } else {
      this.beritaRelevan = this.berita.filter(item => item.title.toLowerCase().includes(keyword));
    }
  }

  overallRating(news: any): number {
    if (!news.rating || news.rating.length === 0) {
      return 0;
    }
    const total = news.rating.reduce((sum: number, r: any) => sum + r.rate, 0);
    return total / news.rating.length;
  }

  clickBerita(beritaDipilih: any) {
    this.news.addViews(beritaDipilih.index)
    this.router.navigate(['/tabs/baca', beritaDipilih.index])
  }
}
