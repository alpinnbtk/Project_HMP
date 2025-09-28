import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'baca',
        loadChildren: () => import('../baca/baca.module').then(m => m.BacaPageModule)
      },
      {
        path: 'cari',
        loadChildren: () => import('../cari/cari.module').then(m => m.CariPageModule)
      },
      {
        path: 'my-favorite',
        loadChildren: () => import('../my-favorite/my-favorite.module').then(m => m.MyFavoritePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
