import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private news: News) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.kategoriTerpilih = params['jenis']; 
    });
    this.berita = this.news.berita;
  }
}
