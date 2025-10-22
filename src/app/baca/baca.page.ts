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

  constructor(private route: ActivatedRoute, private news: News) { }

  ngOnInit() {
    this.berita = this.news.berita
    this.currentUser = localStorage.getItem('currentUser') ?? ''

    this.route.params.subscribe(params => {
      this.index = params['index'];
      this.checkFavorites();
    });
  }

  submitComment() {
    this.news.addComment(this.newComment, this.index, this.currentUser)
  }

  submitRating() {
    if (this.newRating > 5) {
      this.newRating = 5
    }else if (this.newRating < 1) {
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
    const success = this.news.addToFavorites(this.index, this.currentUser);
    if (success) {
      alert('Berita berhasil ditambahkan ke favorit!');
    } else {
      alert('Berita sudah ada di daftar favorit Anda.');
    }
  }

  checkFavorites() {
    this.news_added = this.news.checkFavorites(this.index, this.currentUser);
  }
}
