import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BacaPage } from './baca.page';

const routes: Routes = [
  {
    path: '',
    component: BacaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BacaPageRoutingModule {}
