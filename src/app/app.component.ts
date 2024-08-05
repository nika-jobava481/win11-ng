import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'win11';

  pinned: any[]=[
    {
      icon: "../assets/icons/win11.png",
      id: "win11"
    },
    // {
    //   icon: "../assets/icons/search.svg",
    //   id: "search"
    // },
    {
      icon: "../assets/icons/fileExplorer.png",
      id: "file-explorer"
    },
    {
      icon: "../assets/icons/chrome.png",
      id: "chrome"
    },
  ]
}
