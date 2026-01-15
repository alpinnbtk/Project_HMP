import { Injectable, numberAttribute } from '@angular/core';
import { race, raceWith } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class News {

  constructor(private http: HttpClient) { }

  listBerita(): Observable<any> {
    return this.http.get("https://ubaya.cloud/hybrid/160423055/get_berita.php");
  }

  listBeritaDetail(): Observable<any> {
    return this.http.get("https://ubaya.cloud/hybrid/160423055/get_berita_detail.php");
  }

  listKategori(): Observable<any> {
    return this.http.get("https://ubaya.cloud/hybrid/160423055/get_kategori.php")
  }

  daftarKategori(): Observable<any> {
    return this.http.get("https://ubaya.cloud/hybrid/160423055/list_kategori.php")
  }


  favorites: { [username: string]: any[] } = {};

  tambahBerita(user: string, judul: string, deskripsi: string, tanggal_dibuat: string, kategori: any[], foto: File[]) {
    const body = new FormData();

    body.set('user', user);
    body.set('judul', judul);
    body.set('deskripsi', deskripsi);
    body.set('tanggal', tanggal_dibuat);
    body.set('kategori', JSON.stringify(kategori));

    for (let i = 0; i < foto.length; i++) {
      body.append('foto[]', foto[i], foto[i].name);
    }

    return this.http.post(
      'https://ubaya.cloud/hybrid/160423055/add_berita.php', body);
  }

  deleteBerita(id_berita: number) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('id', id_berita.toString()); 
    const urlEncodedData = body.toString();
    
    return this.http.post("https://ubaya.cloud/hybrid/160423055/delete_berita.php", urlEncodedData, { headers })
  }

  getBeritaById(id: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('id', id.toString());
    const urlEncodedData = body.toString();

    return this.http.post(
      "https://ubaya.cloud/hybrid/160423055/get_berita_by_id.php", urlEncodedData, { headers });
  }

  getBeritaByName(judul: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('judul', judul);
    const urlEncodedData = body.toString();

    return this.http.post(
      "https://ubaya.cloud/hybrid/160423055/get_berita_by_name.php", urlEncodedData, { headers });
  }

  getBeritaByKategori(kategori: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('kategori', kategori);
    const urlEncodedData = body.toString();

    return this.http.post(
      "https://ubaya.cloud/hybrid/160423055/get_berita_by_kategori.php", urlEncodedData, { headers });
  }

  getBeritaByUser(username: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('user', username);
    const urlEncodedData = body.toString();

    return this.http.post(
      "https://ubaya.cloud/hybrid/160423055/get_berita_by_user.php", urlEncodedData, { headers });
  }

  getKomentarBerita(id: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('id', id.toString());
    const urlEncodedData = body.toString();

    return this.http.post(
      "https://ubaya.cloud/hybrid/160423055/get_komentar_berita.php", urlEncodedData, { headers });
  }

  addReply(k_index: number, reply: string, user: string) {

    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('k_index', k_index.toString());
    body.set('reply', reply);
    body.set('username', user);
    const urlEncodedData = body.toString();

    return this.http.post(
      "https://ubaya.cloud/hybrid/160423055/add_reply.php", urlEncodedData, { headers });
  }

  addComment(p_newComment: string, p_index: number, p_currentUser: string) {

    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('index', p_index.toString());
    body.set('username', p_currentUser);
    body.set('isi', p_newComment);
    const urlEncodedData = body.toString();

    return this.http.post(
      "https://ubaya.cloud/hybrid/160423055/add_comment.php", urlEncodedData, { headers });
  }

  addRating(p_newRating: number, p_index: number, p_currentUser: string) {

    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('newRating', p_newRating.toString());
    body.set('index', p_index.toString());
    body.set('username', p_currentUser);
    const urlEncodedData = body.toString();

    return this.http.post(
      "https://ubaya.cloud/hybrid/160423055/add_rating.php", urlEncodedData, { headers });
  }

  addToFavorites(index: number, username: string) {

    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('index', index.toString());
    body.set('username', username);
    const urlEncodedData = body.toString();

    return this.http.post(
      "https://ubaya.cloud/hybrid/160423055/add_favorite.php", urlEncodedData, { headers });
  }


  getFavorites(username: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('username', username);
    const urlEncodedData = body.toString();

    return this.http.post(
      "https://ubaya.cloud/hybrid/160423055/get_favorite.php", urlEncodedData, { headers });
  }

  loadViews(beritaKe:number) {

    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('berita_id', beritaKe.toString());
    const urlEncodedData = body.toString();

    return this.http.post(
      "https://ubaya.cloud/hybrid/160423055/get_views.php", urlEncodedData, { headers });
  }

  addViews(beritaKe: number) {

    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('berita_id', beritaKe.toString());
    const urlEncodedData = body.toString();

    return this.http.post(
      "https://ubaya.cloud/hybrid/160423055/add_views.php", urlEncodedData, { headers });
  }

  addKategori(kategori: string, foto: File) {
    const body = new FormData();

    body.set('kategori', kategori);
    body.set('foto', foto);

    return this.http.post(
      'https://ubaya.cloud/hybrid/160423055/add_kategori.php', body);
  }
}
