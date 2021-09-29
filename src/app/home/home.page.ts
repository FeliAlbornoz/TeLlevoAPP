import { Component, AfterViewInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private animationCtrl:AnimationController) { }

  ngAfterViewInit() {
  const animation = this.animationCtrl  
  .create()
  .addElement(document.querySelector('#animacionhome'))
  .addElement(document.querySelector('#animacionhome2'))
  .duration(2500)
  .iterations(1)
  .fromTo('transform', 'translateX(30px)', 'translateX(0px)')
  .fromTo('opacity', '0.1', '2');

  animation.play()
  }

}
