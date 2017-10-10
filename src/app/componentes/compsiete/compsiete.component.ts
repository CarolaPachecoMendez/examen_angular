import { Component, OnInit } from '@angular/core';
import { MapsService } from '../../services/maps.service';

@Component({
  selector: 'app-compsiete',
  templateUrl: './compsiete.component.html',
  styleUrls: ['./compsiete.component.css']
})
export class CompsieteComponent implements OnInit {
  lat: number =  -21.527132;
  lng: number = -64.731858;
  zoom: number = 15;
  datos = [];
  
  
  constructor(private mapas: MapsService) { 
    this.datos= mapas.datos;
  }

  ngOnInit() {
  }

}
