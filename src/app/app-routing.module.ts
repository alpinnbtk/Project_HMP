import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'my-favorite',
    loadChildren: () => import('./my-favorite/my-favorite.module').then( m => m.MyFavoritePageModule)
  },
  {
    path: 'kategori',
    loadChildren: () => import('./berita/kategori/kategori.module').then( m => m.KategoriPageModule)
  },
  {
    path: 'kategori',
    loadChildren: () => import('./berita/kategori/kategori.module').then( m => m.KategoriPageModule)
  },
  {
    path: 'daftar',
    loadChildren: () => import('./berita/daftar/daftar.module').then( m => m.DaftarPageModule)
  },
  {
    path: 'baca',
    loadChildren: () => import('./berita/baca/baca.module').then( m => m.BacaPageModule)
  },
  {
    path: 'cari',
    loadChildren: () => import('./berita/cari/cari.module').then( m => m.CariPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
