import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewkategoriPageRoutingModule } from './newkategori-routing.module';

import { NewkategoriPage } from './newkategori.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewkategoriPageRoutingModule
  ],
  declarations: [NewkategoriPage]
})
export class NewkategoriPageModule {}
