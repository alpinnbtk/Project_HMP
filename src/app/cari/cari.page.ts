import { Component, OnInit } from '@angular/core';
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

  constructor(private news: News) {}

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

}
