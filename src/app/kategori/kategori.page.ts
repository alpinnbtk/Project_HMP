import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { News } from '../news'

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.page.html',
  styleUrls: ['./kategori.page.scss'],
  standalone: false
})
export class KategoriPage implements OnInit {

  kategoriTerpilih = ""

  berita:any[] = []

  get filteredNews() {
    return this.berita.filter(news => {
      if (Array.isArray(news.category)) {
        return news.category.includes(this.kategoriTerpilih);
      } else {
        return news.category === this.kategoriTerpilih;
      }
    });
  }

  isArray(value: any): boolean {
    return Array.isArray(value);
  }

  constructor(private activatedRoute: ActivatedRoute, private news: News, private route: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
       this.kategoriTerpilih = params['jenis']; 
    });
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
    this.route.navigate(['/tabs/baca', berita.index])
  }
}
