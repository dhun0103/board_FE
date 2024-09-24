import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isMainPage: boolean = false;

  constructor(private router: Router) {
    // 구독하여 라우터 이벤트가 발생할 때마다 현재 경로를 확인합니다.
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // 현재 경로가 '/' 또는 '/main'인 경우 메인 페이지로 간주합니다.
        this.isMainPage = event.url === '/' || event.url.startsWith('/main');
      }
    });
  }
}
