import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from '../news';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cari',
  templateUrl: './cari.page.html',
  styleUrls: ['./cari.page.scss'],
  standalone: false
})
export class CariPage implements OnInit {

  judulDicari: string = '';
  berita: any[] = [];
  beritaRelevan!: Observable<any>

  constructor(private router: Router, private news: News) { }

  ngOnInit() {
    this.news.listBerita().subscribe(
      (data) => { this.berita = data; }
    );

  }

  filterNews() {
    const keyword = this.judulDicari.toLowerCase();
    console.log(keyword)

    if (keyword.trim() === '') {
      this.news.listBerita().subscribe(
        (data) => { this.beritaRelevan = data; }
      );
    } else {
      this.beritaRelevan = this.news.getBeritaByName(keyword);
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
    this.news.addViews(beritaDipilih.id)
    this.router.navigate(['/tabs/baca', beritaDipilih.id])
  }
}
