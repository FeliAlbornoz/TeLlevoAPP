import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restablecercc',
  templateUrl: './restablecercc.page.html',
  styleUrls: ['./restablecercc.page.scss'],
})
export class RestablecerccPage implements OnInit {

  constructor(private router: Router) { }
  go(){
    this.router.navigate(['/login'])
  }

  ngOnInit() {
  }

}
