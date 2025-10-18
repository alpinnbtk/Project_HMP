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
  currentUser = ""

  constructor(private route: ActivatedRoute, private news: News) { }

  ngOnInit() {
    this.berita = this.news.berita
    this.currentUser = localStorage.getItem('currentUser') ?? ''

    this.route.params.subscribe(params => {
      this.index = params['index'];
    });
  }

  submitComment() {
    this.news.addComment(this.newComment, this.index, this.currentUser)
  }
}
