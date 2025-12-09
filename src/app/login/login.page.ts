import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../users';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  username: string = ""
  password: string = ""
  fullname: string = ""

  users: any[] = []

  constructor(private router: Router, private the_users: Users) { }

  ngOnInit() {
    // this.users = this.the_users.users;
  }
  
  cekLogin(){
      this.the_users.login(this.username,this.password).subscribe(
      (response: any) => {
          if(response.result==='success'){
            alert("Login berhasil!")
            this.fullname=response.fullname
            localStorage.setItem("app_username",this.username)
            localStorage.setItem("app_fullname",this.fullname)

            this.login()
            this.router.navigate(['/tabs/home']);
          }
          else
          {
            alert(response.message)
          }
    });

  }

  // cekLogin() {
  //   const isValid = this.users.some(user =>
  //     user.username === this.username &&
  //     user.password === this.password
  //   );

  //   if (isValid) {
  //     localStorage.setItem('currentUser', this.username);
  //     this.login()
      
  //     alert('Login berhasil!');
  //     this.router.navigate(['/tabs/home']);
  //   } else {
  //     alert('Username atau password salah!');
  //   }
  // }

  login() {
    localStorage.setItem('isLoggedIn', 'true');
    
    this.router.navigate(['/tabs/home']);
  }


}
