import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [NgClass],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {

  isPageSwitched: boolean = false;
  initialPageSwitched: boolean = false;
  previousUrl: string = '/home';

  showHeader: boolean = true;
  hideHeader: boolean = false;
  noHeader: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute){}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        if (event.url === '/home' && this.previousUrl === '/home'){
          this.showHeader = false
          this.hideHeader = false;
          this.noHeader = true;
          this.previousUrl = event.url;
        }
        else if (event.url === '/' && this.previousUrl === '/home') {
          this.showHeader = false
          this.hideHeader = false;
          this.noHeader = true;
          this.previousUrl = event.url;
        }
        else if (event.url === '/home' && this.previousUrl !== '/home') {
          this.showHeader = false;
          this.hideHeader = true;
          this.noHeader = false;
          this.previousUrl = event.url;
        }
        else if (event.url !== '/home' && this.previousUrl === '/home') {
          this.showHeader = true;
          this.hideHeader = false;
          this.noHeader = false;
          this.previousUrl = event.url;
        }

      }
    });
  }

  switchTab(page: string) {
    this.router.navigate([page]);
  }

  isActiveTab(page: string): boolean {
    return this.router.url === page;
  }

  isSwitchedPage(): boolean {
    return this.isPageSwitched;
  }

}
