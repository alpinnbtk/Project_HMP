import { Component, OnInit } from '@angular/core';
import { News } from '../news';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-newkategori',
  templateUrl: './newkategori.page.html',
  styleUrls: ['./newkategori.page.scss'],
  standalone: false
})
export class NewkategoriPage implements OnInit {

  kategori_baru = ""

  fotoKategori!: File;
  fotoPreview: string | null = null;

  constructor(private news: News, private router: Router) { }

  ngOnInit() {
  }

  onFotoChange(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    this.fotoKategori = file;

    const reader = new FileReader();
    reader.onload = () => {
      this.fotoPreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  addKategori() {
    this.news.addKategori(this.kategori_baru, this.fotoKategori).subscribe(
      (response: any) => {
        if (response.result === 'success') {
          alert("Proses Tambah Kategori Berhasil!");
          this.router.navigate(['/tabs/home']);
        }
        else {
          alert(response.message)
        }
      }
    )
  }
}
