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

  async onImageChange(event: any) {
    const files = event.target.files;

    for (let file of files) {

      if (file.size > 5 * 1024 * 1024) {
        alert('Ukuran foto maksimal 5 MB sebelum kompresi');
        continue;
      }

      const compressed = await this.compressImage(file);

      console.log(
        'Before:', Math.round(file.size / 1024), 'KB',
        'After:', Math.round(compressed.size / 1024), 'KB'
      );

      this.imageFiles.push(compressed);

      const reader = new FileReader();
      reader.onload = (e: any) => this.imagePreviews.push(e.target.result);
      reader.readAsDataURL(compressed);
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

  compressImage(file: File): Promise<File> {
    return new Promise((resolve) => {
      const reader = new FileReader();

      reader.onload = (event: any) => {
        const img = new Image();
        img.src = event.target.result;

        img.onload = () => {
          const canvas = document.createElement('canvas');

          const MAX_WIDTH = 1024;
          const scale = MAX_WIDTH / img.width;

          canvas.width = MAX_WIDTH;
          canvas.height = img.height * scale;

          const ctx = canvas.getContext('2d')!;
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

          canvas.toBlob(
            (blob) => {
              if (!blob) return;

              const compressedFile = new File(
                [blob],
                file.name.replace(/\.(png|jpg|jpeg)$/i, '.jpg'),
                {
                  type: 'image/jpeg',
                  lastModified: Date.now()
                }
              );

              resolve(compressedFile);
            },
            'image/jpeg',
            0.7 
          );
        };
      };

      reader.readAsDataURL(file);
    });
  }

}
