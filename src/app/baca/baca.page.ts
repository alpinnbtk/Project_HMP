import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from '../news';

@Component({
  selector: 'app-baca',
  templateUrl: './baca.page.html',
  styleUrls: ['./baca.page.scss'],
  standalone: false
})
export class BacaPage implements OnInit {

  index = 0
  berita: any | null = null;
  newComment = ""
  newRating = 0
  currentUser = ""
  news_added = false
  replyIndex: number = -1
  newReply: string = ""
  totalKomentar: number = 0

  kategori = [
    { image: 'https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/06/2024/01/02/VIRAL-2877297154.jpg', title: 'Viral' },
    { image: 'https://sbvpa.org/wp-content/uploads/2022/08/sports-tools_53876-138077.jpg', title: 'Olahraga' },
    { image: 'https://sistekin.untag-sby.ac.id/uploads/berita/contoh-gambar-artikel.jpeg', title: 'Teknologi' },
    { image: 'https://staiku.ac.id/blog/wp-content/uploads/2024/04/Screenshot_2024-04-20_122434-transformed.png', title: 'Ekonomi' },
    { image: 'https://mahasiswa.co.id/wp-content/uploads/2025/07/image-5.jpg', title: 'Kesehatan' },
    { image: 'https://www.portugal.com/wp-content/uploads/2024/09/breaking-news-7562017_1280.jpg', title: 'Peristiwa' },
    { image: 'https://akcdn.detik.net.id/visual/2019/08/17/695786f1-2a1d-4a0e-b520-8f9440842bed_169.jpeg?w=400&q=90', title: 'Nasional' },
  ];

  constructor(private route: ActivatedRoute, private news: News) { }

  ngOnInit() {
    this.currentUser = localStorage.getItem('app_username') ?? '';

    this.route.params.subscribe(params => {
      const id = params['index'];
      this.index = id;

      this.news.getBeritaById(id).subscribe((data: any) => {
        this.berita = {
          ...data,
          gambar: data.gambar ? data.gambar.split(', ') : [],
          kategori: data.kategori ? data.kategori.split(', ') : [],
          komentar: []   // inisialisasi dulu
        };

        this.news.getKomentarBerita(id).subscribe((komentar: any) => {
          if (this.berita) {
            this.berita.komentar = komentar;
          }
        });

        this.hitungTotalKomentar();
        this.checkFavorites();
      });
    });
  }

  toggleReplyBox(i: number) {
    if (this.replyIndex == i) {
      this.replyIndex = -1;
    } else {
      this.replyIndex = i;
    }
  }

  addReply(k_index: number) {
    // var userReply = this.currentUser;
    // this.news.addReply(this.index, k_index, this.newReply, userReply);
    // this.hitungTotalKomentar()

    // this.newReply = "";
    // this.replyIndex = -1;

    if (!this.newReply?.trim() || !this.berita) return;

    const komentar = this.berita.komentar[k_index];
    const komentarId = komentar.id;

    this.news.addReply(komentarId, this.newReply, this.currentUser)
      .subscribe((res: any) => {

        if (res && res.result === 'success') {
          console.log('Reply berhasil');

          this.newReply = '';
          this.replyIndex = -1;

          this.news.getKomentarBerita(this.berita.id)
            .subscribe(k => {
              if (this.berita) {
                this.berita.komentar = k;
              }
            });

        } else {
          console.log(res?.message || 'Gagal reply');
        }

      });
  }

  hitungTotalKomentar() {
    this.totalKomentar = 0;

    if (!this.berita || !this.berita.komentar) return;

    for (let komen of this.berita.komentar) {
      this.totalKomentar++;
      if (komen.reply?.length) {
        this.totalKomentar += komen.reply.length;
      }
    }
  }

  submitComment() {
    if (!this.newComment || !this.berita) return;

    this.news.addComment(this.newComment, this.berita.id, this.currentUser)
      .subscribe(
        (res: any) => {
          if (res && res.result === 'success') {
            console.log('Komentar berhasil', res);

            this.newComment = '';

            this.news.getKomentarBerita(this.berita.id)
              .subscribe(k => {
                if (this.berita) {
                  this.berita.komentar = k;
                }
                this.hitungTotalKomentar();
              });
          } else {
            console.log(res.message);
          }
        });
  }

  submitRating() {
    if (this.newRating > 5) {
      this.newRating = 5
    } else if (this.newRating < 1) {
      this.newRating = 1
    }
    this.news.addRating(this.newRating, this.index, this.currentUser).subscribe(
      (response: any) => {
        if (response.result === "success") {
          alert('Berhasil menambahkan rating.');
          this.news.getBeritaById(this.berita.id)
            .subscribe(d => this.berita.avg_rating = d.avg_rating);
        } else {
          alert(response.message)
        }
      }
    )
  }

  addToFavorites() {
    this.news.addToFavorites((this.index), this.currentUser).subscribe(
      (response: any) => {
        if (response.result === 'success') {
          alert('Berita berhasil ditambahkan ke favorit!');
        }
        else {
          alert(response.message)
        }
      });
  }

  checkFavorites() {
    this.news_added = this.news.checkFavorites(this.index, this.currentUser);
  }

  isArray(value: any): boolean {
    return Array.isArray(value);
  }
}
