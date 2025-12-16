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

  list_kategori: any[] = []

  currentUser = ""
  
  constructor(private news: News) { }

  ngOnInit() {
    this.currentUser = localStorage.getItem('app_username') ?? '';

    this.news.listKategori().subscribe(
      (data) => { this.list_kategori = data; }
    );
  }

  onImageChange(event: any) {
    const files = event.target.files;
    for (let file of files) {
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
            if(response.result==='success'){
              alert("Proses Tambah Berita Berhasil!");
              // this.router.navigate(['/login']);
            }
            else
            {
              alert(response.message)
            }
      }
    )
  }
}
