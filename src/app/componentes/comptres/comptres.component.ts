import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comptres',
  templateUrl: './comptres.component.html',
  styleUrls: ['./comptres.component.css']
})
export class ComptresComponent implements OnInit {

  texto:string = ' Hola el Proyecto 4 Patas (P4P) es una organización sin fines de lucro abocada a difundir, proteger y promover los derechos de los animales.Propiciamos una actitud de respeto hacia todas las especies tomando como eje la premisa ética de que son seres sintientes y no “cosas” para ser utilizadas por el ser humano. Rechazamos todo tipo de explotación animal incluyendo su uso como vestimenta, comida, entretenimiento y experimentación. Nuestros objetivos: Luchar contra el abandono, el maltrato y el sufrimiento animal en cualquiera de sus formas (vestimenta, comida, entretenimiento, experimentación).Educar sobre el respeto por la vida de los animales a través de charlas y talleres educativos en lugares públicos y privados.Realizar campañas de esterilización gratuitas o a bajo costo en las zonas marginales.  Difundir las castraciones masivas, gratuitas, sistemáticas y extensivas como único método ético de control de la superpoblación animal y exigir al Estado para que las lleve a cabo.Asistir a animales en situación de riesgo, recuperarlos y entregarlos en adopción a dueños responsables. Asesorar legalmente a los ciudadanos en casos de maltrato animal.Difundir el veganismo como filosofía de vida libre de sufrimiento animal';

  current_text: string = 'capitalize';
  
  change_text:Array<string>=['capitalize','upper','lower','allfirts'];

  constructor() { }

  ngOnInit() {
  }

}
