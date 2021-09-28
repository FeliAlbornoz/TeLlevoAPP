import { Component, AfterViewInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer-c',
  templateUrl: './restablecer-c.page.html',
  styleUrls: ['./restablecer-c.page.scss'],
})
export class RestablecerCPage  {

  constructor(private animationCtrl:AnimationController) { }

  ngAfterViewInit() {
  const animation = this.animationCtrl  
  .create()
  .addElement(document.querySelector('.restablecerC'))
  .duration(5500)
  .iterations(Infinity)
  .fromTo('transform', 'translateX(100px)', 'translateX(0px)')
  .fromTo('opacity', '0.1', '2');

  animation.play()
  }

}
