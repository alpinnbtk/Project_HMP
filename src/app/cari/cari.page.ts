import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit() {
    this.berita = [
      {
        index: 0,
        title: '[QUIZ] Seberapa Sehat Matamu? Coba Uji Melalui Kuis Ini!',
        author: 'Rully Bunga',
        publishedDate: new Date('2025-09-25'),
        category: ['Kesehatan'],
        gambar: 'https://image.idntimes.com/post/20180409/cover-367f24ae5ab0e0215bc59c55f374e5e9.jpg?tr=w-1200,f-webp,q-75&width=1200&format=webp&quality=75'
      },
      {
        index: 1,
        title: 'Zulhas Dampingi Prabowo ke AS Bawa Misi Pangan dan Iklim',
        author: 'Trio Hamdani',
        publishedDate: new Date('2025-09-25'),
        category: ['Ekonomi', 'Nasional'],
        gambar: 'https://image.idntimes.com/post/20250925/upload_a749e1ce364a27c32d25354362f14d9e_a939925d-4936-4dc7-a126-f5d52737ac60.jpg?tr=w-1200,f-webp,q-75&width=1200&format=webp&quality=75'
      },
      {
        index: 2,
        title: '7 Rekomendasi Mobil Listrik Keluarga, BYD M6 hingga GAC Aion Y Plus',
        author: 'Uswatun Khasanah',
        publishedDate: new Date('2025-09-25'),
        category: ['Teknologi'],
        gambar: 'https://image.idntimes.com/post/20250425/product-m6-top-86a7c8fbdc72570d029cdb712dd0c68d-f9448f3954e0f27b9f7ae09e084cd572.jpg?tr=w-1200,f-webp,q-75&width=1200&format=webp&quality=75'
      },
      {
        index: 3,
        title: 'Misi Lolos Piala Dunia 2026: Timnas Indonesia Punya Persiapan Sepekan',
        author: 'Tino Satrio',
        publishedDate: new Date('2025-09-25'),
        category: ['Olahraga', 'Nasional'],
        gambar: 'https://image.idntimes.com/post/20250611/upload_27a0dbe571fdab2202b4f5aaa0ce0d42.jpg?tr=w-1200,f-webp,q-75&width=1200&format=webp&quality=75'
      },
      {
        index: 4,
        title: 'Selena Gomez dan Benny Blanco Resmi Menikah',
        author: 'Zahrotustianah',
        publishedDate: new Date('2025-09-28'),
        category: ['Viral', 'Public Figure'],
        gambar: 'https://image.idntimes.com/post/20250928/upload_a654c0b773965de938d9a48bb9ab3480_d6cf73bf-ab95-4267-94be-dc1a690d26b8.jpg?tr=w-1200,f-webp,q-75&width=1200&format=webp&quality=75'
      },
      {
        index: 5,
        title: 'KPK Sita Rp 1,3 M dari Ilham Habibie, Asalnya dari Cicilan Mercy Dibeli RK',
        author: 'DetikNews',
        publishedDate: new Date('2025-10-01T??:??:00'),
        category: ['Hukum', 'Korupsi'],
        gambar: 'https://statik.tempo.co/data/2025/09/30/id_1431680/1431680_720.jpg'
      },
      {
        index: 6,
        title: 'Bangunan Ponpes Ambruk di Sidoarjo Diduga Tak Berizin-Konstruksi Tak Standar',
        author: 'DetikNews',
        publishedDate: new Date('2025-10-01T??:??:00'),
        category: ['Nasional', 'Peristiwa'],
        gambar: 'https://statik.tempo.co/data/2025/09/30/id_1431574/1431574_720.jpg'
      },
      {
        index: 7,
        title: 'Prabowo akan Terbitkan Perpres Tata Kelola MBG: SPPG Harus Punya Chef Terlatih',
        author: 'Liputan6',
        publishedDate: new Date('2025-10-01T12:27:00'),
        category: ['Politik', 'Pemerintahan'],
        gambar: 'https://suaragarut.id/upload/postingan/1759098075_isvyou7phc0pnpf.jpeg'
      },
      {
        index: 8,
        title: 'Impor Indonesia Agustus 2025 Turun 6,56%, Ini Sebabnya',
        author: 'Liputan6',
        publishedDate: new Date('2025-10-01T12:15:00'),
        category: ['Ekonomi', 'Perdagangan'],
        gambar: 'https://www.pajak.com/storage/2025/02/WhatsApp-Image-2025-02-17-at-12.12.09-758x506.jpeg'
      },
      {
        index: 9,
        title: 'Dedi Mulyadi: Pemutihan Pajak Kendaraan di Jabar Berakhir, Lihat dan Rasakan Hasilnya',
        author: 'Liputan6',
        publishedDate: new Date('2025-10-01T15:32:00'),
        category: ['Regional', 'Kebijakan'],
        gambar: 'https://asset.kompas.com/crops/JBC8fQxU6got2ZP3vpNijk6ROCs=/0x0:0x0/1200x800/data/photo/2025/09/25/68d4f6ec02f62.jpg'
      },
      {
        index: 10,
        title: 'KPK Pastikan Panggil Ridwan Kamil Usai Sita Uang Rp 1,3 Miliar',
        author: 'Liputan6',
        publishedDate: new Date('2025-10-01T??:??:00'),
        category: ['Hukum', 'Politik'],
        gambar: 'https://media.suara.com/pictures/653x366/2025/08/28/67376-ridwan-kamil-diperiksa-bareskrim-bareskrim-periksa-ridwan-kamil-ridwan-kamil-rk.jpg'
      },
      {
        index: 11,
        title: 'Musala Pesantren Al Khoziny Ambruk, DPR Minta Pemerintah Beri Pendampingan Pembangunan',
        author: 'Liputan6',
        publishedDate: new Date('2025-10-01T09:58:00'),
        category: ['Nasional', 'Peristiwa'],
        gambar: 'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1634025439/01k2p4csver0gs030k4e87pjv0.jpg'
      },
      {
        index: 12,
        title: 'Kasus Bocah Perempuan Tewas Membusuk di Jakut, Warga Lihat Wajah Korban Penuh Lebam',
        author: 'Liputan6',
        publishedDate: new Date('2025-10-01T09:38:00'),
        category: ['Nasional', 'Kejadian'],
        gambar: 'https://i.ytimg.com/vi/CL2YLeCPRoU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCQ4QZlkclKdo959CIULJkKC3Jaow'
      },
      {
        index: 13,
        title: 'Jakarta Diguyur Hujan, Sejumlah Ruas Jalan Terpantau Padat',
        author: 'Liputan6',
        publishedDate: new Date('2025-10-01T09:32:00'),
        category: ['Metropolitan', 'Cuaca'],
        gambar: 'https://assets.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/jawapos/2022/11/JKT2-Himbauan-WFH-Pekerja-Ibu-Kota-eca5.jpg'
      },
      {
        index: 14,
        title: 'Prabowo Pimpin Upacara Peringatan Hari Kesaktian Pancasila 2025 di Lubang Buaya',
        author: 'Liputan6',
        publishedDate: new Date('2025-10-01T07:46:00'),
        category: ['Nasional', 'Upacara'],
        gambar: 'https://awsimages.detik.net.id/visual/2025/10/01/presiden-prabowo-subianto-memimpin-upacara-peringatan-hari-kesaktian-pancasila-2025-di-monumen-pancasila-sakti-lubang-buaya-ja-1759296388927.jpeg?w=650&q=80'
      }
    ];

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
