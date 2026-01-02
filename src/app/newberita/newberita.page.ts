import { Component, OnInit } from '@angular/core';
import { News } from '../news';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-newberita',
  templateUrl: './newberita.page.html',
  styleUrls: ['./newberita.page.scss'],
  standalone: false
})
export class NewberitaPage implements OnInit {

  public alertButtons = ['OK']

  judul_baru = ""
  deskripsi = ""

  imageFiles: File[] = [];
  imagePreviews: string[] = [];

  kategoriList: any[] = [];
  list_kategori: any[] = [];

  currentUser = ""

  constructor(private news: News, private router: Router) { }

  ngOnInit() {
    this.currentUser = localStorage.getItem('app_username') ?? '';

    this.news.listKategori().subscribe((data: any[]) => {
      this.kategoriList = data;
    });
  }

  onImageChange(event: any) {
    const files = event.target.files;

    for (let file of files) {
      if (file.size > 2 * 1024 * 1024) {
        alert('Ukuran foto maksimal 2 MB');
        continue;
      }

      this.imageFiles.push(file);

      const reader = new FileReader();
      reader.onload = (e: any) => this.imagePreviews.push(e.target.result);
      reader.readAsDataURL(file);
    }
  }

  hapusFoto(index: number) {
    this.imagePreviews.splice(index, 1);
    this.imageFiles.splice(index, 1);
  }

  addBerita() {
    const tanggal_dibuat = new Date().toISOString().split('T')[0];
    console.log(tanggal_dibuat)

    this.news.tambahBerita(this.currentUser, this.judul_baru, this.deskripsi, tanggal_dibuat, this.list_kategori, this.imageFiles).subscribe(
      (response: any) => {
        if (response.result === 'success') {
          alert("Proses Tambah Berita Berhasil!");
          this.router.navigate(['/tabs/home']);
        }
        else {
          alert(response.message)
        }
      }
    )
  }
}
