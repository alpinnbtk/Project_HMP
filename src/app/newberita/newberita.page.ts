import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newberita',
  templateUrl: './newberita.page.html',
  styleUrls: ['./newberita.page.scss'],
  standalone: false
})
export class NewberitaPage implements OnInit {

  judul_baru = ""
  deskripsi = ""
  
  constructor() { }

  ngOnInit() {
  }

}
