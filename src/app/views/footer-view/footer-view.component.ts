import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

export interface Partner {
  name: string;
}

@Component({
  selector: 'app-footer-view',
  templateUrl: './footer-view.component.html',
  styleUrls: ['./footer-view.component.css']
})
export class FooterViewComponent implements OnInit {
  partners: Partner[] = [
    {name: 'Stadt Zürich'},
    {name: 'Zürcher Kantonalbank'},
    {name: 'SwissRe'},
    {name: 'Swisscom AG'},
  ];

  drop(event: CdkDragDrop<Partner[]>) {
    moveItemInArray(this.partners, event.previousIndex, event.currentIndex);
  }

  constructor() { }

  ngOnInit() {
  }

}
