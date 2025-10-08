import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Users {

  users = [
    { nama_lengkap: 'Alvin Kurniawan', email: 's160423055@student.ubaya.ac.id', username: 'alpinnbtk', password: 'admin123' },
    { nama_lengkap: 'Vincentius William Christopher', email: 's160423080@student.ubaya.ac.id', username: 'chorts', password: 'admin123' },
    { nama_lengkap: 'Enrich Daniel Ong', email: 's160423091@student.ubaya.ac.id', username: 'justrich', password: 'admin123' },
    { nama_lengkap: 'Ignatius Felix Tjitradi', email: 's160423092@student.ubaya.ac.id', username: 'tachyon', password: 'admin123' },
  ];
  

  addNewUser(u_name:string, u_email:string, u_username:string, u_password:string) {
    this.users.push({nama_lengkap:u_name, email:u_email, username:u_username, password:u_password})
  }
}
