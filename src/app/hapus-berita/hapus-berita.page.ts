import { Component, OnInit } from '@angular/core';
import { News } from '../news';

@Component({
  selector: 'app-hapus-berita',
  templateUrl: './hapus-berita.page.html',
  styleUrls: ['./hapus-berita.page.scss'],
  standalone: false
})
export class HapusBeritaPage implements OnInit {

  currentUser = ""
  beritaUser: any[] = [];

  constructor(private news: News) { }

  ngOnInit() {
    this.currentUser = localStorage.getItem('app_username') ?? '';

    this.news.getBeritaByUser(this.currentUser).subscribe(
        data => this.beritaUser = data
      );
  }

  hapusBerita(id: any) {
    this.news.deleteBerita(id).subscribe((response: any) => {
        if(response.result === 'success'){
          alert("Berita berhasil dihapus!")
        }
        else {
          alert(response.message)
        }
    });
  }

  isArray(value: any): boolean {
    return Array.isArray(value);
  }
}
