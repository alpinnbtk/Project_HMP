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
          komentar: []   
        };

        this.news.getKomentarBerita(id).subscribe((komentar: any) => {
          if (this.berita) {
            this.berita.komentar = komentar;
          }
        });

        this.hitungTotalKomentar();
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


  isArray(value: any): boolean {
    return Array.isArray(value);
  }
}
