import { Component, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
    ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 500,
        easing: 'ease',
        once: true
      });
    }
  }
}