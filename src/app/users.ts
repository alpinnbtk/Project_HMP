import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Users {

  constructor(private http: HttpClient) { }

  users():Observable<any> {
    return this.http.get("https://ubaya.cloud/hybrid/160423055/get_users.php");
  }

  // users = [
  //   { nama_lengkap: 'Alvin Kurniawan', email: 's160423055@student.ubaya.ac.id', username: 'alpinnbtk', password: 'admin123' },
  //   { nama_lengkap: 'Vincentius William Christopher', email: 's160423080@student.ubaya.ac.id', username: 'chorts', password: 'admin123' },
  //   { nama_lengkap: 'Enrich Daniel Ong', email: 's160423091@student.ubaya.ac.id', username: 'justrich', password: 'admin123' },
  //   { nama_lengkap: 'Ignatius Felix Tjitradi', email: 's160423092@student.ubaya.ac.id', username: 'tachyon', password: 'admin123' },
  // ];
  
  login(username:string, password:string)
  {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    const urlEncodedData = body.toString();

    return this.http.post("https://ubaya.cloud/hybrid/160423055/user_login.php", urlEncodedData, { headers });
  }

  registerUser(name:string, email:string, username:string, password:string)
  {
    //this.pastas.push({name:p_name,url:p_url,description:p_description,price:p_price})
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('name', name);
    body.set('email', email);
    body.set('username', username);
    body.set('password', password);
    const urlEncodedData = body.toString();
    
    return this.http.post(
    "https://ubaya.cloud/hybrid/160423055/register_user.php", urlEncodedData, { headers });
  }

  addNewUser(u_name:string, u_email:string, u_username:string, u_password:string) {
    //this.users.push({nama_lengkap:u_name, email:u_email, username:u_username, password:u_password})
  }
}
