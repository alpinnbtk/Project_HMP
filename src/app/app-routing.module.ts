import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
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
    path: 'berita',
    children: [
      {
        path: 'baca',
        loadChildren: () => import('./berita/baca/baca.module').then(m => m.BacaPageModule)
      },
      {
        path: 'cari',
        loadChildren: () => import('./berita/cari/cari.module').then(m => m.CariPageModule)
      },
      {
        path: 'daftar',
        loadChildren: () => import('./berita/daftar/daftar.module').then(m => m.DaftarPageModule)
      },
      {
        path: 'kategori',
        loadChildren: () => import('./berita/kategori/kategori.module').then(m => m.KategoriPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
