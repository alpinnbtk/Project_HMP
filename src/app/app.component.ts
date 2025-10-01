import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  showTabs = true;  

  constructor(private router: Router) {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: any) => {
      const currentUrl = event.urlAfterRedirects.split('?')[0]; // buang query string
      const noTabPages = ['/landing'];

      this.showTabs = !noTabPages.some(page => currentUrl.startsWith(page));
    });

    const loggedIn = localStorage.getItem('isLoggedIn');
    if (loggedIn === 'true') {
      this.router.navigate(['/tabs/home']);
    } else {
      this.router.navigate(['/login']);
    }

  }
}
