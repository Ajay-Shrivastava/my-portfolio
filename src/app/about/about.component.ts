import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgClass],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(private router: Router){}

  switchTab(page: string) {
    if(page === 'home') {
      this.router.navigate([page], { queryParams: { isPageSwitched: 'true' }, browserUrl: '/home' });
    } else {
    this.router.navigate([page]);
    }
  }

  isActiveTab(page: string): boolean {
    console.log(this.router.url);
    return this.router.url === page;
  }

}
