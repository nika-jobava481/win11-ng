import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CdkDragDrop, CdkDrag, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CdkDropList, CdkDrag],
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
    {
      icon: "../assets/icons/fileExplorer.png",
      id: "file-explorer"
    },
    {
      icon: "../assets/icons/chrome.png",
      id: "chrome"
    },
  ]

  desktop: any[]=[
    {
      icon: "../assets/icons/fileExplorer.png",
      name: "file explorer"
    },
    {
      icon: "../assets/icons/chrome.png",
      name: "chrome"
    },
  ]

  constructor(){
    console.log("app.version - 0.0.2")
  }



  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.pinned, event.previousIndex, event.currentIndex);
  }
}
