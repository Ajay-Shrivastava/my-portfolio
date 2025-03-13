import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  isPageSwitched: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute){}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.isPageSwitched = params['isPageSwitched'] === 'true' ? true : false
    });
  }

  swichPage(page: string) {
    this.router.navigate([page]);
  }

  isSwitchedPage(): boolean {

    return this.isPageSwitched;
  }

}
