import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsComponent } from "./shared/tabs/tabs.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TabsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-portfolio';
}
