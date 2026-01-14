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

  // get filteredNews() {
  //   console.log(this.kategoriTerpilih)
  //   this.news.getBeritaByKategori(this.kategoriTerpilih).subscribe(
  //     (data) => { this.berita = data }
  //   )
  //   return this.berita
  // }

  isArray(value: any): boolean {
    return Array.isArray(value);
  }

  constructor(private activatedRoute: ActivatedRoute, private news: News, private route: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
        this.kategoriTerpilih = params['jenis'];
        this.loadBerita();
      });
    }

    loadBerita() {
      this.news.getBeritaByKategori(this.kategoriTerpilih).subscribe(
        (data) => { 
          this.berita = data;
          this.berita.forEach(b => {
            b.views = 0; 
            this.loadViewsPerBerita(b);
          }); }
      );
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

  loadViewsPerBerita(berita: any) {
    this.news.loadViews(berita.id).subscribe((data : any) => {
      berita.views = data.views; 
    });
  }

}
