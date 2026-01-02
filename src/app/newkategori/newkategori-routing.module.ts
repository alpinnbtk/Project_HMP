import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewkategoriPage } from './newkategori.page';

const routes: Routes = [
  {
    path: '',
    component: NewkategoriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewkategoriPageRoutingModule {}
