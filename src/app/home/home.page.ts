import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  berita = [
    {
      title: '[QUIZ] Seberapa Sehat Matamu? Coba Uji Melalui Kuis Ini!',
      author: 'Rully Bunga',
      publishedDate: new Date('2025-09-25'),
      category: 'Kesehatan',
      gambar: 'https://image.idntimes.com/post/20180409/cover-367f24ae5ab0e0215bc59c55f374e5e9.jpg?tr=w-1200,f-webp,q-75&width=1200&format=webp&quality=75'
    },
    {
      title: 'Zulhas Dampingi Prabowo ke AS Bawa Misi Pangan dan Iklim',
      author: 'Trio Hamdani',
      publishedDate: new Date('2025-09-25'),
      category: 'Ekonomi',
      gambar: 'https://image.idntimes.com/post/20250925/upload_a749e1ce364a27c32d25354362f14d9e_a939925d-4936-4dc7-a126-f5d52737ac60.jpg?tr=w-1200,f-webp,q-75&width=1200&format=webp&quality=75'
    },
    {
      title: '7 Rekomendasi Mobil Listrik Keluarga, BYD M6 hingga GAC Aion Y Plus',
      author: 'Uswatun Khasanah',
      publishedDate: new Date('2025-09-25'),
      category: 'Teknologi',
      gambar: 'https://image.idntimes.com/post/20250425/product-m6-top-86a7c8fbdc72570d029cdb712dd0c68d-f9448f3954e0f27b9f7ae09e084cd572.jpg?tr=w-1200,f-webp,q-75&width=1200&format=webp&quality=75'
    },
    {
      title: 'Misi Lolos Piala Dunia 2026: Timnas Indonesia Punya Persiapan Sepekan',
      author: 'Tino Satrio',
      publishedDate: new Date('2025-09-25'),
      category: 'Olahraga',
      gambar: 'https://image.idntimes.com/post/20250611/upload_27a0dbe571fdab2202b4f5aaa0ce0d42.jpg?tr=w-1200,f-webp,q-75&width=1200&format=webp&quality=75'
    },
    {
      title: 'Selena Gomez dan Benny Blanco Resmi Menikah',
      author: 'Zahrotustianah',
      publishedDate: new Date('2025-09-28'),
      category: 'Viral',
      gambar: 'https://image.idntimes.com/post/20250928/upload_a654c0b773965de938d9a48bb9ab3480_d6cf73bf-ab95-4267-94be-dc1a690d26b8.jpg?tr=w-1200,f-webp,q-75&width=1200&format=webp&quality=75'
    }
  ]

  kategori = [
    { image: 'https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/06/2024/01/02/VIRAL-2877297154.jpg', title: 'Viral' },
    { image: 'https://sbvpa.org/wp-content/uploads/2022/08/sports-tools_53876-138077.jpg', title: 'Olahraga' },
    { image: 'https://sistekin.untag-sby.ac.id/uploads/berita/contoh-gambar-artikel.jpeg', title: 'Teknologi' },
    { image: 'https://staiku.ac.id/blog/wp-content/uploads/2024/04/Screenshot_2024-04-20_122434-transformed.png', title: 'Ekonomi' },
    { image: 'https://mahasiswa.co.id/wp-content/uploads/2025/07/image-5.jpg', title: 'Kesehatan' },
  ];

  constructor() {}

}
