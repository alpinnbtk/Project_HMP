import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then(m => m.LandingPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'kategori/:jenis',
    loadChildren: () => import('./kategori/kategori.module').then( m => m.KategoriPageModule)
  },
  {
    path: 'newberita',
    loadChildren: () => import('./newberita/newberita.module').then( m => m.NewberitaPageModule)
  },
  {
    path: 'newkategori',
    loadChildren: () => import('./newkategori/newkategori.module').then( m => m.NewkategoriPageModule)
  },
  {
    path: 'hapus-berita',
    loadChildren: () => import('./hapus-berita/hapus-berita.module').then( m => m.HapusBeritaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
