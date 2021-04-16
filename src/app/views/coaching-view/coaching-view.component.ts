import { createDirective } from '@angular/compiler/src/core';
import { Component, HostListener, OnInit, Type } from '@angular/core';
import { Auth0ClientFactory } from '@auth0/auth0-angular/lib/auth.client';

@Component({
  selector: 'app-coaching-view',
  templateUrl: './coaching-view.component.html',
  styleUrls: ['./coaching-view.component.css']
})
export class CoachingViewComponent implements OnInit {

  constructor() { }

  c = 0;
  card1: HTMLElement;
  card2: HTMLElement;
  card3: HTMLElement;

  slideXstart: number;
  slideXend: number;

  scrollToElement($element): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  ngOnInit() { 
    this.card1 = document.getElementById("card1")
    this.card2 = document.getElementById("card2")
    this.card3 = document.getElementById("card3")

    this.resize();
  }


  swipeStart(event){
     this.slideXstart = event.touches[0].clientX;
  }

  swipeEnd(event, currentCard: number) {
    this.slideXend = event.changedTouches[0].clientX;
    this.swipeSlide(currentCard)
  }

  swipeSlide(currentCard: number){
    var distance = this.slideXend - this.slideXstart;
    if (distance > 100) {
      console.log("right");
      if (currentCard == 3) {
        this.changeSlide(1);
      }else {
        this.changeSlide(currentCard + 1)
      }

    }else if (distance < -100) {
      console.log("left");
      if (currentCard == 1) {
        this.changeSlide(3);
      }else {
        this.changeSlide(currentCard - 1)
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resize();
  }

  resize(){
    var width = window.innerWidth; 
    if (width <= 1444) {
      this.card1.style.flexDirection = "row";  
      this.card2.style.flexDirection = "row"; 
      this.card3.style.flexDirection = "row";
      this.card1.style.display = "flex";  
      this.card2.style.display = "none"; 
      this.card3.style.display = "none";
    }
    if (width <= 900) {
      this.card1.style.flexDirection = "column";  
      this.card2.style.flexDirection = "column"; 
      this.card3.style.flexDirection = "column";
      this.card1.style.display = "flex";  
      this.card2.style.display = "none"; 
      this.card3.style.display = "none";
    } 
    if (width > 1444) {
      this.card1.style.flexDirection = "column";  
      this.card2.style.flexDirection = "column"; 
      this.card3.style.flexDirection = "column"; 
      this.card1.style.display = "flex";  
      this.card2.style.display = "flex"; 
      this.card3.style.display = "flex";
    }
  }

  changeSlide(n){

      if (n == 1){
        this.card1.style.display = "flex";  
        this.card2.style.display = "none"; 
        this.card3.style.display = "none";
      }
      if (n == 2) {
        this.card1.style.display = "none";  
        this.card2.style.display = "flex"; 
        this.card3.style.display = "none";
      }
      if (n == 3) {
        this.card1.style.display = "none";  
        this.card2.style.display = "none"; 
        this.card3.style.display = "flex";
      };
  }
}