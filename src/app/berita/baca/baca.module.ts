import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BacaPageRoutingModule } from './baca-routing.module';

import { BacaPage } from './baca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BacaPageRoutingModule
  ],
  declarations: [BacaPage]
})
export class BacaPageModule {}
