import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coaching-view',
  templateUrl: './coaching-view.component.html',
  styleUrls: ['./coaching-view.component.css']
})
export class CoachingViewComponent implements OnInit {

  constructor() { }

  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  ngOnInit() {
  }

}
