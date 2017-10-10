import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compnueve',
  templateUrl: './compnueve.component.html',
  styleUrls: ['./compnueve.component.css']
})
export class CompnueveComponent implements OnInit {
  errorImage= './assets/img/warning.png';
  defaultImage : string='./assets/img/loading.gif';
  
  image = './assets/img/precioso.jpg';
  offset = 100;
  constructor() { }

  ngOnInit() {
  }

}
