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
  beritaRelevan: any[] = [];

  constructor(private router: Router, private news: News) { }

  ngOnInit() {
    this.news.listBerita().subscribe(
      (data) => { 
        this.berita = data; 
        this.berita.forEach(b => {
          b.views = 0; 
          this.loadViewsPerBerita(b);
        });
      }
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
      this.news.getBeritaByName(keyword).subscribe((data: any[]) => {
        this.beritaRelevan = data.map(b => ({
          id: b[0],
          judul: b[1],
          deskripsi: b[2],
          tanggal_dibuat: b[3],
          cover: b[4],
          nama_lengkap: b[5],
          kategori: b[6]
        }));

        this.beritaRelevan.forEach(b => {
          b.views = 0; 
          this.loadViewsPerBerita(b);
        });
      });
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

  isArray(value: any): boolean {
    return Array.isArray(value);
  }

  loadViewsPerBerita(berita: any) {
    this.news.loadViews(berita.id).subscribe((data : any) => {
      berita.views = data.views; 
    });
  }
}
