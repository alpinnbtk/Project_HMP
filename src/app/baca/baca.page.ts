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
  berita: any[] = []
  newComment = ""
  newRating = 0
  currentUser = ""
  news_added = false
  replyIndex: number = -1
  newReply: string = ""
  totalKomentar: number = 0

  constructor(private route: ActivatedRoute, private news: News) { }

  ngOnInit() {
    this.berita = this.news.berita
    this.currentUser = localStorage.getItem('app_username') ?? ''

    this.route.params.subscribe(params => {
      this.index = params['index'];
      this.checkFavorites();
    });

    this.hitungTotalKomentar(this.index)
  }

  toggleReplyBox(i: number) {
    if (this.replyIndex == i) {
      this.replyIndex = -1;
    } else {
      this.replyIndex = i;
    }
  }

  addReply(k_index: number) {
    var userReply = this.currentUser;
    this.news.addReply(this.index, k_index, this.newReply, userReply);
    this.hitungTotalKomentar(this.index)

    this.newReply = "";
    this.replyIndex = -1;
  }

  hitungTotalKomentar(berita_index: number) {
    this.totalKomentar = 0
    var komenBerita = this.berita[berita_index]

    for (let komen of komenBerita.komentar) {
      this.totalKomentar++
      if (komen.reply.length > 0) {
        this.totalKomentar += komen.reply.length
      }
    }
  }

  submitComment() {
    this.news.addComment(this.newComment, this.index, this.currentUser)
    this.hitungTotalKomentar(this.index)
  }

  submitRating() {
    if (this.newRating > 5) {
      this.newRating = 5
    } else if (this.newRating < 1) {
      this.newRating = 1
    }
    this.news.addRating(this.newRating, this.index, this.currentUser)
  }

  overallRating(news: any): number {
    if (!news.rating || news.rating.length === 0) {
      return 0;
    }
    const total = news.rating.reduce((sum: number, r: any) => sum + r.rate, 0);
    return total / news.rating.length;
  }

  addToFavorites() {
      this.news.addToFavorites(this.index,this.currentUser).subscribe(
      (response: any) => {
          if(response.result==='success'){
            alert('Berita berhasil ditambahkan ke favorit!');
          }
          else
          {
            alert(response.message)
          }
    });
  }

  checkFavorites() {
    this.news_added = this.news.checkFavorites(this.index, this.currentUser);
  }
}
