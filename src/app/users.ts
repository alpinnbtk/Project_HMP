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

  checkEmail(email:string)
  {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('email', email);
    const urlEncodedData = body.toString();

    return this.http.post("https://ubaya.cloud/hybrid/160423055/check_email.php", urlEncodedData, { headers });
  }
  
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

}
